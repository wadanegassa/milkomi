import type { Metadata } from "next";
import { Noto_Sans_Ethiopic, Noto_Serif_Ethiopic } from "next/font/google";
import "./globals.css";

const bodyFont = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  display: "swap",
  variable: "--font-body",
});

const headingFont = Noto_Serif_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Milkomi Hotel",
  description:
    "Milkomi Hotel — luxury rooms, amenities, dining, events, and packages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
