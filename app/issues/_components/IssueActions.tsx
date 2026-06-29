import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import DeleteIssueButton from "./DeleteIssueButton";

interface Props {
  issueId: number;
}

const IssueActions = ({ issueId }: Props) => {
  return (
    <Flex direction="column" gap="3">
      <Link href={`/issues/${issueId}/edit`}>
        <Button>Edit Issue</Button>
      </Link>
      <DeleteIssueButton issueId={issueId}></DeleteIssueButton>
    </Flex>
  );
};

export default IssueActions;
