import { Schema, models, model } from "mongoose";

const SevaOpportunitySchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: { type: String, required: true },
    category: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    contactInfo: { type: String, default: "" },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

SevaOpportunitySchema.index({ isActive: 1, sortOrder: 1 });

const SevaOpportunity =
  models.SevaOpportunity || model("SevaOpportunity", SevaOpportunitySchema);
export default SevaOpportunity;

