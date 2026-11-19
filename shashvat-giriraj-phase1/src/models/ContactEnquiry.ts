import { Schema, models, model } from "mongoose";

const ContactEnquirySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "read", "replied", "archived"],
      default: "new",
    },
    adminNotes: { type: String, default: "" },
  },
  { timestamps: true }
);

ContactEnquirySchema.index({ status: 1, createdAt: -1 });

const ContactEnquiry =
  models.ContactEnquiry || model("ContactEnquiry", ContactEnquirySchema);
export default ContactEnquiry;

