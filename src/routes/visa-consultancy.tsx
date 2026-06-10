import { createFileRoute, Link } from "@tanstack/react-router";
import { FileCheck2, Globe, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/visa-consultancy")({
  head: () => ({
    meta: [
      { title: "Visa Consultancy & Immigration | Guzel Travels Lahore" },
      { name: "description", content: "Trusted visa consultants in Lahore for visit visas, study, employment and skilled immigration to UK, EU, USA, Canada, Australia, New Zealand and Turkey." },
      { property: "og:title", content: "Visa Consultancy | Guzel Travels" },
      { property: "og:description", content: "Visit visas and skilled immigration assistance for Pakistanis." },
      { property: "og:url", content: "/visa-consultancy" },
      { name: "twitter:title", content: "Visa Consultancy | Guzel Travels" },
      { name: "twitter:description", content: "Visit visas and skilled immigration assistance for Pakistanis." },
    ],
    links: [
      { rel: "canonical", href: "/visa-consultancy" },
    ],
  }),
  component: VisaPage,
});

const countries = ["UK", "European Union", "Australia", "New Zealand", "Canada", "USA", "Europe", "Turkey"];

function VisaPage() {
  return (
    <>
      <section className="hero">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
          <p className="tagline text-accent mb-3">Visa Services</p>
          <h1 className="hero-title mb-5">Visa Consultancy</h1>
          <p className="font-subhead text-xl text-white/85 max-w-2xl mx-auto">
            Your trusted immigration consultants in Lahore for visit visas, study, employment & skilled migration.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="tagline mb-2">What We Offer</p>
            <h2 className="section-title mb-6">Visit Visa & Immigration Experts</h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>Guzel Travels, your trusted immigration consultants in Lahore, Pakistan, extend professional guidance to individuals, students and families. Our services cover visas for tourism, study and employment.</p>
              <p>With headquarters in Lahore, we maintain strong connections in the UK and EU. Our proficient consultant team helps you compile the necessary documents and facilitates a seamless, swift visa application process — resulting in speedy approvals.</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              <div className="card p-7 flex gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent text-primary"><FileCheck2 className="h-7 w-7" /></div>
                <div>
                  <h3 className="card-title mb-2">Visit Visa Services</h3>
                  <p className="font-subhead text-lg text-muted-foreground leading-relaxed">Professional visit visa services — assessment, paperwork, interview preparation, documentation drafting and more.</p>
                </div>
              </div>
              <div className="card p-7 flex gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent text-primary"><Globe className="h-7 w-7" /></div>
                <div>
                  <h3 className="card-title mb-2">Immigration</h3>
                  <p className="font-subhead text-lg text-muted-foreground leading-relaxed">One of the most reliable immigration firms in Pakistan with experts for Australian, New Zealand, Canadian, USA, European and Turkish immigration.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="tagline text-center mb-2">Destinations</p>
            <h2 className="section-title text-center mb-12">Countries We Assist With</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {countries.map((c, i) => (
              <Reveal key={c} delay={i * 60}>
                <div className="card p-6 text-center">
                  <Globe className="h-7 w-7 text-accent mx-auto mb-3" />
                  <p className="font-heading font-bold text-primary">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn btn--accent">Book An Appointment <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
