import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import path from "path";

// Load .env.local or .env
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@shashvatgiriraj.org";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "ChangeMe123!Safe";

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is not set in environment or .env.local");
  process.exit(1);
}

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    role: { type: String, default: "super_admin" },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

async function seedAdmin() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI as string);
    console.log("Connected.");

    const existing = await Admin.findOne({ email: ADMIN_EMAIL.toLowerCase().trim() });
    if (existing) {
      console.log(`ℹ️ Admin user already exists: ${ADMIN_EMAIL}`);
      process.exit(0);
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, salt);

    await Admin.create({
      name: "Initial Super Admin",
      email: ADMIN_EMAIL.toLowerCase().trim(),
      passwordHash,
      role: "super_admin",
      isActive: true,
    });

    console.log("✅ Super Admin successfully seeded!");
    console.log(`   Email:    ${ADMIN_EMAIL}`);
    console.log(`   Password: ${ADMIN_PASSWORD}`);
    console.log("\n⚠️ Please change this password upon initial login.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding admin:", err);
    process.exit(1);
  }
}

seedAdmin();

