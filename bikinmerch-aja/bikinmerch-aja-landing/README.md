# BikinMerch.aja – Landing Page Boneka Bulu Custom

Next.js (App Router) + TypeScript + Tailwind CSS v4. Tidak ada backend atau database.

## Menjalankan
```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # cek build produksi
npm run lint                 # type check
```
Butuh Node.js 20.9 atau lebih baru (dites di Node 22).

## Deploy ke Vercel
1. Push ke GitHub, lalu Import Project di Vercel (framework terdeteksi otomatis).
2. Klik Deploy. Tidak perlu isi environment variable. Domain Vercel dipakai otomatis untuk canonical dan sitemap.
3. Kalau nanti pakai domain sendiri, isi `NEXT_PUBLIC_SITE_URL` lalu Redeploy. `NEXT_PUBLIC_GTM_ID` baru diisi saat ID GTM sudah ada.

## Yang diatur di satu tempat
- Nomor WhatsApp, Instagram, domain, GTM ID: `src/lib/config.ts` (+ env).
- Teks pesan WhatsApp otomatis: `BASE` di `src/lib/config.ts`. Dari kartu produk, nama produk ikut masuk ke pesan.
- Konten halaman (produk, FAQ, langkah): array di atas `src/app/page.tsx`.
- Foto: `public/images/`. Semua dari katalog PDF (hamster p.23, badak p.24, naga p.27, beruang p.32).

## Tracking (GTM)
GTM hanya dimuat kalau `NEXT_PUBLIC_GTM_ID` diisi. GA4, Google Ads, dan Meta Pixel dipasang di dalam container GTM, bukan di kode. Belum ada ID yang dipasang.

Setiap klik WhatsApp mengirim ke `dataLayer`:
| Field | Isi |
|---|---|
| event | `click_whatsapp` |
| button_location | `navigation`, `hero`, `product_card`, `product_showcase`, `customization`, `final_cta`, `footer`, `floating_button` |
| CTA_label | teks tombol |
| page_location | URL halaman |
| product_name, product_category | hanya dari kartu produk |

Catatan: klik WhatsApp bukan bukti pesan terkirim atau lead terkualifikasi. Di GTM, jadikan event ini sebagai "klik kontak", jangan dilaporkan sebagai lead.

Belum dites: GTM Preview, GA4 DebugView, Google Ads, Meta Events Manager (butuh ID dan akun kamu).

## Perlu dikonfirmasi sebelum ads jalan
- Foto katalog: pastikan foto produk asli atau render yang boleh dipublikasikan. Resolusi foto hero (510 px) agak kecil untuk layar retina besar.
- Kemampuan produksi di bagian "Bentuk sesuai maumu" (bordir, aksesori, label, dll).
- Info sampel dan lama produksi (sekarang dijawab netral).
- Domain final dan gambar Open Graph (belum ada).
- Font memakai Google Fonts lewat tag link; ganti ke `next/font` kalau mau self-host.
