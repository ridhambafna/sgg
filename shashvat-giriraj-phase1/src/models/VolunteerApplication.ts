import { Schema, models, model } from "mongoose";

const VolunteerApplicationSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    areaOfInterest: {
      type: String,
      enum: ["volunteering", "event_support", "community", "other"],
      default: "volunteering",
    },
    message: { type: String, default: "" },
    consentGiven: { type: Boolean, required: true },
    status: {
      type: String,
      enum: ["new", "reviewed", "contacted", "archived"],
      default: "new",
    },
    adminNotes: { type: String, default: "" },
  },
  { timestamps: true }
);

VolunteerApplicationSchema.index({ status: 1, createdAt: -1 });

const VolunteerApplication =
  models.VolunteerApplication ||
  model("VolunteerApplication", VolunteerApplicationSchema);
export default VolunteerApplication;

