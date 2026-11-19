import { Schema, models, model } from "mongoose";

const EventSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    description: { type: String, required: true },
    coverImage: { type: String, default: "" },
    coverPublicId: { type: String, default: "" },
    eventDate: { type: Date, required: true },
    endDate: { type: Date },
    location: { type: String, required: true },
    category: {
      type: String,
      enum: ["Yatra", "Bhakti", "Spiritual", "Community"],
      default: "Community",
    },
    registrationOpen: { type: Boolean, default: false },
    registrationCapacity: { type: Number, min: 1 },
    registrationInstructions: { type: String, default: "" },
    itinerary: [{
      title: { type: String, required: true },
      description: { type: String, default: "" },
      date: { type: Date },
      time: { type: String, default: "" },
    }],
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

EventSchema.index({ status: 1, eventDate: 1 });

const Event = models.Event || model("Event", EventSchema);
export default Event;
