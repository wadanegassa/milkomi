import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import GalleryLightbox from "@/components/GalleryLightbox";
import {galleryItems} from "@/data/gallery";

export default async function GalleryPage() {
  return (
    <PageLayout>
      <Hero
        title="Gallery"
        tagline="Take a visual tour through Mersimoy International Hotel — our rooms, restaurant, event spaces, and ambiance."
        imageSrc="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=85"
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <GalleryLightbox
            items={galleryItems}
            labels={{
              exterior: "Exterior",
              rooms: "Rooms",
              restaurant: "Restaurant",
              events: "Events",
              amenities: "Amenities",
            }}
          />
        </Reveal>
      </section>
    </PageLayout>
  );
}
