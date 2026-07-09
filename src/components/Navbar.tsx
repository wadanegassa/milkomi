"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {useMemo, useState, useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Menu, X, Phone, Sun, Moon} from "lucide-react";
import {useTheme} from "next-themes";

import {navLinks} from "@/lib/nav";

const NAVBAR_HEIGHT_CLASS = "h-20";

function getPathWithoutLocale(pathname: string) {
  return pathname;
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentPath = useMemo(() => getPathWithoutLocale(pathname), [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2">
        <div className={`${NAVBAR_HEIGHT_CLASS} flex items-center justify-between`}>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-background/70 px-3 py-2 backdrop-blur"
            aria-label="Home"
          >
            <div className="relative h-9 w-9 rounded-full overflow-hidden bg-surface border border-foreground/10">
              <Image
                src="/assets/images/logo/logo-light.svg"
                alt=""
                fill
                priority
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-semibold tracking-[0.24em] uppercase">
                Mersimoy
              </p>
              <p className="text-xs text-foreground/70">Int. Hotel</p>
            </div>
          </Link>

          <nav className="hidden md:flex flex-1 items-center justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-background/60 px-2 py-1 backdrop-blur">
              {navLinks.map((link) => {
                const isActive =
                  currentPath === link.path ||
                  (link.path !== "/" && currentPath.startsWith(link.path));

                const href = link.path === "/" ? "/" : link.path;

                return (
                  <Link
                    key={link.path}
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "px-3 py-2 rounded-full text-xs font-medium tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
                      isActive
                        ? "bg-accent text-accent-foreground shadow-sm"
                        : "text-foreground/85 hover:bg-surface hover:text-foreground",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full border border-white/15 bg-background/70 p-2 text-foreground/80 hover:bg-surface focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}

            <a
              href="tel:+25157661234"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/70 px-4 py-2 text-xs font-semibold text-accent-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/90">
                <Phone className="h-3.5 w-3.5" />
              </span>
              <span>Call to book</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-full border border-white/15 bg-background/75 p-2 text-foreground/90 hover:bg-surface focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-black/60"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-background/95 backdrop-blur px-4 py-5 border-l border-white/10"
              initial={{x: "100%"}}
              animate={{x: 0}}
              exit={{x: "100%"}}
              transition={{type: "tween", duration: 0.25}}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.24em] uppercase text-foreground/80">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-foreground/90 hover:bg-surface focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive =
                    currentPath === link.path ||
                    (link.path !== "/" && currentPath.startsWith(link.path));

                  const href = link.path === "/" ? "/" : link.path;

                  return (
                    <Link
                      key={link.path}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={[
                        "px-3 py-3 rounded-xl text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
                        isActive
                          ? "bg-accent text-accent-foreground shadow-sm"
                          : "text-foreground/90 hover:bg-surface",
                      ].join(" ")}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {mounted && (
                    <button
                      type="button"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="rounded-full border border-white/15 bg-background/70 p-2 text-foreground/80 hover:bg-surface transition-colors"
                      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    >
                      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                  )}
                </div>
                <a
                  href="tel:+25157661234"
                  className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground shadow-sm"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
