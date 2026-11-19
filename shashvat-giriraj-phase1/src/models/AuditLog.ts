import { Schema, models, model } from "mongoose";

const AuditLogSchema = new Schema(
  {
    action: { type: String, required: true },
    entity: { type: String, required: true },
    entityId: { type: Schema.Types.ObjectId },
    performedBy: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
    previousData: { type: Schema.Types.Mixed },
    newData: { type: Schema.Types.Mixed },
    ipAddress: { type: String, default: "" },
  },
  { timestamps: true }
);

AuditLogSchema.index({ entity: 1, entityId: 1 });
AuditLogSchema.index({ performedBy: 1 });
AuditLogSchema.index({ createdAt: -1 });

const AuditLog = models.AuditLog || model("AuditLog", AuditLogSchema);
export default AuditLog;

