import { Schema, models, model } from "mongoose";

const PaymentSchema = new Schema(
  {
    registrationId: {
      type: Schema.Types.ObjectId,
      ref: "Registration",
      required: true,
    },
    amount: { type: Number, required: true, min: 0 },
    paymentMethod: {
      type: String,
      enum: ["cash", "bank_transfer", "upi", "cheque", "other"],
      required: true,
    },
    transactionId: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "verified", "failed", "refunded"],
      default: "pending",
    },
    recordedBy: { type: Schema.Types.ObjectId, ref: "Admin" },
    reconciliationStatus: {
      type: String,
      enum: ["pending", "reconciled", "discrepancy"],
      default: "pending",
    },
    reconciliationNotes: { type: String, default: "" },
  },
  { timestamps: true }
);

PaymentSchema.index({ registrationId: 1 });
PaymentSchema.index({ status: 1 });

const Payment = models.Payment || model("Payment", PaymentSchema);
export default Payment;

