import { Button, Heading, Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex direction="column" gap="4" p="6">
      <Heading>Issue Tracker</Heading>
      <Button>Test Button</Button>
    </Flex>
  );
}
