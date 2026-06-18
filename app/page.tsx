import React from 'react';
import Image from 'next/image';
import { ShieldCheck, MessageCircle, Award, ExternalLink, Briefcase } from 'lucide-react';

export default function LandingPage() {
  // Data Link Aplikasi Terintegrasi
  const links = [
    {
      title: "Dewaweb Hosting",
      description: "Rekomendasi Cloud Hosting premium dengan gratis SSL selamanya.",
      url: "https://www.dewaweb.com", 
      icon: <Award className="w-6 h-6 text-[#CBB682]" />, // Muted Gold dari gambar gold.jpg
      badge: "Diskon Promo"
    },
    {
      title: "Hostinger Indonesia",
      description: "Pilihan web hosting performa cepat dan harga sangat bersahabat.",
      url: "https://www.hostinger.co.id",
      icon: <ShieldCheck className="w-6 h-6 text-[#A08C5B]" />, // Antique Gold dari gambar gold.jpg
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
    // Background utama menggunakan #181510 (Deep Espresso Black dari gambar gold.jpg)
    <div className="min-h-screen bg-[#181510] text-[#E9DBBD] flex flex-col justify-between p-4 sm:p-6 md:p-8 selection:bg-[#CBB682] selection:text-[#181510] relative overflow-x-hidden">
      
      {/* Background Decorative Glow menggunakan gradasi warna gold dari gambar gold.jpg */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-5%] left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#785F37]/20 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-[5%] right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#A08C5B]/10 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>

      {/* Konten Utama Container */}
      <main className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 py-8">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-12 text-center px-4">
          {/* Border lingkaran menggunakan gradasi linear dari warna gold gambar gold.jpg */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#785F37] via-[#CBB682] to-[#E9DBBD] p-1 shadow-2xl shadow-[#785F37]/30 mb-4 ring-2 ring-[#181510]/50">
            <div className="w-full h-full rounded-full bg-[#181510] flex items-center justify-center border-2 border-[#181510] overflow-hidden relative">
              <Image 
                src="/profile.jpg" 
                alt="Profile Karmalanz" 
                fill 
                className="object-cover"
                priority 
              />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#E9DBBD] via-[#CBB682] to-[#A08C5B] bg-clip-text text-transparent">
            Karmalanz
          </h1>
          <p className="text-xs sm:text-sm text-[#E9DBBD]/70 max-w-md mt-2 leading-relaxed">
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
              className="group flex flex-col justify-between h-48 w-full bg-[#1f1b14] border border-[#2d271d] hover:border-[#CBB682]/40 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#785F37]/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#CBB682]/0 to-[#CBB682]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start justify-between w-full relative z-10">
                <div className="p-3 bg-[#181510] rounded-xl border border-[#2d271d] group-hover:border-[#CBB682]/30 transition-colors shadow-inner">
                  {link.icon}
                </div>
                {link.badge && (
                  <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-[#785F37]/20 text-[#E9DBBD] border border-[#A08C5B]/30 shadow-sm">
                    {link.badge}
                  </span>
                )}
              </div>
              <div className="text-left mt-4 relative z-10">
                <h2 className="font-bold text-base text-[#E9DBBD] group-hover:text-[#CBB682] transition-colors tracking-tight flex items-center gap-1.5">
                  {link.title}
                  <ExternalLink className="w-3.5 h-3.5 text-[#524734] group-hover:text-[#CBB682] opacity-0 group-hover:opacity-100 transition-all" />
                </h2>
                <p className="text-xs text-[#E9DBBD]/60 mt-1.5 line-clamp-2 leading-relaxed group-hover:text-[#E9DBBD]/80 transition-colors">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* SECTION 2: GALERI FOTO PRODUK */}
        <div className="w-full px-2 sm:px-0">
          <div className="flex items-center gap-2 mb-6 border-b border-[#2d271d] pb-3">
            <Briefcase className="w-5 h-5 text-[#CBB682]" />
            <h2 className="text-lg font-bold tracking-tight text-[#E9DBBD] uppercase">Produk & Portofolio Unggulan</h2>
          </div>

          {/* Grid Foto Produk */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, idx) => (
              <div 
                key={idx}
                className="group flex flex-col w-full bg-[#1f1b14] border border-[#2d271d] hover:border-[#CBB682]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#785F37]/10"
              >
                <div className="w-full aspect-[16/10] relative bg-[#181510] overflow-hidden">
                  <Image 
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181510] via-[#181510]/0 to-transparent opacity-80" />
                </div>

                <div className="p-4 text-left">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#CBB682]">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-sm text-[#E9DBBD] mt-1 group-hover:text-[#CBB682] transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-4 relative z-10 text-center border-t border-[#2d271d] mt-12">
        <p className="text-[11px] sm:text-xs text-[#524734] tracking-wider">
          © {new Date().getFullYear()} KARMALANZ. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}