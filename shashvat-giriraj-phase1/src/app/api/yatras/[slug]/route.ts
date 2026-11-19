import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Yatra from "@/models/Yatra";

export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await connectDB();

    const yatra = await Yatra.findOne({
      slug,
      status: "published",
    }).lean();

    if (!yatra) {
      return NextResponse.json(
        { success: false, message: "Yatra not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: yatra });
  } catch (error) {
    console.error("Yatra detail API error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to fetch yatra" },
      { status: 500 }
    );
  }
}

