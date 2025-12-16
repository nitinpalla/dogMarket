"use client";

import * as React from "react";

type Item = { q: string; a: string };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        const btnId = `faq-btn-${idx}`;
        const panelId = `faq-panel-${idx}`;

        return (
          <div key={idx} className="rounded-2xl border border-neutral-200 bg-white">
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                className="w-full text-left px-5 py-4 font-medium flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-2xl"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : idx)}
              >
                <span>{it.q}</span>
                <span className="ml-4 text-neutral-500" aria-hidden="true">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`${isOpen ? "block" : "hidden"} px-5 pb-5 text-neutral-700 leading-relaxed`}
            >
              {it.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
