import { useState, type FormEvent } from "react";

const WEB3FORMS_ACCESS_KEY = "faca17cf-949a-49fc-a9d9-f47bed6f957c";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export function QuoteForm({ title = "Request a Quote", subject = "New Inquiry - Guzel Travels" }: { title?: string; subject?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: subject,
      from_name: "Guzel Travels Website",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service") || "General Inquiry",
      message: formData.get("message"),
      autoresponse: `Thank you for contacting Guzel Travels! We have received your inquiry and our team will contact you shortly. For urgent queries, call us at +92 302 1400045 or message us on WhatsApp.`,
      botcheck: false,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (response.ok) {
        setResult({
          type: "success",
          message: "✅ Thank you! Your message has been sent. We will contact you shortly.",
        });
        form.reset();
      } else {
        setResult({
          type: "error",
          message: "❌ Something went wrong. Please try again or call us directly.",
        });
      }
    } catch (error) {
      setResult({
        type: "error",
        message: "❌ Network error. Please try again or call/WhatsApp us.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-accent rounded-2xl p-8 md:p-10 shadow-xl">
      <p className="tagline mb-2">Get in touch</p>
      <h3 className="section-title mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="field-label" htmlFor="name">Full Name *</label>
            <input 
              id="name" 
              name="name" 
              required 
              className="field" 
              placeholder="John Doe" 
            />
          </div>
          <div>
            <label className="field-label" htmlFor="email">Email *</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="field" 
              placeholder="you@example.com" 
            />
          </div>
        </div>
        <div>
          <label className="field-label" htmlFor="phone">Phone Number *</label>
          <input 
            id="phone" 
            name="phone" 
            type="tel" 
            required 
            className="field" 
            placeholder="+92 300 0000000" 
          />
        </div>
        <div>
          <label className="field-label" htmlFor="service">Service Interested In</label>
          <select id="service" name="service" className="field">
            <option value="Flight Booking">Flight Booking</option>
            <option value="Visa Processing">Visa Processing</option>
            <option value="Umrah Package">Umrah Package</option>
            <option value="Rent a Car">Rent a Car</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="message">Message *</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4} 
            className="field resize-none" 
            placeholder="Tell us about your trip..." 
            required
          />
        </div>
        <button type="submit" disabled={submitting} className="btn btn--primary w-full">
          {submitting ? "Sending..." : "Send Request"}
        </button>
        
        {result && (
          <div
            className={`p-4 rounded-lg text-center font-body text-sm ${
              result.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {result.message}
          </div>
        )}
      </form>
    </div>
  );
}
