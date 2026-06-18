import React from 'react';
import Image from 'next/image';
import { ShieldCheck, MessageCircle, Award, ExternalLink, Briefcase } from 'lucide-react';

export default function LandingPage() {
  // Data Link Aplikasi
  const links = [
    {
      title: "Dewaweb Hosting",
      description: "Rekomendasi Cloud Hosting premium dengan gratis SSL selamanya.",
      url: "https://www.dewaweb.com", 
      icon: <Award className="w-6 h-6 text-amber-400" />,
      badge: "Diskon Promo"
    },
    {
      title: "Hostinger Indonesia",
      description: "Pilihan web hosting performa cepat dan harga sangat bersahabat.",
      url: "https://www.hostinger.co.id",
      icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />,
      badge: "Terpopuler"
    },
    {
      title: "Konsultasi Website",
      description: "Hubungi saya langsung di WhatsApp untuk diskusi proyek & solusi AI.",
      url: "https://wa.me/6281234567890", 
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
      badge: "Online"
    }
  ];

  // Data Foto Produk Unggulan
  const products = [
    {
      title: "Premium Web Development",
      category: "Next.js & Tailwind CSS",
      image: "/produk1.jpg", 
    },
    {
      title: "E-Commerce & Inventory System",
      category: "Cloud Database Solution",
      image: "/produk2.jpg",
    },
    {
      title: "AI Automation Integration",
      category: "SaaS & Workflow Automation",
      image: "/produk3.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-4 sm:p-6 md:p-8 selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Background Decorative Glow (Emas Elegan) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-5%] left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-600/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-[5%] right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-yellow-600/10 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>

      {/* Konten Utama Container */}
      <main className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 py-8">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-12 text-center px-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-500 to-amber-600 p-1 shadow-2xl shadow-amber-500/20 mb-4 ring-2 ring-slate-900/50">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border-2 border-slate-950 overflow-hidden relative">
              <Image 
                src="/profile.jpg" 
                alt="Profile Karmalanz" 
                fill 
                className="object-cover"
                priority 
              />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-amber-100 to-yellow-200 bg-clip-text text-transparent">
            Karmalanz
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-2 leading-relaxed">
            Penyedia Layanan Web & Solusi Digital Profesional. Temukan Rekomendasi Infrastruktur Terbaik untuk Bisnis Anda.
          </p>
        </div>

        {/* SECTION 1: KARTU UTAMA LAYANAN */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 px-2 sm:px-0 mb-14">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between h-48 w-full bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/0 to-amber-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start justify-between w-full relative z-10">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-amber-500/30 transition-colors shadow-inner">
                  {link.icon}
                </div>
                {link.badge && (
                  <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-sm">
                    {link.badge}
                  </span>
                )}
              </div>
              <div className="text-left mt-4 relative z-10">
                <h2 className="font-bold text-base text-slate-100 group-hover:text-amber-300 transition-colors tracking-tight flex items-center gap-1.5">
                  {link.title}
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-all" />
                </h2>
                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* SECTION 2: GALERI FOTO PRODUK (UPGRADE BARU) */}
        <div className="w-full px-2 sm:px-0">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-900 pb-3">
            <Briefcase className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold tracking-tight text-slate-200 uppercase">Produk & Portofolio Unggulan</h2>
          </div>

          {/* Grid Foto Produk: 1 Kolom di HP, 3 Kolom di PC */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, idx) => (
              <div 
                key={idx}
                className="group flex flex-col w-full bg-slate-900/30 border border-slate-900 hover:border-amber-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5"
              >
                {/* Wadah Foto dengan Rasio Aspek Terkunci Berbasis Aplikasi (Aspect 16:10) */}
                <div className="w-full aspect-[16/10] relative bg-slate-950 overflow-hidden">
                  <Image 
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay Hitam Gradasi Lembut di Atas Foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/0 to-transparent opacity-60" />
                </div>

                {/* Deskripsi Teks di Bawah Foto Produk */}
                <div className="p-4 text-left">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-amber-500/80">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-sm text-slate-200 mt-1 group-hover:text-amber-300 transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-4 relative z-10 text-center border-t border-slate-900/50 mt-12">
        <p className="text-[11px] sm:text-xs text-slate-600 tracking-wider">
          © {new Date().getFullYear()} KARMALANZ. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}