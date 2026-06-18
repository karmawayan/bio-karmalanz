import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowUpRight } from 'lucide-react';

// 1. Data Konten Artikel Statis (Sesuai dengan slug produk halaman utama)
const articleDatabase: Record<string, {
  title: string;
  category: string;
  date: string;
  author: string;
  content: React.ReactNode;
}> = {
  "premium-web-development": {
    title: "Membangun Premium Web Development Berkinerja Tinggi Berbasis Next.js",
    category: "Next.js & Tailwind CSS",
    date: "Juni 2026",
    author: "Karmalanz",
    content: (
      <div className="space-y-4">
        <p>Di era digital modern, kecepatan akses dan keindahan visual sebuah website adalah kunci utama penentu keberhasilan konversi bisnis. Menggunakan kombinasi framework <strong>Next.js App Router</strong> dan utilitas gaya <strong>Tailwind CSS</strong>, kami menghadirkan solusi arsitektur web premium yang sangat responsif, ramah SEO, dan optimal di berbagai ukuran perangkat gadget.</p>
        <p>Fitur unggulan dari implementasi teknologi ini meliputi mekanisme <em>Server-Side Rendering (SSR)</em> untuk memuat data instan, optimalisasi aset gambar otomatis, serta penerapan skema warna gelap eksklusif yang memanjakan mata pengunjung tanpa mengorbankan performa kecepatan situs.</p>
      </div>
    )
  },
  "inventory-system-management": {
    title: "Implementasi Cloud Database Pada Sistem E-Commerce & Manajemen Stok",
    category: "Cloud Database Solution",
    date: "Juni 2026",
    author: "Karmalanz",
    content: (
      <div className="space-y-4">
        <p>Pengelolaan stok barang baku dan integrasi transaksi e-commerce yang berantakan seringkali menjadi batu sandungan bagi para pelaku usaha. Solusi sistem manajemen inventaris modern ini dirancang khusus dengan integrasi basis data awan (*Cloud Database*) yang mampu memantau alur keluar masuk barang secara presisi hingga satuan mililiter dan gram.</p>
        <p>Sistem ini mengeliminasi kesalahan pencatatan manual, mempercepat proses <em>prep-work</em> produksi dapur/gudang, serta menyediakan dashboard pelaporan laba-rugi penjualan secara pasif dan terenkripsi aman.</p>
      </div>
    )
  },
  "ai-automation-content": {
    title: "Otomatisasi Konten Media Sosial Menggunakan Integrasi Sistem AI & Python",
    category: "SaaS & Workflow Automation",
    date: "Juni 2026",
    author: "Karmalanz",
    content: (
      <div className="space-y-4">
        <p>Konsistensi adalah tantangan terbesar dalam pengelolaan konten di platform media sosial seperti YouTube dan TikTok. Melalui pemanfaatan skrip otomasi cerdas berbasis Python yang dipadukan bersama kecerdasan buatan (AI), proses riset berita viral, pembuatan naskah narasi, hingga proses rendering video kini dapat dijalankan secara terjadwal otomatis.</p>
        <p>Integrasi alur kerja (SaaS Workflow) ini sangat cocok bagi para kreator dan agensi yang ingin mendominasi algoritma media sosial secara efisien tanpa perlu membuang waktu berjam-jam di depan layar komputer setiap hari.</p>
      </div>
    )
  }
};

// 2. Komponen Utama Halaman Detail Artikel Dinamis
export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const currentSlug = params.slug;
  const article = articleDatabase[currentSlug];

  // Jika slug yang diakses pengunjung tidak terdaftar di database atas
  if (!article) {
    return (
      <div className="min-h-screen bg-[#181510] text-[#E9DBBD] flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-2">Artikel Tidak Ditemukan</h1>
        <p className="text-xs text-[#E9DBBD]/60 mb-6">Halaman yang Anda cari belum diterbitkan atau telah dipindahkan.</p>
        <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2d271d] border border-[#CBB682]/30 text-xs font-bold text-[#CBB682] hover:bg-[#1f1b14] transition-all">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#181510] text-[#E9DBBD] flex flex-col justify-between p-4 sm:p-6 md:p-8 relative overflow-x-hidden selection:bg-[#CBB682] selection:text-[#181510]">
      
      {/* Background Glow Premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#785F37]/15 rounded-full blur-[100px]" />
      </div>

      <main className="w-full max-w-2xl mx-auto relative z-10 py-6 sm:py-12">
        
        {/* Tombol Back yang Lembut */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs text-[#CBB682] hover:text-[#E9DBBD] mb-8 group transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" /> Kembali ke Galeri
        </Link>

        {/* Header Artikel */}
        <header className="mb-6 border-b border-[#2d271d] pb-6">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#CBB682] bg-[#2d271d]/50 px-2.5 py-1 rounded-md border border-[#3e3527]">
            {article.category}
          </span>
          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-[#E9DBBD] mt-4 leading-tight">
            {article.title}
          </h1>
          
          {/* Metadata */}
          <div className="flex items-center gap-4 text-[11px] text-[#E9DBBD]/50 mt-4 font-medium">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#CBB682]" /> {article.date}
            </div>
            <div className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-[#CBB682]" /> Oleh: {article.author}
            </div>
          </div>
        </header>

        {/* Isi Konten Utama (Statis Paragraf Nyaman Dibaca) */}
        <article className="text-sm sm:text-base text-[#E9DBBD]/80 leading-relaxed space-y-5 tracking-wide text-justify font-normal">
          {article.content}
        </article>

        {/* Banner Penutup Pasif */}
        <div className="mt-12 p-4 rounded-xl bg-gradient-to-r from-[#1f1b14] to-[#2d271d] border border-[#3e3527] text-center">
          <p className="text-xs text-[#E9DBBD]/70">
            Tertarik meninjau infrastruktur teknologi serupa untuk kebutuhan bisnis Anda?
          </p>
          <div className="text-[11px] text-[#CBB682] font-semibold mt-2 flex items-center justify-center gap-1">
            Gunakan rekomendasi server resmi kami pada banner halaman utama <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-4 text-center border-t border-[#2d271d] mt-16 relative z-10">
        <p className="text-[10px] text-[#524734] tracking-wider">
          © {new Date().getFullYear()} KARMALANZ. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}