import { auth } from "@/auth";
import { SignIn } from "@/components/SignIn";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return <SignIn />;
}