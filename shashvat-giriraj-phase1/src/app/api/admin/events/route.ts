import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Event from "@/models/Event";
import AuditLog from "@/models/AuditLog";
import { requireAuth } from "@/lib/auth";
import { z } from "zod";

export const dynamic = "force-dynamic";

const eventInputSchema = z.object({
  title: z.string().min(2, "Title is required").trim(),
  slug: z.string().min(2, "Slug is required").trim().toLowerCase(),
  description: z.string().min(10, "Description must be at least 10 chars"),
  coverImage: z.string().optional().default(""),
  eventDate: z.string().or(z.date()),
  endDate: z.string().or(z.date()).optional().nullable(),
  location: z.string().min(2, "Location is required").trim(),
  category: z.enum(["Yatra", "Bhakti", "Spiritual", "Community"]).default("Community"),
  registrationOpen: z.boolean().default(false),
  registrationCapacity: z.number().int().min(1).optional().nullable(),
  registrationInstructions: z.string().optional().default(""),
  itinerary: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().optional().default(""),
        time: z.string().optional().default(""),
      })
    )
    .optional()
    .default([]),
  status: z.enum(["draft", "published", "completed", "cancelled"]).default("draft"),
  seoTitle: z.string().optional().default(""),
  seoDescription: z.string().optional().default(""),
});

// GET /api/admin/events — list with pagination & filter
export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, ["event_manager", "content_editor", "viewer"]);
  if ("status" in auth) return auth;

  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    const query: Record<string, unknown> = {};
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (page - 1) * limit;
    const [events, total] = await Promise.all([
      Event.find(query).sort({ eventDate: -1 }).skip(skip).limit(limit).lean(),
      Event.countDocuments(query),
    ]);

    return NextResponse.json({
      success: true,
      data: events,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error("Admin list events error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

// POST /api/admin/events — create event
export async function POST(req: NextRequest) {
  const auth = await requireAuth(req, ["event_manager", "content_editor"]);
  if ("status" in auth) return auth;

  try {
    const body = await req.json();
    const parsed = eventInputSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors: parsed.error.issues },
        { status: 400 }
      );
    }

    await connectDB();

    const existing = await Event.findOne({ slug: parsed.data.slug });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "An event with this slug already exists" },
        { status: 400 }
      );
    }

    const event = await Event.create(parsed.data);

    // Audit log
    await AuditLog.create({
      action: "event.create",
      entity: "Event",
      entityId: event._id,
      performedBy: auth.session.id,
      newData: event.toObject(),
    });

    return NextResponse.json({ success: true, data: event }, { status: 201 });
  } catch (error) {
    console.error("Admin create event error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

