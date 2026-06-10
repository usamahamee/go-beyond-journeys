import { MessageCircle, Phone } from "lucide-react";

export function FloatingButtons() {
  return (
    <>
      <a
        href="tel:+923021400045"
        className="fab fab--call link--phone"
        aria-label="Call Us"
      >
        <Phone className="h-5 w-5" />
        <span className="fab__tooltip">Call Us</span>
      </a>
      <a
        href="https://wa.me/923021400045"
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab--whatsapp link--whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="fab__tooltip">Chat on WhatsApp</span>
      </a>
    </>
  );
}
