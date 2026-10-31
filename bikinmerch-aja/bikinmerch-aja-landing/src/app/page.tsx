import Image from "next/image";
import Header from "@/components/Header";
import WhatsAppLink from "@/components/WhatsAppLink";
import { INSTAGRAM, WA_DISPLAY } from "@/lib/config";

const products = [
  { name: "Naga bermotif dan karakter stik", src: "/images/naga.jpg", w: 1200, h: 1200, alt: "Boneka naga bermotif dan dua boneka karakter berbentuk stik di atas meja kayu", note: "Contoh katalog. Naga 36 × 17 cm, boneka stik 23 × 8 cm" },
  { name: "Boneka badak", src: "/images/badak.jpg", w: 614, h: 700, alt: "Boneka badak krem yang lembut di antara miniatur pohon kayu", note: "Contoh katalog. 22 × 36 cm" },
  { name: "Gantungan kunci beruang plush", src: "/images/beruang.jpg", w: 850, h: 900, alt: "Gantungan kunci boneka beruang krem dengan pita, dipasang di tas kulit", note: "Contoh katalog. Ukuran kecil untuk giveaway dan event" },
];
const custom = [
  ["Bentuk & desain karakter", "Dari sketsa maskot atau logo sampai jadi boneka 3D."],
  ["Ukuran & dimensi", "Dari gantungan kunci mungil sampai boneka ukuran display."],
  ["Kain & tekstur", "Permukaan berbulu, lembut, dan fluffy sesuai kesan yang diinginkan brand-mu."],
  ["Warna", "Disesuaikan dengan palet warna brand-mu."],
  ["Detail bordir", "Mata, wajah, dan logo yang dibordir."],
  ["Aksesori", "Baju, topi, pita, dan ring gantungan kunci."],
  ["Label & branding", "Tag dan label dengan namamu."],
];
const steps = [
  ["Kirim idemu", "Kirim karakter, logo, atau konsepmu lewat WhatsApp."],
  ["Diskusi & pengembangan", "Kita bahas ukuran, bahan, detail, dan jumlah."],
  ["Sampel & persetujuan", "Cek desain sebelum masuk produksi."],
  ["Produksi", "Boneka yang sudah disetujui diproduksi massal."],
  ["Pengiriman", "Boneka jadi dikirim ke kamu."],
];
const why = [
  ["Pengembangan karakter custom", "Kami mengerjakan dari karakter, maskot, atau logomu."],
  ["Fokus produksi boneka plush", "Boneka plush adalah satu-satunya fokus kami."],
  ["Komunikasi proyek yang jelas", "Satu chat WhatsApp dari ide pertama sampai pengiriman."],
  ["Perencanaan produksi", "Jumlah dan jadwal kita petakan bersama sejak awal."],
  ["Pesanan massal", "Untuk brand, event, dan komunitas, mulai dari 100 pcs."],
];
const faq = [
  ["Berapa minimum order?", "Minimum order kami mulai dari 100 pcs."],
  ["Bisakah saya membuat boneka dari karakter sendiri?", "Bisa. Kirim karakter, maskot, atau logomu dan kita bahas cara mewujudkannya jadi boneka."],
  ["Bisakah ukuran dan bahan disesuaikan?", "Ukuran dan bahan selalu dibahas di setiap proyek. Ceritakan yang kamu bayangkan dan kami konfirmasi apa yang memungkinkan."],
  ["Bisakah minta sampel?", "Detail sampel disepakati saat konsultasi. Tanyakan lewat WhatsApp."],
  ["Bagaimana proses penawaran?", "Kirim detail proyekmu. Kami pelajari lalu balas dengan penawaran."],
  ["Berapa lama produksinya?", "Tergantung kerumitan desain dan jumlah. Kirim target tanggalmu dan kami konfirmasi jadwalnya."],
  ["Apa yang perlu disiapkan sebelum minta penawaran?", "Konsep boneka, perkiraan jumlah, ukuran yang diinginkan, gambar referensi atau desain, dan target tanggal produksi."],
];
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: "BikinMerch.aja", description: "Mitra produksi boneka bulu custom", sameAs: [`https://www.instagram.com/${INSTAGRAM}`] },
    { "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="wrap">
            <div>
              <span className="moq">BONEKA BULU CUSTOM | MOQ MULAI DARI 100 PCS</span>
              <h1>Ubah karakter kamu jadi boneka yang empuk dipeluk.</h1>
              <p>Wujudkan karakter, maskot, dan konsep kreatifmu jadi boneka plush custom. Dari pengembangan desain sampai produksi, kami bantu ubah idemu jadi produk nyata.</p>
              <div className="cta-row">
                <WhatsAppLink location="hero" label="Diskusikan Proyekmu" className="btn wa">Diskusikan Proyekmu</WhatsAppLink>
                <a className="btn ghost" href="#plush">Lihat Koleksi Boneka</a>
              </div>
            </div>
            <div className="arch">
              <Image src="/images/hamster.jpg" width={510} height={510} priority alt="Boneka hamster biru pastel dengan perut krem, contoh dari katalog BikinMerch.aja" />
            </div>
          </div>
        </section>

        <section className="alt" id="plush">
          <div className="wrap">
            <h2>Boneka yang lahir dari ide seperti milikmu.</h2>
            <p>Beberapa contoh boneka bulu dari katalog kami. Bonekamu bisa dimulai dari sketsa, logo, atau karakter yang sudah ada.</p>
            <div className="gal">
              {products.map((p) => (
                <article className="card" key={p.name}>
                  <Image src={p.src} width={p.w} height={p.h} alt={p.alt} sizes="(max-width:820px) 100vw, 66vw" />
                  <div>
                    <h3>{p.name}</h3>
                    <small>{p.note}</small>
                    <WhatsAppLink location="product_card" label="Minta Penawaran" product={p.name} className="btn sm wa">Minta Penawaran</WhatsAppLink>
                  </div>
                </article>
              ))}
              <article className="card" style={{ background: "var(--peach)", justifyContent: "center" }}>
                <div>
                  <h3>Karaktermu bisa jadi yang berikutnya.</h3>
                  <p style={{ marginBottom: 18 }}>Kirim gambar referensimu dan kita bahas apa yang bisa dibuat.</p>
                  <WhatsAppLink location="product_showcase" label="Buat Boneka Custom-mu" className="btn wa">Buat Boneka Custom-mu</WhatsAppLink>
                </div>
              </article>
            </div>
            <p className="note">Ini contoh produk dari katalog, bukan proyek pelanggan.</p>
          </div>
        </section>

        <section id="custom">
          <div className="wrap">
            <h2>Bentuk sesuai maumu.</h2>
            <p>Ceritakan kebutuhanmu. Kami konfirmasi apa yang bisa diproduksi untuk desain dan jumlahmu.</p>
            <div className="grid3">
              {custom.map(([t, d]) => (<div className="tile" key={t}><h3>{t}</h3><p>{d}</p></div>))}
            </div>
            <p style={{ marginTop: 28 }}>
              <WhatsAppLink location="customization" label="Diskusikan Proyekmu" className="btn wa">Diskusikan Proyekmu</WhatsAppLink>
            </p>
          </div>
        </section>

        <section className="alt" id="how">
          <div className="wrap">
            <h2>Dari ide jadi boneka dalam lima langkah.</h2>
            <ol className="steps">
              {steps.map(([t, d]) => (<li key={t}><h3>{t}</h3><p>{d}</p></li>))}
            </ol>
          </div>
        </section>

        <section>
          <div className="wrap">
            <h2>Kenapa BikinMerch.aja</h2>
            <div className="grid3">
              {why.map(([t, d]) => (<div className="tile" key={t}><h3>{t}</h3><p>{d}</p></div>))}
            </div>
          </div>
        </section>

        <section className="alt" id="faq">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <h2>Pertanyaan yang sering ditanyakan</h2>
            {faq.map(([q, a]) => (<details key={q}><summary>{q}</summary><p>{a}</p></details>))}
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="final">
              <h2>Siap menghidupkan karaktermu?</h2>
              <p>Ceritakan ide bonekamu dan mari kita bahas cara mewujudkannya.</p>
              <WhatsAppLink location="final_cta" label="Mulai Proyekmu di WhatsApp" className="btn wa">Mulai Proyekmu di WhatsApp</WhatsAppLink>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div><strong style={{ color: "var(--ink)" }}>BikinMerch.aja</strong><br />Mitra produksi boneka plush custom-mu.<br />Boneka bulu custom, MOQ mulai 100 pcs.</div>
          <div><a href="#plush">Koleksi Boneka</a><a href="#custom">Kustomisasi</a><a href="#how">Cara Kerja</a><a href="#faq">FAQ</a></div>
          <div>
            <a className="soc" href={`https://www.instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener" aria-label={`Instagram @${INSTAGRAM}`}>
              <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></span>@{INSTAGRAM}
            </a>
            <WhatsAppLink location="footer" label="WhatsApp" className="soc" ariaLabel={`WhatsApp ${WA_DISPLAY}`}>
              <span className="ic"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></span>{WA_DISPLAY}
            </WhatsAppLink>
          </div>
        </div>
      </footer>

      <WhatsAppLink location="floating_button" label="Chat via WhatsApp" className="float" ariaLabel="Chat via WhatsApp">Chat via WhatsApp</WhatsAppLink>
    </>
  );
}
