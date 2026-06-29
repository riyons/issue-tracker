import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required.")
    .max(255, "Title must be at most 255 characters."),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65535, "Description is too long."),
});

export type IssueFormData = z.infer<typeof issueSchema>;
