import {getTranslations} from "next-intl/server";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

export default async function AboutPage({params}: {params: {locale: string}}) {
  const tAbout = await getTranslations("pages.about");

  return (
    <PageLayout locale={params.locale}>
      <Hero title={tAbout("hero.title")} tagline={tAbout("hero.tagline")} imageSrc="/assets/images/about/about-main.jpg" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <Reveal><h2 className="font-heading text-3xl">{tAbout("storyTitle")}</h2><p className="mt-4 text-foreground/90 max-w-3xl">Placeholder copy: Milkomi was designed to blend warm Ethiopian hospitality with modern comfort, delivering dependable service for business and leisure guests.</p></Reveal>
        <Reveal><h2 className="font-heading text-3xl">{tAbout("locationTitle")}</h2><p className="mt-4 text-foreground/90 max-w-3xl">Placeholder copy: Located close to key city districts, shopping hubs, embassies, and transport routes for convenient movement throughout your stay.</p></Reveal>
        <Reveal><h2 className="font-heading text-3xl">{tAbout("credentialsTitle")}</h2><p className="mt-4 text-foreground/90 max-w-3xl">Placeholder copy: 4-star service benchmark, trusted by local and international travelers, with continuously improving guest satisfaction scores.</p></Reveal>
        <Reveal><div className="relative aspect-[16/6] rounded-3xl overflow-hidden border border-foreground/10"><Image src="/assets/images/about/about-main.jpg" alt="Milkomi about section image" fill sizes="100vw" className="object-cover" /></div></Reveal>
      </section>
    </PageLayout>
  );
}

