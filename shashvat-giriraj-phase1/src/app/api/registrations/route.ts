import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";
import Event from "@/models/Event";
import Yatra from "@/models/Yatra";
import { registrationSchema } from "@/lib/validations";
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
    const parsed = registrationSchema.safeParse(body);

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
    const data = parsed.data;

    // Verify event or yatra exists and registration is open
    if (data.eventId) {
      const event = await Event.findById(data.eventId);
      if (!event || event.status !== "published") {
        return NextResponse.json(
          { success: false, message: "Event not found or not available" },
          { status: 404 }
        );
      }
      if (!event.registrationOpen) {
        return NextResponse.json(
          { success: false, message: "Registration is not open for this event" },
          { status: 400 }
        );
      }
      // Check capacity
      if (event.registrationCapacity) {
        const count = await Registration.countDocuments({
          eventId: data.eventId,
          registrationStatus: { $in: ["pending", "confirmed"] },
        });
        if (count >= event.registrationCapacity) {
          return NextResponse.json(
            { success: false, message: "Registration capacity reached" },
            { status: 400 }
          );
        }
      }
    }

    if (data.yatraId) {
      const yatra = await Yatra.findById(data.yatraId);
      if (!yatra || yatra.status !== "published") {
        return NextResponse.json(
          { success: false, message: "Yatra not found or not available" },
          { status: 404 }
        );
      }
      if (!yatra.registrationOpen) {
        return NextResponse.json(
          { success: false, message: "Registration is not open for this yatra" },
          { status: 400 }
        );
      }
      if (yatra.registrationCapacity) {
        const count = await Registration.countDocuments({
          yatraId: data.yatraId,
          registrationStatus: { $in: ["pending", "confirmed"] },
        });
        if (count >= yatra.registrationCapacity) {
          return NextResponse.json(
            { success: false, message: "Registration capacity reached" },
            { status: 400 }
          );
        }
      }
    }

    const registration = await Registration.create({
      ...data,
      registrationStatus: "pending",
      paymentStatus: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration submitted successfully",
        data: { id: registration._id },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration API error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to process registration" },
      { status: 500 }
    );
  }
}

