import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import VolunteerApplication from "@/models/VolunteerApplication";
import { volunteerSchema } from "@/lib/validations";
import { formRateLimiter, getClientIp } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = getClientIp(request);
  const { success: withinLimit } = formRateLimiter.check(ip);
  if (!withinLimit) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const parsed = volunteerSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.issues.map((i) => ({
        field: i.path.join("."),
        message: i.message,
      }));
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 400 }
      );
    }

    await connectDB();

    await VolunteerApplication.create({
      ...parsed.data,
      status: "new",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Volunteer application submitted successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Volunteer API error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to submit application" },
      { status: 500 }
    );
  }
}

