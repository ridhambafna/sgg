import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req, ["gallery_manager", "content_editor", "event_manager"]);
  if ("status" in auth) return auth;

  try {
    const { folder = "shashvat-giriraj" } = await req.json().catch(() => ({}));

    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

    if (!apiSecret || !apiKey || !cloudName) {
      return NextResponse.json(
        { success: false, message: "Cloudinary credentials not configured on server" },
        { status: 500 }
      );
    }

    const timestamp = Math.round(new Date().getTime() / 1000);

    const signature = cloudinary.utils.api_sign_request(
      {
        folder,
        timestamp,
      },
      apiSecret
    );

    return NextResponse.json({
      success: true,
      data: {
        timestamp,
        signature,
        apiKey,
        cloudName,
        folder,
      },
    });
  } catch (err) {
    console.error("Cloudinary sign error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to generate upload signature" },
      { status: 500 }
    );
  }
}

