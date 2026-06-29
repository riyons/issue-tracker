import { Button, Heading, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {
  return (
    <Flex direction="column" gap="4" align="start">
      <Heading size="8">Issue Tracker</Heading>
      <Text color="gray">Track and manage your project issues in one place.</Text>
      <Button asChild>
        <Link href="/issues">View Issues</Link>
      </Button>
    </Flex>
  );
}
