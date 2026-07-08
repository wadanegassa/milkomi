import {getTranslations} from "next-intl/server";
import Hero from "@/components/Hero";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: {locale: string};
  searchParams?: {room?: string};
}) {
  const tContact = await getTranslations("pages.contact");
  const defaultRoom = searchParams?.room ?? "";

  return (
    <PageLayout locale={params.locale}>
      <Hero title={tContact("hero.title")} tagline={tContact("hero.tagline")} imageSrc="/assets/images/hero/home-hero.jpg" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-heading text-3xl">{tContact("formTitle")}</h2>
              <div className="mt-6">
                <BookingForm defaultRoom={defaultRoom} />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-heading text-3xl">{tContact("contactTitle")}</h2>
              <div className="mt-5 space-y-3 text-sm text-foreground/80">
                <p>Phone: <a href="tel:+251900000000" className="underline">+251 900 000 000</a></p>
                <p>Email: <a href="mailto:info@milkomi.example" className="underline">info@milkomi.example</a></p>
                <p>Address: Placeholder address, City Center, Ethiopia</p>
              </div>
              <div className="mt-6 h-64 overflow-hidden rounded-2xl border border-foreground/10">
                <iframe title="Milkomi map placeholder" className="h-full w-full" loading="lazy" src="https://www.google.com/maps?q=8.9806,38.7578&z=14&output=embed" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

