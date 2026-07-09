import Image from "next/image";
import Link from "next/link";

import {navLinks} from "@/lib/nav";

export default function Footer() {
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
                  alt=""
                  fill
                />
              </div>
              <div>
                <p className="text-sm font-semibold">Senaf</p>
                <p className="text-xs text-foreground/70">Int. Hotel</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground/80">
              Gidaa Kormaa, Nekemte, East Welega, Oromia, Ethiopia
            </p>
            <div className="mt-4 text-sm text-foreground/80 space-y-2">
              <p>
                <span className="text-foreground/60">Phone:</span>{" "}
                <a className="underline" href="tel:+25157661234">
                  +251 57 661 1234
                </a>
              </p>
              <p>
                <span className="text-foreground/60">Email:</span>{" "}
                <a className="underline" href="mailto:info@senafhotel.com">
                  info@senafhotel.com
                </a>
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Telegram" className="rounded-full border border-foreground/20 px-3 py-2 text-sm hover:bg-surface">
                Telegram
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full border border-foreground/20 px-3 py-2 text-sm hover:bg-surface">
                Instagram
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-foreground/20 px-3 py-2 text-sm hover:bg-surface">
                Facebook
              </a>
              <a href="#" aria-label="X" className="rounded-full border border-foreground/20 px-3 py-2 text-sm hover:bg-surface">
                X
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold">Quick Links</p>
            <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
              {navLinks.map((link) => {
                const href = link.path === "/" ? "/" : link.path;
                return (
                  <Link
                    key={link.path}
                    href={href}
                    className="text-foreground/80 hover:text-foreground underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="text-sm font-semibold">Map</p>
            <div className="mt-4 h-52 overflow-hidden rounded-2xl border border-foreground/10">
              <iframe
                title=""
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=9.0905,36.5482&z=15&output=embed"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-foreground/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground/70">
            &copy; {year} Senaf Int. Hotel. All rights reserved.
          </p>
          <p className="text-xs text-foreground/60">Website by Pro</p>
        </div>
      </div>
    </footer>
  );
}
