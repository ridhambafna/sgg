import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Yatra from "@/models/Yatra";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    const yatras = await Yatra.find({ status: "published" })
      .sort({ startDate: 1 })
      .lean();

    return NextResponse.json({
      success: true,
      count: yatras.length,
      data: yatras,
    });
  } catch (error) {
    console.error("Yatras API error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to fetch yatras" },
      { status: 500 }
    );
  }
}

