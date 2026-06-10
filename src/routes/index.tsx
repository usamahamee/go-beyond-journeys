import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, FileCheck2, Compass, Car, ArrowRight, ShieldCheck, Award, Headset } from "lucide-react";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guzel Travels — Restart Your Traveling With Confidence" },
      { name: "description", content: "Lahore-based travel agency offering flight booking, visa consultancy, Umrah packages and car rentals. 500+ projects, 5+ years of trusted service." },
      { property: "og:title", content: "Guzel Travels — Restart Your Traveling With Confidence" },
      { property: "og:description", content: "Flight booking, visa, Umrah packages and car rentals in Lahore." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Plane, title: "Flight Booking", to: "/flight-booking", desc: "Real-time domestic & international flights, complimentary check-in support, best seats — every time." },
  { icon: FileCheck2, title: "Visa Processing", to: "/visa-consultancy", desc: "Exclusive visa services for France, USA, UK, EU and more — by certified consultants." },
  { icon: Compass, title: "Umrah Packages", to: "/umrah-packages", desc: "Tailored Umrah journeys with fastest visa processing, luxury hotels and VIP transport." },
  { icon: Car, title: "Rent A Car", to: "/rent-a-car", desc: "Luxury and economical rentals in Lahore with skilled, route-savvy drivers." },
];

const faq = [
  { q: "How do I travel between Jeddah, Mecca and Madina in your Umrah Package?", a: "We offer customized Umrah packages tailored for pilgrims. Our packages include carefully chosen airline carriers, visa assistance, hotels of all categories with great location (distance from Masjid al-Haram or Kaaba Sharif matters a lot during pilgrimage) and transportation on private buses between Jeddah, Mecca and Madina." },
  { q: "Can I cancel the booking and get a refund if I am unable to travel?", a: "Yes. Refund eligibility depends on the airline and supplier policies. Our team will guide you through cancellation timelines, fees and the fastest refund route possible — including unforeseen circumstances such as health or visa issues." },
  { q: "How do I know my booking is confirmed?", a: "Once payment is processed, you'll receive an official confirmation email and PDF ticket/voucher with your booking reference within minutes. Our team is also available via call or WhatsApp 24/7 to reconfirm." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36 text-center relative">
          <Reveal>
            <p className="tagline text-accent mb-4">Welcome to Guzel Travels</p>
            <h1 className="hero-title mb-6">
              Restart Your Traveling<br />With Confidence
            </h1>
            <p className="font-subhead text-xl md:text-2xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
              From cheap flights to spiritual Umrah journeys, luxury rentals to global visas — your trusted Lahore-based travel partner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/flight-booking" className="btn btn--accent">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn btn--outline border-white/40 text-white hover:bg-white hover:text-primary">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
          <Reveal>
            <div className="bg-accent text-primary rounded-2xl p-8 shadow-xl h-full">
              <p className="tagline text-primary/80 mb-2">Build Your Dream</p>
              <h2 className="font-heading font-bold text-3xl leading-tight">5 Years of Undefeated Success</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card p-8 h-full flex flex-col justify-center">
              <p className="font-hero font-bold text-5xl text-primary">500+</p>
              <p className="font-subhead text-lg text-muted-foreground mt-2">Successful projects finished</p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="card p-8 h-full flex flex-col justify-center">
              <p className="font-hero font-bold text-5xl text-primary">5+</p>
              <p className="font-subhead text-lg text-muted-foreground mt-2">Years of experience, with pride</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <Reveal>
              <p className="tagline mb-2">What we do</p>
              <h2 className="section-title">Our Services</h2>
            </Reveal>
            <Link to="/flight-booking" className="nav-link text-accent inline-flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <Link to={s.to} className="card block p-8 group h-full">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-accent/15 text-accent mb-5 group-hover:bg-accent group-hover:text-primary transition">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="card-title mb-3">{s.title}</h3>
                  <p className="font-subhead text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                  <p className="mt-5 nav-link text-accent inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
          {[
            { icon: ShieldCheck, t: "Trusted Service", d: "Five years of pilgrim-first, traveler-first care." },
            { icon: Award, t: "Best Prices", d: "Direct deals with airlines, hotels and rental fleets." },
            { icon: Headset, t: "24/7 Support", d: "Call or WhatsApp our team any time, any timezone." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 100}>
              <div className="flex gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                  <f.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">{f.t}</h3>
                  <p className="font-subhead text-lg text-white/75 leading-relaxed">{f.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUOTE + FAQ */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <QuoteForm />
          </Reveal>
          <Reveal delay={120}>
            <p className="tagline mb-2">Learn More From</p>
            <h2 className="section-title mb-8">Frequently Asked Questions</h2>
            <FAQ items={faq} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
