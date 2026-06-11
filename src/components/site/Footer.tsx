import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white/85">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Need Help */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white mb-5">Need Help</h3>
          <div className="space-y-3 text-sm font-body">
            <div>
              <p className="text-accent font-medium mb-1 uppercase tracking-wider text-xs">Call Us</p>
              <a href="tel:+923021400045" className="hover:text-accent transition inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /><span>+92 302 1400045</span>
              </a>
            </div>
            <div>
              <p className="text-accent font-medium mb-1 uppercase tracking-wider text-xs">Email Us</p>
              <a href="mailto:info@guzeltravels.com" className="hover:text-accent transition inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /><span>info@guzeltravels.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white mb-5">Our Services</h3>
          <ul className="space-y-2 text-sm font-body">
            <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
            <li><Link to="/flight-booking" className="hover:text-accent transition">Flight Booking</Link></li>
            <li><Link to="/visa-consultancy" className="hover:text-accent transition">Visa Consultancy</Link></li>
            <li><Link to="/umrah-packages" className="hover:text-accent transition">Umrah Packages</Link></li>
            <li><Link to="/rent-a-car" className="hover:text-accent transition">Rent A Car</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Office */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white mb-5">Office Address</h3>
          <div className="space-y-4 text-sm font-body">
            <div>
              <p className="text-accent font-semibold mb-1 inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Branch Office
              </p>
              <p>CCA 08, DD Block DHA Phase 04, Lahore</p>
            </div>
            <div>
              <p className="text-accent font-semibold mb-1 inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Head Office
              </p>
              <p>Plot No 66, Usman Block, Near LMDC, Canal Bank Lahore</p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white mb-5">Follow Us On</h3>
          <div className="flex gap-3">
            <a
              href="https://web.facebook.com/Guzeltravels"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-primary transition"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/guzeltravels/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-primary transition"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-6 font-subhead text-white/70 leading-relaxed">
            Crafting unforgettable journeys with care, comfort, and trust since day one.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs font-body text-white/60 tracking-wider">
          Copyright © 2026 Guzel Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
