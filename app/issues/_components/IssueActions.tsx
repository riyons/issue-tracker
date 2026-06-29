import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import DeleteIssueButton from "./DeleteIssueButton";

interface Props {
  issueId: number;
}

const IssueActions = ({ issueId }: Props) => {
  return (
    <Flex direction="column" gap="3">
      <Button asChild>
        <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
      </Button>
      <DeleteIssueButton issueId={issueId}></DeleteIssueButton>
    </Flex>
  );
};

export default IssueActions;
