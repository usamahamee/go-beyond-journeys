import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Guzel Travels — Lahore Travel Agency" },
      { name: "description", content: "Get in touch with Guzel Travels in Lahore for flight bookings, visa, Umrah and car rental. Call +92 302 1400045 or email info@guzeltravels.com." },
      { property: "og:title", content: "Contact Guzel Travels" },
      { property: "og:description", content: "Lahore-based travel agency. Call, email or WhatsApp us — we reply within 24 hours." },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: "Contact Guzel Travels" },
      { name: "twitter:description", content: "Lahore-based travel agency. Call, email or WhatsApp us — we reply within 24 hours." },
    ],
    links: [
      { rel: "canonical", href: "/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="hero">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
          <p className="tagline text-accent mb-3">Get In Touch</p>
          <h1 className="hero-title mb-5">Contact Us</h1>
          <p className="font-subhead text-xl text-white/85 max-w-2xl mx-auto">
            We're here every step of the journey. Reach us by call, WhatsApp, email — or drop into our Lahore offices.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="tagline text-center mb-2">Our Branches</p>
            <h2 className="section-title text-center mb-12">Contact Details</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { title: "Branch Office", addr: "CCA 08, DD Block, DHA Phase 04, Lahore" },
              { title: "Head Office", addr: "Plot No 66, Usman Block, Near LMDC, Canal Bank Lahore" },
            ].map((o, i) => (
              <Reveal key={o.title} delay={i * 100}>
                <div className="card p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-accent text-primary mb-5">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <h3 className="card-title mb-3">{o.title}</h3>
                  <p className="font-subhead text-lg text-muted-foreground mb-5">{o.addr}</p>
                  <div className="space-y-2 font-body text-sm">
                    <a href="tel:+923021400045" className="flex items-center gap-3 text-primary hover:text-accent transition link--phone">
                      <Phone className="h-4 w-4" /> +92 302 1400045
                    </a>
                    <a href="mailto:info@guzeltravels.com" className="flex items-center gap-3 text-primary hover:text-accent transition">
                      <Mail className="h-4 w-4" /> info@guzeltravels.com
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <QuoteForm title="Send Us a Message" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
