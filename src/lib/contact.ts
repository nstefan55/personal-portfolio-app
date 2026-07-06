import { z } from "zod";

// Mirrors the Phase 4 form payload (contact-form-flow.md).
export const contactSchema = z.object({
  intent: z.enum(["project", "job", "hello"]),
  message: z.string().trim().min(10).max(2000),
  name: z.string().trim().min(2).max(100),
  email: z.email(),
  lang: z.enum(["en", "hr"]),
  honeypot: z.string().default(""),
  startedAt: z.number().int().positive(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
