import { Callout } from "@radix-ui/themes";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Callout.Root color="amber" className="max-w-xl">
      <Callout.Text>
        This issue does not exist.{" "}
        <Link href="/issues" className="underline">
          Back to issues
        </Link>
      </Callout.Text>
    </Callout.Root>
  );
};

export default NotFoundPage;
