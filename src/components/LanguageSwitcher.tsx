"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {useLocale} from "next-intl";

import {locales} from "@/i18n/routing";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const activeLocale = useLocale();

  // pathname is already prefixed, e.g. `/en/rooms`.
  const parts = pathname.split("/").filter(Boolean);
  const rest = parts.length > 1 ? parts.slice(1).join("/") : "";

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => {
        const href = rest ? `/${locale}/${rest}` : `/${locale}`;
        const isActive = locale === activeLocale;
        return (
          <Link
            key={locale}
            href={href}
            className={[
              "rounded-full px-3 py-1 text-xs transition-colors border",
              isActive
                ? "bg-accent text-accent-foreground border-accent"
                : "bg-background/60 text-foreground/80 border-white/10 hover:bg-surface"
            ].join(" ")}
            aria-current={isActive ? "page" : undefined}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}

