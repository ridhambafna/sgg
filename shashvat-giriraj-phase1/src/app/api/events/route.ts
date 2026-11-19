import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Event from "@/models/Event";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    const events = await Event.find({ status: "published" })
      .sort({ eventDate: 1 })
      .lean();

    return NextResponse.json({
      success: true,
      count: events.length,
      data: events,
    });
  } catch (error) {
    console.error("Events API error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to fetch events" },
      { status: 500 }
    );
  }
}
