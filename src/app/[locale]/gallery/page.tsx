import {getTranslations} from "next-intl/server";
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import GalleryLightbox from "@/components/GalleryLightbox";
import {galleryItems} from "@/data/gallery";

export default async function GalleryPage({params}: {params: {locale: string}}) {
  const locale = params.locale as "en" | "am" | "om";
  const tGallery = await getTranslations("pages.gallery");

  return (
    <PageLayout locale={params.locale}>
      <Hero
        title={tGallery("hero.title")}
        tagline={tGallery("hero.tagline")}
        imageSrc="/assets/images/hero/secondary-hero.jpg"
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <GalleryLightbox
            items={galleryItems}
            locale={locale}
            labels={{
              exterior: tGallery("tabs.exterior"),
              rooms: tGallery("tabs.rooms"),
              restaurant: tGallery("tabs.restaurant"),
              events: tGallery("tabs.events"),
              amenities: tGallery("tabs.amenities"),
            }}
          />
        </Reveal>
      </section>
    </PageLayout>
  );
}

