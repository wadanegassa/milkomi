import Image from "next/image";
import Link from "next/link";
import {getTranslations} from "next-intl/server";

import {navLinks} from "@/lib/nav";

export default async function Footer({locale}: {locale: string}) {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-2 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image
                  src="/assets/images/logo/logo-light.svg"
                  alt="Milkomi Hotel logo"
                  fill
                />
              </div>
              <div>
                <p className="text-sm font-semibold">Milkomi</p>
                <p className="text-xs text-foreground/70">Luxury Hotel</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground/80">
              {t("address")}
            </p>
            <div className="mt-4 text-sm text-foreground/80 space-y-2">
              <p>
                <span className="text-foreground/60">{t("phoneLabel")}:</span>{" "}
                <a className="underline" href="tel:+251900000000">
                  +251 900 000 000
                </a>
              </p>
              <p>
                <span className="text-foreground/60">{t("emailLabel")}:</span>{" "}
                <a className="underline" href="mailto:info@milkomi.example">
                  info@milkomi.example
                </a>
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Telegram"
                className="rounded-full border border-foreground/20 px-3 py-2 text-sm hover:bg-surface"
              >
                Telegram
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-foreground/20 px-3 py-2 text-sm hover:bg-surface"
              >
                Instagram
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-foreground/20 px-3 py-2 text-sm hover:bg-surface"
              >
                Facebook
              </a>
              <a
                href="#"
                aria-label="X"
                className="rounded-full border border-foreground/20 px-3 py-2 text-sm hover:bg-surface"
              >
                X
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold">{t("quickLinks")}</p>
            <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
              {navLinks.map((link) => {
                const href = `/${locale}${link.path === "/" ? "" : link.path}`;
                return (
                  <Link
                    key={link.path}
                    href={href}
                    className="text-foreground/80 hover:text-foreground underline-offset-4 hover:underline"
                  >
                    {link.path === "/"
                      ? "Home"
                      : link.path
                          .split("/")
                          .filter(Boolean)
                          .join(" ")
                          .replace(/-/g, " ")}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="text-sm font-semibold">Map</p>
            <div className="mt-4 h-52 overflow-hidden rounded-2xl border border-foreground/10">
              <iframe
                title="Milkomi location map"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=8.9806,38.7578&z=14&output=embed"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-foreground/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground/70">
            © {year} Milkomi Hotel. {t("copyright")}
          </p>
          <p className="text-xs text-foreground/60">{t("websiteBy")}</p>
        </div>
      </div>
    </footer>
  );
}

