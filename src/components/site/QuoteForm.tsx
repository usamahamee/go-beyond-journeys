import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function QuoteForm({ title = "Request a Quote" }: { title?: string }) {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      toast.success("Thank you! We'll be in touch within 24 hours.");
      form.reset();
      setSubmitting(false);
    }, 600);
  }

  return (
    <div className="bg-accent rounded-2xl p-8 md:p-10 shadow-xl">
      <p className="tagline mb-2">Get in touch</p>
      <h3 className="section-title mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="field-label" htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" required className="field" placeholder="John" />
          </div>
          <div>
            <label className="field-label" htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" required className="field" placeholder="Doe" />
          </div>
        </div>
        <div>
          <label className="field-label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="field" placeholder="you@example.com" />
        </div>
        <div>
          <label className="field-label" htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" required className="field" placeholder="+92 300 0000000" />
        </div>
        <div>
          <label className="field-label" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} className="field resize-none" placeholder="Tell us about your trip..." />
        </div>
        <button type="submit" disabled={submitting} className="btn btn--primary w-full">
          {submitting ? "Sending..." : "Send Request"}
        </button>
      </form>
    </div>
  );
}
