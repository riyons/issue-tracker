import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueForm from "@/app/issues/_components/IssueForm";

interface Props {
  params: Promise<{ id: string }>;
}

const EditIssuePage = async ({ params }: Props) => {
  const { id } = await params;

  const issueId = parseInt(id);
  if (isNaN(issueId)) return notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
  });

  if (!issue) return notFound();

  return <IssueForm issue={issue}></IssueForm>;
};

export default EditIssuePage;
