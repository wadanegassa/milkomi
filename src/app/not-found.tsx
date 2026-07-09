import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-background text-foreground grid place-items-center px-4">
      <div className="max-w-xl text-center">
        <p className="text-sm tracking-wide text-accent">404</p>
        <h1 className="mt-3 font-heading text-5xl">Page Not Found</h1>
        <p className="mt-4 text-foreground/75">
          The page you requested is unavailable. Let’s get you back to Milkomi Hotel’s homepage.
        </p>
        <div className="mt-8">
          <Link href="/en" className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

