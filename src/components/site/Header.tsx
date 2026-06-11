import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const services = [
  { to: "/flight-booking", label: "Flight Booking" },
  { to: "/visa-consultancy", label: "Visa Consultancy" },
  { to: "/umrah-packages", label: "Umrah Packages" },
  { to: "/rent-a-car", label: "Rent A Car" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled ? "bg-primary/95 backdrop-blur shadow-lg" : "bg-primary"
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-2 text-center">
          <a
            href="tel:+923021400045"
            className="nav-link inline-flex items-center gap-2 text-accent hover:text-white transition"
          >
            <Phone className="h-3.5 w-3.5" />
            Make a call: +92 302 1400045
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src="/gts-logo.svg" alt="Guzel Travels" className="h-12 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="font-hero font-bold text-white text-lg tracking-[0.15em]">
                GUZEL
              </span>
              <span className="font-subhead text-accent text-xs tracking-[0.2em] uppercase">
                Travels
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              activeProps={{ className: "nav-link text-accent" }}
              inactiveProps={{ className: "nav-link text-white/85 hover:text-accent" }}
              activeOptions={{ exact: true }}
              className="transition"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-link inline-flex items-center gap-1 text-white/85 hover:text-accent transition">
                Services <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                  <div className="min-w-56 rounded-lg bg-white shadow-xl py-2">
                    {services.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="block px-5 py-2.5 text-sm font-body text-foreground hover:bg-surface hover:text-accent transition"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              activeProps={{ className: "nav-link text-accent" }}
              inactiveProps={{ className: "nav-link text-white/85 hover:text-accent" }}
              className="transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden pb-6 space-y-1 border-t border-white/10 pt-4">
            <Link to="/" onClick={() => setOpen(false)} className="block py-2.5 nav-link text-white/85 hover:text-accent">
              Home
            </Link>
            <div className="py-2">
              <p className="nav-link text-accent mb-1">Services</p>
              {services.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 pl-4 font-body text-sm text-white/80 hover:text-accent"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Link to="/contact" onClick={() => setOpen(false)} className="block py-2.5 nav-link text-white/85 hover:text-accent">
              Contact Us
            </Link>
            <a href="tel:+923021400045" className="block py-2.5 nav-link text-accent">
              <Phone className="inline h-3.5 w-3.5 mr-1" /> +92 302 1400045
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
