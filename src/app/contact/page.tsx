import Hero from "@/components/Hero";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: {room?: string};
}) {
  const defaultRoom = searchParams?.room ?? "";

  return (
    <PageLayout>
      <Hero title="Contact & Booking" tagline="Reach out to us directly — we are here to help you plan the perfect stay or event in Nekemte." imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-heading text-3xl">Booking request</h2>
              <div className="mt-6">
                <BookingForm defaultRoom={defaultRoom} />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-heading text-3xl">Contact details</h2>
              <div className="mt-5 space-y-3 text-sm text-foreground/80">
                <p>Phone: <a href="tel:+25157661234" className="underline">+251 57 661 1234</a></p>
                <p>Email: <a href="mailto:info@senafhotel.com" className="underline">info@senafhotel.com</a></p>
                <p>Address: Gidaa Kormaa, Nekemte, East Welega, Oromia, Ethiopia</p>
              </div>
              <div className="mt-6 h-64 overflow-hidden rounded-2xl border border-foreground/10">
                <iframe title="" className="h-full w-full" loading="lazy" src="https://www.google.com/maps?q=9.0905,36.5482&z=15&output=embed" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
