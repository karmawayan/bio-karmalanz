import React from 'react';
import Image from 'next/image'; // Tambahkan ini untuk optimalisasi gambar
import { ShieldCheck, MessageCircle, ExternalLink, Award } from 'lucide-react';

export default function LandingPage() {
  const links = [
    {
      title: "Rekomendasi Cloud Hosting - Dewaweb",
      description: "Gunakan kode promo untuk diskon khusus + gratis SSL selamanya.",
      url: "https://www.dewaweb.com", 
      icon: <Award className="w-5 h-5 text-amber-400" />, // Warna emas pada ikon
      badge: "Diskon Khusus"
    },
    {
      title: "Rekomendasi Web Hosting - Hostinger",
      description: "Pilihan terbaik untuk performa cepat dan harga sangat terjangkau.",
      url: "https://www.hostinger.co.id",
      icon: <ShieldCheck className="w-5 h-5 text-yellow-500" />, // Warna emas pada ikon
      badge: "Paling Populer"
    },
    {
      title: "Konsultasi Pembuatan Website via WhatsApp",
      description: "Hubungi saya langsung untuk diskusi proyek web atau kolaborasi AI.",
      url: "https://wa.me/6281234567890", // Silakan sesuaikan nomor WA Bapak nanti
      icon: <MessageCircle className="w-5 h-5 text-green-400" />,
      badge: "Respon Cepat"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-amber-500 selection:text-slate-950">
      {/* Efek Glow di Background - Diubah ke nuansa emas/amber */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-1/4 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px]" />
      </div>

      <main className="w-full max-w-xl mx-auto flex flex-col items-center relative z-10 py-12">
        {/* Profile Section - Menggunakan Foto Profil Sejati */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-500 to-amber-600 p-1 shadow-2xl shadow-amber-500/10 mb-4 animate-fade-in ring-2 ring-slate-900/50">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border-2 border-slate-950 overflow-hidden relative">
              {/* Menggunakan Image component Next.js untuk memanggil /public/profile.jpg */}
              <Image 
                src="/profile.jpg" // Mengambil dari folder public
                alt="Profile Bapak Karma" 
                fill // Mengisi area parent
                className="object-cover" // Memastikan foto proporsional dalam lingkaran
                priority // Memuat gambar ini terlebih dahulu
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-amber-100 to-yellow-200 bg-clip-text text-transparent">
            Karmalanz
          </h1>
          <p className="text-sm text-slate-400 max-w-sm mt-2">
            Penyedia Layanan Web & Solusi Digital Profesional. Temukan Rekomendasi Infrastruktur Terbaik untuk Bisnis Anda.
          </p>
        </div>

        {/* Links Container */}
        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-amber-900 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-amber-800 transition-colors">
                    {link.icon}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="font-semibold text-slate-200 group-hover:text-amber-400 transition-colors">
                        {link.title}
                      </h2>
                      {link.badge && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-amber-400/80 border border-amber-900/50">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {link.description}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-300 transition-colors mt-1 shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 relative z-10 text-center">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Karmalanz. All rights reserved.
        </p>
      </footer>
    </div>
  );
}