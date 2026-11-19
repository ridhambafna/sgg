import { Schema, models, model } from "mongoose";

const GalleryAssetSchema = new Schema(
  {
    title: { type: String, trim: true },
    caption: { type: String, default: "" },
    altText: { type: String, default: "" },
    mediaType: {
      type: String,
      enum: ["image", "video"],
      required: true,
    },
    cloudinaryPublicId: { type: String, required: true },
    cloudinaryUrl: { type: String, required: true },
    width: { type: Number },
    height: { type: Number },
    tags: [{ type: String }],
    eventId: { type: Schema.Types.ObjectId, ref: "Event" },
    yatraId: { type: Schema.Types.ObjectId, ref: "Yatra" },
    isApproved: { type: Boolean, default: false, index: true },
    sortOrder: { type: Number, default: 0 },
    uploadedBy: { type: Schema.Types.ObjectId, ref: "Admin" },
  },
  { timestamps: true }
);

GalleryAssetSchema.index({ isApproved: 1, sortOrder: 1 });
GalleryAssetSchema.index({ tags: 1 });

const GalleryAsset =
  models.GalleryAsset || model("GalleryAsset", GalleryAssetSchema);
export default GalleryAsset;

