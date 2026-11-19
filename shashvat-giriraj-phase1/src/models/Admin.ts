import { Schema, models, model } from "mongoose";

const AdminSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String, required: true },
    role: {
      type: String,
      enum: [
        "super_admin",
        "event_manager",
        "registration_manager",
        "gallery_manager",
        "content_editor",
        "viewer",
      ],
      default: "viewer",
    },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

AdminSchema.index({ role: 1 });

const Admin = models.Admin || model("Admin", AdminSchema);
export default Admin;

