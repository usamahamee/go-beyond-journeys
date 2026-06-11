import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, Globe2, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import heroFlight from "@/assets/hero-flight.jpg";


export const Route = createFileRoute("/flight-booking")({
  head: () => ({
    meta: [
      { title: "Flight Booking — Cheap Domestic & International Flights | Guzel Travels" },
      { name: "description", content: "Book cheap domestic and international flights from Pakistan with Guzel Travels. Compare airlines, find the best fares and travel with confidence." },
      { property: "og:title", content: "Flight Booking | Guzel Travels" },
      { property: "og:description", content: "Cheap domestic and international flights from Lahore, Karachi and Islamabad." },
      { property: "og:url", content: "/flight-booking" },
      { name: "twitter:title", content: "Flight Booking | Guzel Travels" },
      { name: "twitter:description", content: "Cheap domestic and international flights from Lahore, Karachi and Islamabad." },
    ],
    links: [
      { rel: "canonical", href: "/flight-booking" },
    ],
  }),
  component: FlightPage,
});

const domestic = ["Serene Air", "Air Sial", "PIA", "Air Blue"];
const international = ["Emirates", "Qatar Airways", "Etihad", "Turkish Airlines", "Saudia", "Singapore Airlines"];

function FlightPage() {
  return (
    <>
      <PageHero
        image={heroFlight}
        alt="Airplane flying above golden sunset clouds"
        kicker="Flight Booking"
        title={<>Cheap Flights<br />With Guzeltravels.com</>}
        subtitle="Hassle-free e-ticketing, the best fares, and real-time travel support across Pakistan and the world."
      >
        <Link to="/contact" className="btn btn--accent">Book a Flight <ArrowRight className="h-4 w-4" /></Link>
      </PageHero>


      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="tagline mb-2">Why Guzel Travels</p>
            <h2 className="section-title mb-6">Hassle-Free Flight Booking</h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>Are you tired of waiting in long queues at booking counters to secure your flight tickets? Look no further than Guzeltravels.com. Our online e-ticketing platform is your solution to hassle-free flight bookings, offering cost-effective options for your travels.</p>
              <p>Backed by years in the travel industry, Guzeltravels.com ensures convenience and affordability in one place. With our virtual presence across major Pakistani cities, we stand out among Pakistani e-ticketing platforms by providing budget-friendly flight options.</p>
            </div>
            <Link to="/contact" className="btn btn--accent mt-8">Book Now <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              <div className="card p-7 flex gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent text-primary"><Globe2 className="h-7 w-7" /></div>
                <div>
                  <h3 className="card-title mb-2">International Flights</h3>
                  <p className="font-subhead text-lg text-muted-foreground leading-relaxed">Fly anywhere in style. We search across dozens of airlines and destinations to find the perfect fit for your next adventure.</p>
                </div>
              </div>
              <div className="card p-7 flex gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent text-primary"><MapPin className="h-7 w-7" /></div>
                <div>
                  <h3 className="card-title mb-2">Domestic Flights</h3>
                  <p className="font-subhead text-lg text-muted-foreground leading-relaxed">Find the cheapest domestic flights in Pakistan — one-way or return — across every major city.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="section-title text-center mb-12">Top Domestic Airlines</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {domestic.map((a, i) => (
              <Reveal key={a} delay={i * 80}>
                <div className="card p-8 text-center">
                  <div className="grid place-items-center mb-4">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-primary text-accent">
                      <Plane className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-primary text-lg mb-4">{a}</h3>
                  <Link to="/contact" className="btn btn--accent w-full">Book Now</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="section-title text-center mb-12">Top International Airlines</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {international.map((a, i) => (
              <Reveal key={a} delay={i * 60}>
                <div className="card p-6 text-center">
                  <Plane className="h-7 w-7 text-accent mx-auto mb-3" />
                  <p className="font-heading font-semibold text-primary text-sm">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
