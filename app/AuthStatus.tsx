import { auth, signIn, signOut } from "@/auth";
import UserButton from "./UserButton";

const AuthStatus = async () => {
  const session = await auth();

  if (!session?.user) {
    return (
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit" className="text-zinc-600 hover:text-zinc-900">
          Sign in
        </button>
      </form>
    );
  }

  return (
    <UserButton
      image={session.user.image ?? undefined}
      email={session.user.email ?? ""}
      signOutAction={async () => {
        "use server";
        await signOut();
      }}
    />
  );
};

export default AuthStatus;
