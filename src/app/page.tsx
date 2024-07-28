import { Form } from "@/components/Form";
import Link from "next/link";
import { getFullName } from "@/lib/action";

export default function Page() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/about">About</Link>

      <section>
        <form action={getFullName}>
          <Form />
        </form>
      </section>
    </main>
  );
}
