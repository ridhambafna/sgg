import { Schema, models, model } from "mongoose";

const RegistrationSchema = new Schema(
  {
    eventId: { type: Schema.Types.ObjectId, ref: "Event" },
    yatraId: { type: Schema.Types.ObjectId, ref: "Yatra" },
    fullName: { type: String, required: true, trim: true },
    age: { type: Number, min: 1 },
    gender: { type: String, enum: ["male", "female", "other"] },
    city: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    emergencyContact: {
      name: { type: String, default: "" },
      phone: { type: String, default: "" },
    },
    registrationStatus: {
      type: String,
      enum: ["pending", "confirmed", "waitlisted", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "partial", "paid", "refunded", "not_applicable"],
      default: "pending",
    },
    amountPayable: { type: Number, default: 0 },
    amountPaid: { type: Number, default: 0 },
    adminNotes: { type: String, default: "" },
    consentGiven: { type: Boolean, required: true },
  },
  { timestamps: true }
);

RegistrationSchema.index({ eventId: 1 });
RegistrationSchema.index({ yatraId: 1 });
RegistrationSchema.index({ registrationStatus: 1 });

const Registration =
  models.Registration || model("Registration", RegistrationSchema);
export default Registration;

