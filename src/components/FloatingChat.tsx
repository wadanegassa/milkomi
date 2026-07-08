import Link from "next/link";
import {getTranslations} from "next-intl/server";

export default async function FloatingChat() {
  const t = await getTranslations("common");

  // Replace with your real Telegram/WhatsApp links.
  const telegramHref = "https://t.me/milkomi_hotel";

  return (
    <div className="fixed bottom-5 right-4 z-50">
      <Link
        href={telegramHref}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-lg hover:brightness-110 focus-visible:ring-2 ring-accent"
        aria-label={t("chatToBook")}
      >
        {t("chatToBook")}
      </Link>
    </div>
  );
}

