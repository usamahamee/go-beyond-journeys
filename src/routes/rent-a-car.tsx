import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Sparkles, Wallet, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import heroCar from "@/assets/hero-car.jpg";


export const Route = createFileRoute("/rent-a-car")({
  head: () => ({
    meta: [
      { title: "Rent a Car in Lahore — Luxury & Economical | Guzel Travels" },
      { name: "description", content: "Affordable & luxury car rentals in Lahore with experienced drivers. Honda Civic, Toyota Prado, Land Cruiser, Audi A6, Corolla Altis and more." },
      { property: "og:title", content: "Rent A Car in Lahore | Guzel Travels" },
      { property: "og:description", content: "Luxury & economical car rentals in Lahore with skilled drivers." },
      { property: "og:url", content: "/rent-a-car" },
      { name: "twitter:title", content: "Rent A Car in Lahore | Guzel Travels" },
      { name: "twitter:description", content: "Luxury & economical car rentals in Lahore with skilled drivers." },
    ],
    links: [
      { rel: "canonical", href: "/rent-a-car" },
    ],
  }),
  component: RentPage,
});

const cars = [
  { name: "Honda Civic", type: "Sedan" },
  { name: "Toyota Prado", type: "SUV" },
  { name: "Land Cruiser", type: "Luxury SUV" },
  { name: "Audi A6", type: "Executive" },
  { name: "Corolla Altis", type: "Sedan" },
  { name: "Toyota Yaris", type: "Compact" },
];

function RentPage() {
  return (
    <>
      <PageHero
        image={heroCar}
        alt="Luxury black SUV on a scenic road at sunset"
        kicker="Car Rental"
        title={<>Rent a Car in Lahore<br />With Guzel Travels</>}
        subtitle="Top-notch car rental services with skilled drivers, well-versed in Lahore's routes — smooth journeys, guaranteed."
      >
        <Link to="/contact" className="btn btn--accent">Reserve Your Car <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>


      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="tagline mb-2">Best in Lahore</p>
            <h2 className="section-title mb-6">Rent a Car in Lahore With Guzel Travels</h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>If you're looking for the best car rental service in Lahore, Pakistan, your search concludes right here. We offer top-notch car rental services accompanied by skilled drivers — well-versed in Lahore's routes for smooth journeys.</p>
              <p>Whether it's a business trip, airport transfer or a special event like a wedding, Guzel Travels ensures the best travel experience. Count on us for competitive rates and high-quality car rental services throughout Pakistan.</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              <div className="card p-7 flex gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent text-primary"><Sparkles className="h-7 w-7" /></div>
                <div>
                  <h3 className="card-title mb-2">Luxury Cars</h3>
                  <p className="font-subhead text-lg text-muted-foreground leading-relaxed">Experience ultimate luxury with prestigious vehicles like Toyota Prado, BMW, Revo, Land Cruiser and Limousine — short or extended durations.</p>
                </div>
              </div>
              <div className="card p-7 flex gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent text-primary"><Wallet className="h-7 w-7" /></div>
                <div>
                  <h3 className="card-title mb-2">Economical Cars</h3>
                  <p className="font-subhead text-lg text-muted-foreground leading-relaxed">Affordable and competitive rates without cutting corners on quality. Lowest prices possible — the same trusted Guzel Travels standard.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="tagline text-center mb-2">Choose Your Ride</p>
            <h2 className="section-title text-center mb-12">Our Cars</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <div className="card p-8 text-center">
                  <div className="grid h-24 place-items-center mb-4 bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl">
                    <Car className="h-12 w-12 text-primary" />
                  </div>
                  <p className="tagline text-xs mb-1">{c.type}</p>
                  <h3 className="card-title mb-4">{c.name}</h3>
                  <Link to="/contact" className="btn btn--accent w-full">Book Now <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
