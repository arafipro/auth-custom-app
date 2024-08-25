import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function SigninButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit" variant={"outline"}>
        Sign in
      </Button>
    </form>
  );
}
