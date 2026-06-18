import React from 'react';
import Image from 'next/image';
import { ShieldCheck, MessageCircle, Award, ExternalLink, Briefcase, Percent, ArrowUpRight } from 'lucide-react';

export default function LandingPage() {
  // Data Link Aplikasi Terintegrasi
  const links = [
    {
      title: "Dewaweb Hosting",
      description: "Cloud Hosting premium dengan gratis SSL selamanya.",
      url: "https://www.dewaweb.com", 
      icon: <Award className="w-5 h-5 text-[#CBB682]" />, 
      badge: "Promo"
    },
    {
      title: "Hostinger Indonesia",
      description: "Web hosting performa cepat dan harga bersahabat.",
      url: "https://www.hostinger.com/id?REFERRALCODE=YVKKARMAWF1J",
      icon: <ShieldCheck className="w-5 h-5 text-[#A08C5B]" />,
      badge: "Diskon"
    },
    {
      title: "Konsultasi Website",
      description: "Hubungi saya langsung di WhatsApp untuk diskusi proyek & solusi AI.",
      url: "https://wa.me/6281234567890", 
      icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
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
    <div className="min-h-screen bg-[#181510] text-[#E9DBBD] flex flex-col justify-between p-3 sm:p-6 md:p-8 selection:bg-[#CBB682] selection:text-[#181510] relative overflow-x-hidden">
      
      {/* Background Decorative Glow menggunakan gradasi warna gold dari gambar gold.jpg */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-5%] left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#785F37]/20 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-[5%] right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#A08C5B]/10 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>

      {/* Konten Utama Container */}
      <main className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 py-4 sm:py-8">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 text-center px-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#785F37] via-[#CBB682] to-[#E9DBBD] p-1 shadow-2xl shadow-[#785F37]/30 mb-3 ring-2 ring-[#181510]/50">
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
          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#E9DBBD] via-[#CBB682] to-[#A08C5B] bg-clip-text text-transparent">
            Karmalanz
          </h1>
          <p className="text-[11px] sm:text-sm text-[#E9DBBD]/70 max-w-md mt-1 leading-relaxed">
            Penyedia Layanan Web & Solusi Digital Profesional. Temukan Rekomendasi Infrastruktur Terbaik untuk Bisnis Anda.
          </p>
        </div>

        {/* SECTION PREMIUM AFFILIATE BANNER SPACE (Dewaweb & Hostinger Promo) */}
        <div className="w-full px-2 sm:px-0 mb-8">
          <div className="w-full bg-gradient-to-r from-[#2d271d] via-[#1f1b14] to-[#2d271d] border border-[#CBB682]/30 rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-xl shadow-[#785F37]/5 group">
            <div className="absolute top-0 right-0 p-2 bg-[#CBB682]/10 rounded-bl-xl border-l border-b border-[#CBB682]/20 text-[#CBB682] text-[9px] font-bold uppercase tracking-wider">
              Affiliate Partner
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#181510] rounded-xl border border-[#3e3527] text-[#CBB682] shrink-0 mt-0.5">
                  <Percent className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-[#E9DBBD] tracking-tight">
                    Diskon Spesial Cloud Hosting & Web Hosting
                  </h3>
                  <p className="text-xs text-[#E9DBBD]/60 mt-1 max-w-xl leading-relaxed">
                    Dapatkan performa server terbaik, uptime tinggi, dan gratis SSL selamanya dari <span className="text-[#CBB682] font-semibold">Dewaweb</span> & <span className="text-[#CBB682] font-semibold">Hostinger</span> melalui link rekomendasi resmi Karmalanz.
                  </p>
                </div>
              </div>
              <div className="flex flex-col xs:flex-row sm:flex-col gap-2 shrink-0">
                {/* Menggunakan Link Referral Kode Spesifik Bapak */}
                <a 
                  href="https://www.hostinger.com/id?REFERRALCODE=YVKKARMAWF1J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#A08C5B] to-[#CBB682] text-[#181510] text-xs font-bold hover:brightness-110 transition-all shadow-md shadow-[#785F37]/20 text-center"
                >
                  Klaim Promo Hostinger <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://www.dewaweb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#181510] border border-[#CBB682]/40 text-[#E9DBBD] text-xs font-bold hover:bg-[#1f1b14] transition-all text-center"
                >
                  Klaim Promo Dewaweb <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: KARTU UTAMA LAYANAN (DIPERKECIL WAJIB 2 KOLOM DI HP) */}
        {/* grid-cols-2 memaksa layout membagi layar menjadi 2 kolom di HP, md:grid-cols-3 akan membaginya menjadi 3 kolom di laptop */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-5 px-1 sm:px-0 mb-10">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              // Tinggi kartu diturunkan menjadi h-40 agar proporsional dan tidak memakan space berlebih di HP
              className="group flex flex-col justify-between h-40 w-full bg-[#1f1b14] border border-[#2d271d] hover:border-[#CBB682]/40 rounded-xl sm:rounded-2xl p-3 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#785F37]/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#CBB682]/0 to-[#CBB682]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start justify-between w-full relative z-10">
                <div className="p-2 sm:p-3 bg-[#181510] rounded-lg sm:rounded-xl border border-[#2d271d] group-hover:border-[#CBB682]/30 transition-colors shadow-inner">
                  {link.icon}
                </div>
                {link.badge && (
                  <span className="text-[8px] sm:text-[10px] font-bold tracking-wide uppercase px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded bg-[#785F37]/20 text-[#E9DBBD] border border-[#A08C5B]/30 shadow-sm">
                    {link.badge}
                  </span>
                )}
              </div>
              <div className="text-left mt-2 sm:mt-4 relative z-10">
                <h2 className="font-bold text-xs sm:text-base text-[#E9DBBD] group-hover:text-[#CBB682] transition-colors tracking-tight flex items-center gap-1 sm:gap-1.5">
                  <span className="line-clamp-1">{link.title}</span>
                  <ExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#524734] group-hover:text-[#CBB682] shrink-0" />
                </h2>
                <p className="text-[10px] sm:text-xs text-[#E9DBBD]/50 mt-0.5 sm:mt-1.5 line-clamp-2 leading-tight sm:leading-relaxed group-hover:text-[#E9DBBD]/70 transition-colors">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* SECTION 2: GALERI FOTO PRODUK (DIUBAH MENJADI 2 KOLOM DI HP AGAR SEIMBANG) */}
        <div className="w-full px-2 sm:px-0">
          <div className="flex items-center gap-2 mb-4 border-b border-[#2d271d] pb-2">
            <Briefcase className="w-4 sm:w-5 h-4 sm:h-5 text-[#CBB682]" />
            <h2 className="text-sm sm:text-lg font-bold tracking-tight text-[#E9DBBD] uppercase">Produk & Portofolio</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {products.map((product, idx) => (
              <div 
                key={idx}
                className="group flex flex-col w-full bg-[#1f1b14] border border-[#2d271d] hover:border-[#CBB682]/30 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#785F37]/10"
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

                <div className="p-2 sm:p-4 text-left">
                  <span className="text-[8px] sm:text-[10px] font-medium uppercase tracking-wider text-[#CBB682]">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-xs sm:text-sm text-[#E9DBBD] mt-0.5 sm:mt-1 group-hover:text-[#CBB682] transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-4 relative z-10 text-center border-t border-[#2d271d] mt-8">
        <p className="text-[10px] sm:text-xs text-[#524734] tracking-wider">
          © {new Date().getFullYear()} KARMALANZ. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}