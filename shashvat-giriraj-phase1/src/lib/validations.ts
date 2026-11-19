import { z } from "zod";

// ── Contact form ──────────────────────────
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Invalid email address").trim().toLowerCase(),
  subject: z.string().min(3, "Subject must be at least 3 characters").trim(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
export type ContactInput = z.infer<typeof contactSchema>;

// ── Volunteer application ─────────────────
export const volunteerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").trim(),
  city: z.string().min(1, "City is required").trim(),
  phone: z
    .string()
    .min(7, "Phone must be at least 7 digits")
    .regex(/^[+]?[\d\s\-()]{7,15}$/, "Invalid phone number format")
    .trim(),
  email: z
    .string()
    .email("Invalid email address")
    .trim()
    .toLowerCase()
    .optional()
    .or(z.literal("")),
  areaOfInterest: z
    .enum(["volunteering", "event_support", "community", "other"])
    .default("volunteering"),
  message: z.string().optional().default(""),
  consentGiven: z.literal(true, {
    message: "You must consent to proceed",
  }),
});
export type VolunteerInput = z.infer<typeof volunteerSchema>;

// ── Registration ──────────────────────────
export const registrationSchema = z
  .object({
    eventId: z.string().optional(),
    yatraId: z.string().optional(),
    fullName: z.string().min(2, "Name must be at least 2 characters").trim(),
    age: z.number().int().min(1).optional(),
    gender: z.enum(["male", "female", "other"]).optional(),
    city: z.string().min(1, "City is required").trim(),
    phone: z
      .string()
      .min(7, "Phone must be at least 7 digits")
      .regex(/^[+]?[\d\s\-()]{7,15}$/, "Invalid phone number format")
      .trim(),
    email: z
      .string()
      .email("Invalid email address")
      .trim()
      .toLowerCase()
      .optional()
      .or(z.literal("")),
    emergencyContact: z
      .object({
        name: z.string().optional().default(""),
        phone: z.string().optional().default(""),
      })
      .optional(),
    consentGiven: z.literal(true, {
      message: "You must consent to proceed",
    }),
  })
  .refine((data) => data.eventId || data.yatraId, {
    message: "Either eventId or yatraId is required",
  });
export type RegistrationInput = z.infer<typeof registrationSchema>;

