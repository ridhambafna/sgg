import { Schema, models, model } from "mongoose";

const YatraSchema = new Schema(
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
    destination: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    coverImage: { type: String, default: "" },
    coverPublicId: { type: String, default: "" },
    itinerary: [
      {
        day: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, default: "" },
        activities: [{ type: String }],
      },
    ],
    travelDetails: { type: String, default: "" },
    accommodationDetails: { type: String, default: "" },
    instructions: { type: String, default: "" },
    registrationOpen: { type: Boolean, default: false },
    registrationCapacity: { type: Number, min: 1 },
    status: {
      type: String,
      enum: ["draft", "published", "completed", "cancelled"],
      default: "draft",
      index: true,
    },
    seoTitle: { type: String, default: "" },
    seoDescription: { type: String, default: "" },
  },
  { timestamps: true }
);

YatraSchema.index({ status: 1, startDate: 1 });

const Yatra = models.Yatra || model("Yatra", YatraSchema);
export default Yatra;

