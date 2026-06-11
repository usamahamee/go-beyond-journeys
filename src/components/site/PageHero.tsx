import type { ReactNode } from "react";

type Props = {
  image: string;
  alt: string;
  kicker: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
};

export function PageHero({ image, alt, kicker, title, subtitle, children }: Props) {
  return (
    <section className="page-hero">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        fetchPriority="high"
        className="page-hero__img"
      />
      <div className="page-hero__overlay" />
      <div className="page-hero__content mx-auto max-w-5xl px-6 text-center">
        <p className="tagline text-accent mb-3">{kicker}</p>
        <h1 className="hero-title mb-5">{title}</h1>
        <p className="font-subhead text-xl text-white/85 max-w-2xl mx-auto">{subtitle}</p>
        {children ? <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div> : null}
      </div>
    </section>
  );
}
