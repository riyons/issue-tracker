"use client";

import { Avatar, Box, DropdownMenu, Text } from "@radix-ui/themes";

interface Props {
  image?: string;
  email: string;
  signOutAction: () => Promise<void>;
}

const UserButton = ({ image, email, signOutAction }: Props) => {
  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={image}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="2">{email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <form action={signOutAction}>
              <button type="submit">Sign out</button>
            </form>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default UserButton;
