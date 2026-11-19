import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Yatra from "@/models/Yatra";
import AuditLog from "@/models/AuditLog";
import { requireAuth } from "@/lib/auth";
import { z } from "zod";

export const dynamic = "force-dynamic";

const yatraInputSchema = z.object({
  title: z.string().min(2, "Title is required").trim(),
  slug: z.string().min(2, "Slug is required").trim().toLowerCase(),
  description: z.string().min(10, "Description must be at least 10 chars"),
  destination: z.string().min(2, "Destination is required").trim(),
  startDate: z.string().or(z.date()),
  endDate: z.string().or(z.date()),
  coverImage: z.string().optional().default(""),
  itinerary: z
    .array(
      z.object({
        day: z.number().int().min(1),
        title: z.string().min(1),
        description: z.string().optional().default(""),
        activities: z.array(z.string()).optional().default([]),
      })
    )
    .optional()
    .default([]),
  travelDetails: z.string().optional().default(""),
  accommodationDetails: z.string().optional().default(""),
  instructions: z.string().optional().default(""),
  registrationOpen: z.boolean().default(false),
  registrationCapacity: z.number().int().min(1).optional().nullable(),
  status: z.enum(["draft", "published", "completed", "cancelled"]).default("draft"),
  seoTitle: z.string().optional().default(""),
  seoDescription: z.string().optional().default(""),
});

// GET /api/admin/yatras
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
        { destination: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (page - 1) * limit;
    const [yatras, total] = await Promise.all([
      Yatra.find(query).sort({ startDate: -1 }).skip(skip).limit(limit).lean(),
      Yatra.countDocuments(query),
    ]);

    return NextResponse.json({
      success: true,
      data: yatras,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error("Admin list yatras error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

// POST /api/admin/yatras
export async function POST(req: NextRequest) {
  const auth = await requireAuth(req, ["event_manager", "content_editor"]);
  if ("status" in auth) return auth;

  try {
    const body = await req.json();
    const parsed = yatraInputSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors: parsed.error.issues },
        { status: 400 }
      );
    }

    await connectDB();

    const existing = await Yatra.findOne({ slug: parsed.data.slug });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "A yatra with this slug already exists" },
        { status: 400 }
      );
    }

    const yatra = await Yatra.create(parsed.data);

    await AuditLog.create({
      action: "yatra.create",
      entity: "Yatra",
      entityId: yatra._id,
      performedBy: auth.session.id,
      newData: yatra.toObject(),
    });

    return NextResponse.json({ success: true, data: yatra }, { status: 201 });
  } catch (error) {
    console.error("Admin create yatra error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

