'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  // State sederhana untuk memastikan komponen sudah terpasang aman di browser
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAffiliateClick = (productName: string, affiliateUrl: string) => {
    if (typeof window !== 'undefined') {
      if ((window as any).fbq) {
        (window as any).fbq('trackCustom', 'ClickAffiliate', { product: productName });
      }
      if ((window as any).gtag) {
        (window as any).gtag('event', 'click_affiliate_link', { 'product_name': productName });
      }
      window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (!isMounted) {
    return <div className="min-h-screen bg-slate-950" />;
  }

  return (
    <div className="min-h-screen bg-slate-955 text-white flex flex-col items-center justify-between px-4 py-12 font-sans selection:bg-purple-500">
      
      {/* PROFILE SECTION */}
      <div className="w-full max-w-md flex flex-col items-center text-center mt-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center font-black text-2xl mb-4 shadow-2xl border border-slate-800">
          KL
        </div>
        <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-indigo-200 to-pink-400 bg-clip-text text-transparent">
          Karma Lanz
        </h1>
        <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest font-semibold">
          Web Developer & Music Producer
        </p>
        <p className="text-slate-400 text-sm mt-3 max-w-xs leading-relaxed">
          Rekomendasi infrastruktur web hosting dan tools digital terbaik untuk performa bisnis maksimal.
        </p>
      </div>

      {/* BUTTONS SECTION */}
      <div className="w-full max-w-md space-y-4 my-8">
        
        {/* TOMBOL DEWAWEB */}
        <button
          onClick={() => handleAffiliateClick('Dewaweb Cloud Hosting', 'https://www.dewaweb.com/aff.php?aff=29146')}
          className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white p-4 rounded-xl font-bold text-center block shadow-2xl transition-all transform hover:scale-[1.02] relative border border-purple-500/30"
        >
          <span className="absolute -top-2.5 -right-2 bg-pink-600 text-[9px] uppercase font-black px-2.5 py-0.5 rounded-full shadow-md tracking-wider">
            Rekomendasi Bisnis
          </span>
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span>🌐</span>
              <span>Dewaweb Cloud Hosting</span>
            </div>
            <span className="text-xs bg-purple-900/50 px-2 py-0.5 rounded border border-purple-500/30 text-purple-300">Aman + Support 24/7</span>
          </div>
        </button>

        {/* TOMBOL HOSTINGER */}
        <button
          onClick={() => handleAffiliateClick('Hostinger International', '#')}
          className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-800 p-4 rounded-xl font-bold text-center block shadow-2xl transition-all transform hover:scale-[1.02] relative group"
        >
          <span className="absolute -top-2.5 -right-2 bg-purple-600 text-[9px] uppercase font-black px-2.5 py-0.5 rounded-full shadow-md tracking-wider">
            Paling Hemat
          </span>
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span className="text-slate-200">Hostinger Web Hosting</span>
            </div>
            <span className="text-xs bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-400">Diskon Gede</span>
          </div>
        </button>

        {/* TOMBOL WHATSAPP */}
        <button
          onClick={() => handleAffiliateClick('WhatsApp Konsultasi', 'https://wa.me/628xxxxxxxx')}
          className="w-full bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl font-semibold text-center block transition-all"
        >
          <div className="flex items-center justify-center gap-2">
            <span>💬</span>
            <span>Tanya Rekomendasi via WA</span>
          </div>
        </button>

      </div>

      {/* FOOTER SECTION */}
      <div className="w-full max-w-xs text-center text-[10px] text-slate-600 space-y-2">
        <p>© 2026 Karma Lanz. All rights reserved.</p>
        <p className="leading-relaxed">
          Situs ini berisi tautan afiliasi resmi. Kami menerima komisi untuk setiap langganan aktif tanpa biaya tambahan bagi Anda.
        </p>
      </div>

    </div>
  );
}