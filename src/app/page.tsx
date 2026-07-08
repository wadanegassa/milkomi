import { redirect } from "next/navigation";

export default function Home() {
  // Root path defaults to English locale.
  // With middleware, `/` will still be handled, but this ensures a working entrypoint.
  // eslint-disable-next-line no-restricted-globals
  return redirect("/en");
}
