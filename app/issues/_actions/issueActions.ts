"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { issueSchema } from "@/app/validationSchemas";

export type IssueActionResult =
  | { success: true }
  | { success: false; error: string };

export async function createIssue(data: unknown): Promise<IssueActionResult> {
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

export async function updateIssue(
  id: number,
  data: unknown,
): Promise<IssueActionResult> {
  const validation = issueSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      error: validation.error.issues[0].message,
    };
  }

  const issue = await prisma.issue.findUnique({ where: { id } });
  if (!issue) {
    return { success: false, error: "Issue not found." };
  }

  await prisma.issue.update({
    where: { id },
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });

  revalidatePath("/issues");
  revalidatePath(`/issues/${id}`);
  redirect(`/issues/${id}`);
}

export async function deleteIssue(id: number): Promise<IssueActionResult> {
  const issue = await prisma.issue.findUnique({ where: { id } });
  if (!issue) {
    return { success: false, error: "Issue not found." };
  }

  await prisma.issue.delete({ where: { id } });

  revalidatePath("/issues");
  redirect("/issues");
}
