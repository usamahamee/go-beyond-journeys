import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import slideFlight from "@/assets/hero-flight.jpg";
import slideBeach from "@/assets/slide-beach.jpg";
import slideDubai from "@/assets/slide-dubai.jpg";
import slideParis from "@/assets/slide-paris.jpg";
import slideUmrah from "@/assets/hero-umrah.jpg";

type Slide = {
  image: string;
  alt: string;
  kicker: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaTo: string;
};

const slides: Slide[] = [
  {
    image: slideFlight,
    alt: "Airplane wing flying above sunset clouds",
    kicker: "Welcome to Guzel Travels",
    title: "Restart Your Traveling\nWith Confidence",
    subtitle: "Cheap domestic & international flights, booked in minutes.",
    ctaLabel: "Book a Flight",
    ctaTo: "/flight-booking",
  },
  {
    image: slideUmrah,
    alt: "Pilgrims around the Kaaba at golden hour",
    kicker: "Spiritual Journeys",
    title: "Umrah Packages\nFrom Pakistan",
    subtitle: "Visa, hotels, transport & air tickets — all included.",
    ctaLabel: "Explore Umrah",
    ctaTo: "/umrah-packages",
  },
  {
    image: slideDubai,
    alt: "Dubai skyline at night with Burj Khalifa",
    kicker: "Global Destinations",
    title: "Fly the World\nIn Style",
    subtitle: "Trusted visa consultancy for UK, USA, EU, Australia & beyond.",
    ctaLabel: "Apply for Visa",
    ctaTo: "/visa-consultancy",
  },
  {
    image: slideBeach,
    alt: "Aerial view of turquoise water and overwater bungalows",
    kicker: "Dream Escapes",
    title: "Where Will You\nGo Next?",
    subtitle: "Curated holiday packages, hand-picked by our travel experts.",
    ctaLabel: "Get a Quote",
    ctaTo: "/contact",
  },
  {
    image: slideParis,
    alt: "Eiffel Tower silhouette at sunset over Paris",
    kicker: "Europe & Beyond",
    title: "Iconic Cities,\nUnforgettable Memories",
    subtitle: "Tailor-made itineraries to Paris, London, Istanbul and more.",
    ctaLabel: "Plan My Trip",
    ctaTo: "/contact",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const go = (n: number) => setIndex((n + slides.length) % slides.length);

  return (
    <section className="hero-slider" aria-roledescription="carousel" aria-label="Featured destinations">
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`hero-slide ${i === index ? "is-active" : ""}`}
          aria-hidden={i !== index}
        >
          <img
            src={s.image}
            alt={s.alt}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className="hero-slide__img"
          />
          <div className="hero-slide__overlay" />
          <div className="hero-slide__content">
            <div className="mx-auto max-w-4xl px-6 text-center">
              <p className="tagline text-accent mb-3">{s.kicker}</p>
              <h1 className="hero-title mb-6 whitespace-pre-line">{s.title}</h1>
              <p className="font-subhead text-xl md:text-2xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
                {s.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to={s.ctaTo} className="btn btn--accent">
                  {s.ctaLabel} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="btn btn--outline border-white/40 text-white hover:bg-white hover:text-primary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="hero-slider__nav hero-slider__nav--prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="hero-slider__nav hero-slider__nav--next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="hero-slider__dots" role="tablist" aria-label="Choose slide">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`hero-slider__dot ${i === index ? "is-active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
