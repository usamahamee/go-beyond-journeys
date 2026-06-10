import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, Bus, Hotel, BadgeCheck, Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/umrah-packages")({
  head: () => ({
    meta: [
      { title: "Umrah Packages from Pakistan — Visa, Hotels & Transport | Guzel Travels" },
      { name: "description", content: "Customized Umrah packages from Pakistan with fastest visa processing, comfortable hotels in Makkah & Madinah, and VIP transport." },
      { property: "og:title", content: "Umrah Packages | Guzel Travels" },
      { property: "og:description", content: "Spiritual Umrah journeys with visa, transport, hotel and air ticket included." },
      { property: "og:url", content: "/umrah-packages" },
      { name: "twitter:title", content: "Umrah Packages | Guzel Travels" },
      { name: "twitter:description", content: "Spiritual Umrah journeys with visa, transport, hotel and air ticket included." },
    ],
    links: [
      { rel: "canonical", href: "/umrah-packages" },
    ],
  }),
  component: UmrahPage,
});

const highlights = [
  "Fastest Umrah visa processing",
  "Greater services at the lowest cost",
  "Comfortable hotels in Economy & 5-Star",
  "Best customer support during your journey",
  "Most of all — no false commitments",
];

const includes = [
  { icon: BadgeCheck, t: "Umrah Visa", d: "Umrah visa processing with travel insurance included." },
  { icon: Bus, t: "Transport", d: "Transfers between Madinah, Makkah & Jeddah on VIP luxury buses." },
  { icon: Hotel, t: "Accommodation", d: "Hotel accommodation in Makkah and Madinah, close to the Haramain." },
  { icon: Plane, t: "Air Ticket", d: "Round-trip air ticket with leading airlines, included." },
];

function UmrahPage() {
  return (
    <>
      <section className="hero">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
          <p className="tagline text-accent mb-3">Pilgrimage</p>
          <h1 className="hero-title mb-5">Umrah Packages</h1>
          <p className="font-subhead text-xl text-white/85 max-w-2xl mx-auto">
            A transformative spiritual journey from Pakistan to the blessed cities of Makkah and Madinah.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="tagline mb-2">Welcome</p>
            <h2 className="section-title mb-6">Umrah Package</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Welcome to our exclusive Umrah package from Pakistan — a deeply spiritual pilgrimage experience to the blessed cities of Makkah and Madinah. Embark on a journey of a lifetime as you fulfill your spiritual obligations.
            </p>
            <ul className="space-y-3 mb-6">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 font-body text-foreground">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" /> {h}
                </li>
              ))}
            </ul>
            <p className="font-subhead text-lg text-muted-foreground leading-relaxed">
              Get a customized Umrah package in Economy or Star category. Tell us your dates, duration and choice of stay — we'll give you the best price.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="card p-8 md:p-10 bg-primary text-white">
              <h3 className="font-heading text-3xl font-bold mb-8 text-white">Package Includes</h3>
              <div className="space-y-6">
                {includes.map((i) => (
                  <div key={i.t} className="flex gap-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                      <i.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl font-bold text-accent mb-1">{i.t}</h4>
                      <p className="font-subhead text-white/80 leading-relaxed">{i.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn--accent mt-8 w-full">Book Now <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
