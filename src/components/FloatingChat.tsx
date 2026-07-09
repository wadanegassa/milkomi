import Link from "next/link";

export default async function FloatingChat() {
  const telegramHref = "https://t.me/milkomi_int_hotel";

  return (
    <div className="fixed bottom-5 right-4 z-50">
      <Link
        href={telegramHref}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-lg hover:brightness-110 focus-visible:ring-2 ring-accent"
        aria-label="Chat with us on Telegram to book"
      >
        Chat to book
      </Link>
    </div>
  );
}
