"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { issueSchema } from "@/app/validationSchemas";

export type CreateIssueResult =
  | { success: true }
  | { success: false; error: string };

export async function createIssue(data: unknown): Promise<CreateIssueResult> {
  const validation = issueSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      error: validation.error.issues[0].message,
    };
  }

  await prisma.issue.create({
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });

  revalidatePath("/issues");
  redirect("/issues");
}
