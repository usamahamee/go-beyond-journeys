import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="card border border-border">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
            >
              <span className="font-heading font-semibold text-primary text-base md:text-lg">
                {item.q}
              </span>
              {isOpen ? <Minus className="h-5 w-5 text-accent shrink-0" /> : <Plus className="h-5 w-5 text-accent shrink-0" />}
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-muted-foreground font-body leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
