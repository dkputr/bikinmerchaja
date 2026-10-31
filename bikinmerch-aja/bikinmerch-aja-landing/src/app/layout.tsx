import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/config";
import { GtmHead, GtmNoScript } from "@/components/Gtm";

const title = "Pabrik Boneka Bulu Custom Indonesia | BikinMerch.aja – MOQ 100 pcs";
const description =
  "Produsen boneka bulu custom untuk brand, maskot, komunitas, dan event. Ubah karakter atau logo jadi boneka plush. MOQ mulai dari 100 pcs. Konsultasi via WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: ["pabrik boneka custom", "produsen boneka custom", "boneka maskot custom", "boneka bulu custom", "custom plush toys Indonesia", "custom mascot doll", "boneka custom MOQ 100 pcs"],
  alternates: { canonical: "/" },
  openGraph: { title: "BikinMerch.aja – Boneka Bulu Custom", description: "Ubah karakter, maskot, atau logomu jadi boneka plush yang empuk. MOQ mulai dari 100 pcs.", type: "website", locale: "id_ID", url: "/", siteName: "BikinMerch.aja" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <GtmNoScript />
        {children}
        <GtmHead />
      </body>
    </html>
  );
}
