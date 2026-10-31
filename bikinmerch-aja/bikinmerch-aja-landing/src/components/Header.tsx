"use client";
import { useState } from "react";
import WhatsAppLink from "./WhatsAppLink";

const links = [
  ["#home", "Beranda"], ["#plush", "Koleksi Boneka"], ["#custom", "Kustomisasi"], ["#how", "Cara Kerja"], ["#faq", "FAQ"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#home">BikinMerch<span>.aja</span></a>
        <nav id="nav" className={open ? "open" : ""} aria-label="Utama">
          <ul>
            {links.map(([h, t]) => (
              <li key={h}><a href={h} onClick={() => setOpen(false)}>{t}</a></li>
            ))}
          </ul>
        </nav>
        <WhatsAppLink location="navigation" label="Chat dengan Tim Kami" className="btn sm wa nav-cta">Chat dengan Tim Kami</WhatsAppLink>
        <button className="burger" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>Menu</button>
      </div>
    </header>
  );
}
