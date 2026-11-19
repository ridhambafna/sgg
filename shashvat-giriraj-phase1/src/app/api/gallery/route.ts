import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import GalleryAsset from "@/models/GalleryAsset";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const tag = searchParams.get("tag");

    const filter: Record<string, unknown> = { isApproved: true };
    if (tag) {
      filter.tags = tag;
    }

    const assets = await GalleryAsset.find(filter)
      .sort({ sortOrder: 1, createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      count: assets.length,
      data: assets,
    });
  } catch (error) {
    console.error("Gallery API error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to fetch gallery" },
      { status: 500 }
    );
  }
}

