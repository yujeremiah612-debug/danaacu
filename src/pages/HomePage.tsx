import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO, SERVICES_LIST } from '../data/siteData';
import { ArrowRight, ShieldCheck, Phone, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HomePageProps {
  onOpenBooking: () => void;
  onAddToCart: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section: Soft Mint Green Background matching original */}
      <section className="bg-[#ddf2e4] pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 lg:px-8 border-b border-emerald-100/60">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal font-serif-baskerville text-[#1f2824] leading-tight tracking-tight">
            {t.homePage.heroTitle}
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-baskerville text-[#1f2824] max-w-4xl mx-auto leading-snug">
            {t.homePage.heroSubtitle}
          </h2>

          <div className="pt-2 flex justify-center">
            <Link
              to="/services"
              className="px-10 py-3 rounded-full bg-white text-gray-900 font-semibold text-sm hover:bg-neutral-50 shadow-sm hover:shadow-md transition-all border border-gray-200 cursor-pointer"
            >
              {t.homePage.explore}
            </Link>
          </div>

          {/* Two Distinctive Information Callouts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 pt-12 text-left border-t border-emerald-200/50">
            <div className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/80 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100/80 px-2.5 py-1 rounded-md">
                {t.homePage.tecarBadge}
              </span>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-serif-baskerville">
                {t.homePage.tecarDesc}
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/80 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100/80 px-2.5 py-1 rounded-md">
                {t.homePage.beautyBadge}
              </span>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-serif-baskerville">
                {t.homePage.beautyDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Iconic Visual Banners from Original Homepage */}
      <section className="bg-[#ddf2e4] pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: 몹시 아픈 통증 치료 인디바 */}
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white border border-emerald-100 flex flex-col">
            <div className="bg-[#0c594c] text-white py-4 px-6 text-center relative">
              <h3 className="text-2xl font-bold font-korean tracking-wide">
                몹시 아픈 통증 치료 <span className="text-amber-300">인디바</span>
              </h3>
              <p className="text-xs text-emerald-100 mt-0.5">
                {t.homePage.cardIndibaSub}
              </p>
              <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-[#0c594c] rotate-45" />
            </div>

            <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 mb-4">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=770,fit=crop/AMqlJ6lzG5sENaKO/danahanbang_image-04-YKbEqKXV1GIekW2Q.jpg"
                  alt="INDIBA Severe Pain Treatment"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t.homePage.cardIndibaDesc}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <Link
                    to="/services"
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
                  >
                    {t.homePage.cardIndibaLink} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => onAddToCart('high-frequency-indiba')}
                    className="text-xs bg-[#21272e] text-white px-3.5 py-1.5 rounded-full hover:bg-black transition-colors cursor-pointer"
                  >
                    + Add to Request
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 다나한방 성형침 */}
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white border border-emerald-100 flex flex-col">
            <div className="bg-[#0c594c] text-white py-4 px-6 text-center relative">
              <h3 className="text-2xl font-bold font-korean tracking-wide">
                다나한방 <span className="text-amber-300">성형침</span>
              </h3>
              <p className="text-xs text-emerald-100 mt-0.5">
                {t.homePage.cardCosmeticSub}
              </p>
              <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-[#0c594c] rotate-45" />
            </div>

            <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 mb-4">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=670,fit=crop/AMqlJ6lzG5sENaKO/face-model-YyvZwODZZ7hvJ4vm.png"
                  alt="다나한방 성형침 Facial Acupuncture"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-red-600/95 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md">
                  {t.homePage.cardCosmeticBadge}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t.homePage.cardCosmeticDesc}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <Link
                    to="/services"
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
                  >
                    {t.homePage.cardCosmeticLink} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => onAddToCart('cosmetic-facial-acupuncture')}
                    className="text-xs bg-[#21272e] text-white px-3.5 py-1.5 rounded-full hover:bg-black transition-colors cursor-pointer"
                  >
                    + Add to Request
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Orange Banner from Original: Incontinence & Tinnitus Treatment */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-[#fba266] rounded-2xl p-6 sm:p-8 text-center text-[#21272e] shadow-md border border-amber-300/60 space-y-2">
            <h3 className="text-lg sm:text-2xl font-bold font-serif-baskerville">
              {t.homePage.incontinenceTitle}
            </h3>
            <h4 className="text-lg sm:text-2xl font-bold font-serif-baskerville">
              {t.homePage.hearingTitle}
            </h4>
            <p className="text-xs sm:text-sm text-gray-800 pt-2 font-medium">
              {t.homePage.specializedDesc}
            </p>
          </div>
        </div>

        {/* About us callout block on Homepage */}
        <div className="max-w-4xl mx-auto mt-14 bg-white/70 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-emerald-200/60 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-baskerville text-[#9b6336]">
              {t.homePage.aboutTitle}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {t.homePage.aboutLocation}
            </p>
          </div>
          <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-emerald-200/80 pt-4 md:pt-0 md:pl-8 text-gray-800 leading-relaxed font-serif-baskerville text-base sm:text-lg">
            {t.homePage.aboutText}
          </div>
        </div>
      </section>

      {/* Featured Services Quick Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                {t.homePage.popularBadge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-baskerville text-gray-900 mt-2">
                {t.homePage.popularTitle}
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 text-sm font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 underline underline-offset-4"
            >
              {t.homePage.popularLink}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_LIST.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group bg-white"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#21272e]/85 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                    {item.highlight}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {language === 'ko' ? item.koreanName : item.name}
                    </h3>
                    <p className="text-xs text-emerald-700 font-medium mb-3">
                      {language === 'ko' ? item.name : item.koreanName}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {item.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to="/services"
                      className="text-xs font-bold text-gray-800 hover:text-emerald-700"
                    >
                      {language === 'ko' ? '자세히 보기 →' : 'Learn more →'}
                    </Link>
                    <button
                      onClick={() => onAddToCart(item.id)}
                      className="text-xs bg-[#21272e] text-white px-3 py-1.5 rounded-full hover:bg-black transition-colors cursor-pointer"
                    >
                      + {language === 'ko' ? '담기' : 'Add to Request'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Clinic Credibility Strip */}
      <section className="bg-stone-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{t.homePage.insuranceTitle}</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {t.homePage.insuranceDesc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{t.homePage.doctorTitle}</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {t.homePage.doctorDesc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{t.homePage.locationTitle}</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {t.homePage.locationDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
