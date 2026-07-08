import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import ScrollProgress from "@/components/ScrollProgress";

export default function PageLayout({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(176,141,87,0.14),transparent_32%),radial-gradient(circle_at_90%_35%,rgba(176,141,87,0.08),transparent_28%)]">
        {children}
      </main>
      <Footer locale={locale} />
      <FloatingChat />
    </>
  );
}

