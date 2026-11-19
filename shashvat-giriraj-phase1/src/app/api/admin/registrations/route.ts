import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, ["registration_manager", "viewer"]);
  if ("status" in auth) return auth;

  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "30", 10);
    const status = searchParams.get("status");
    const exportCsv = searchParams.get("export") === "true";

    const query: Record<string, unknown> = {};
    if (status) query.registrationStatus = status;

    if (exportCsv) {
      const records = await Registration.find(query)
        .populate("eventId", "title")
        .populate("yatraId", "title")
        .sort({ createdAt: -1 })
        .lean();

      // Generate RFC 4180 CSV
      const headers = [
        "ID",
        "Full Name",
        "City",
        "Phone",
        "Email",
        "Event/Yatra",
        "Status",
        "Payment",
        "Created At",
      ];

      interface PopulatedRef {
        title?: string;
      }

      interface RegistrationRecord {
        _id: unknown;
        fullName?: string;
        city?: string;
        phone?: string;
        email?: string;
        eventId?: PopulatedRef | null;
        yatraId?: PopulatedRef | null;
        registrationStatus?: string;
        paymentStatus?: string;
        createdAt: string | Date;
      }

      const rows = (records as unknown as RegistrationRecord[]).map((r) => [
        String(r._id),
        `"${(r.fullName || "").replace(/"/g, '""')}"`,
        `"${(r.city || "").replace(/"/g, '""')}"`,
        `"${(r.phone || "").replace(/"/g, '""')}"`,
        `"${(r.email || "").replace(/"/g, '""')}"`,
        `"${(r.eventId?.title || r.yatraId?.title || "N/A").replace(/"/g, '""')}"`,
        r.registrationStatus || "pending",
        r.paymentStatus || "pending",
        new Date(r.createdAt).toISOString(),
      ]);

      const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

      return new NextResponse(csvContent, {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="sgg-registrations-${Date.now()}.csv"`,
        },
      });
    }

    const skip = (page - 1) * limit;
    const [registrations, total] = await Promise.all([
      Registration.find(query)
        .populate("eventId", "title slug")
        .populate("yatraId", "title slug")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Registration.countDocuments(query),
    ]);

    return NextResponse.json({
      success: true,
      data: registrations,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error("Admin list registrations error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
