import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

export default async function AboutPage() {
  return (
    <PageLayout>
        <Hero title="About Mersimoy International Hotel" tagline="Founded on a passion for hospitality, Mersimoy International Hotel serves Nekemte with warmth, reliability, and pride." imageSrc="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1920&q=85" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <Reveal><h2 className="font-heading text-3xl">Our story & mission</h2><p className="mt-4 text-foreground/90 max-w-3xl">Mersimoy International Hotel was founded with a single mission: to bring world-class hospitality to Nekemte, East Welega. Our hotel blends the warmth of Oromo tradition with the standards of modern international travel. Every member of our team is committed to ensuring your stay is comfortable, memorable, and effortlessly enjoyable.</p></Reveal>
        <Reveal><h2 className="font-heading text-3xl">Location matters</h2><p className="mt-4 text-foreground/90 max-w-3xl">We are located in the Gidaa Kormaa area of Nekemte — the capital of East Welega Zone in Oromia, Ethiopia. Our central location puts you within easy reach of local markets, government offices, transport hubs, and the vibrant culture of western Ethiopia. Whether you are in town for business or exploration, Mersimoy International Hotel is your ideal home base.</p></Reveal>
        <Reveal><h2 className="font-heading text-3xl">Our Commitment</h2><p className="mt-4 text-foreground/90 max-w-3xl">We are proud to serve both local and international guests with a commitment to quality, cleanliness, and genuine hospitality. Our team continuously trains to meet the evolving needs of modern travelers. From reliable power backup to 24/7 front desk service, we ensure every aspect of your stay meets the highest standards.</p></Reveal>
        <Reveal><div className="relative aspect-[16/6] rounded-3xl overflow-hidden border border-foreground/10"><Image src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1920&q=85" alt="" fill sizes="100vw" className="object-cover" loading="lazy" quality={85} /></div></Reveal>
      </section>
    </PageLayout>
  );
}
