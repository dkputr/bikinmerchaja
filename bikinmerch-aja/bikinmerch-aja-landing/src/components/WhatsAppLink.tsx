"use client";
import type { ReactNode } from "react";
import { waUrl } from "@/lib/config";

type Props = { location: string; label: string; product?: string; className?: string; ariaLabel?: string; children: ReactNode };

export default function WhatsAppLink({ location, label, product, className, ariaLabel, children }: Props) {
  function track() {
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "click_whatsapp",
      button_location: location,
      CTA_label: label,
      page_location: window.location.href,
      product_name: product,
      product_category: product ? "furry_plush" : undefined,
    });
  }
  return (
    <a href={waUrl(product)} target="_blank" rel="noopener" className={className} aria-label={ariaLabel} onClick={track}>
      {children}
    </a>
  );
}
