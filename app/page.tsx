import React from 'react';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';

export default function LandingPage() {
  // Data Foto Produk Unggulan (Tetap dipertahankan 2 kolom di HP agar rapi)
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
      <main className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 py-6 sm:py-12">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10 text-center px-4">
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
            Penyedia Layanan Web & Solusi Digital Profesional. Menampilkan Katalog Portofolio Produk Unggulan Berkinerja Tinggi.
          </p>
        </div>

        {/* SECTION UTAMA: GALERI FOTO PRODUK (WAJIB COMBO 2 KOLOM DI HP / 3 KOLOM DI PC) */}
        <div className="w-full px-2 sm:px-0">
          <div className="flex items-center gap-2 mb-5 border-b border-[#2d271d] pb-2.5">
            <Briefcase className="w-4 sm:w-5 h-4 sm:h-5 text-[#CBB682]" />
            <h2 className="text-sm sm:text-lg font-bold tracking-tight text-[#E9DBBD] uppercase">Produk & Portofolio</h2>
          </div>

          {/* Grid Layout 2 Kolom di Layar Kecil Handphone, Otomatis Berubah 3 Kolom di Laptop */}
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
      <footer className="w-full py-4 relative z-10 text-center border-t border-[#2d271d] mt-16">
        <p className="text-[10px] sm:text-xs text-[#524734] tracking-wider">
          © {new Date().getFullYear()} KARMALANZ. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}