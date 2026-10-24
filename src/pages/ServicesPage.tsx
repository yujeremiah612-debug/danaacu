import React, { useState } from 'react';
import { CLINIC_INFO, SERVICES_LIST, GALLERY_ITEMS } from '../data/siteData';
import { ServiceItem } from '../utils/appointmentPlanner';
import { Calendar, Phone, Plus, Check, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onAddToCart: (serviceId: string) => void;
  selectedServices: string[];
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onAddToCart,
  selectedServices,
  onOpenBooking,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { language, t } = useLanguage();

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === activeFilter);

  // The 3 primary showcase items from the reference services page
  const acupunctureService = SERVICES_LIST.find((s) => s.id === 'acupuncture-treatments')!;
  const indibaService = SERVICES_LIST.find((s) => s.id === 'high-frequency-indiba')!;
  const orientalService = SERVICES_LIST.find((s) => s.id === 'oriental-medicine')!;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section: Sunset Water Background from Original Website */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image: body of water during golden hour */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
          style={{
            backgroundImage: `url('${CLINIC_INFO.serviceHeroBackground}')`,
          }}
        >
          {/* Subtle golden sunset gradient overlay matching original luminosity */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <HeartPulse className="w-4 h-4 text-emerald-300" />
            <span>{t.servicesPage.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] drop-shadow-sm font-serif-baskerville mb-6 leading-tight">
            {t.servicesPage.heroTitle}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-neutral-800 font-medium max-w-3xl mx-auto leading-relaxed mb-10">
            {t.servicesPage.heroSubtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-[#21272e] text-white text-sm font-semibold hover:bg-black hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.servicesPage.scheduleButton}</span>
            </button>

            <a
              href={`tel:${CLINIC_INFO.officePhoneRaw}`}
              className="px-8 py-3.5 rounded-full bg-white/90 hover:bg-white text-gray-900 text-sm font-semibold shadow-md transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{t.servicesPage.callButton}</span>
            </a>
          </div>

          {/* Insurance Acceptance Strip */}
          <div className="mt-12 pt-6 border-t border-white/25 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-900 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-800" />
              {t.servicesPage.insuranceAetna}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-800" />
              {t.servicesPage.insuranceBcbs}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-800" />
              {t.servicesPage.insuranceCigna}
            </span>
          </div>
        </div>
      </section>

      {/* Primary 3-Section Showcase reproducing the original Services layout */}
      <section className="py-20 lg:py-28 bg-[#fbfdfc] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          
          {/* 1. Acupuncture Treatments (Image Left, Content Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-1">
              <div
                onClick={() => onSelectService(acupunctureService)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl aspect-[4/3]"
              >
                <img
                  src={acupunctureService.imageUrl}
                  alt="person holding silver and white pen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-sm font-semibold flex items-center gap-2">
                    {t.servicesPage.learnDetails} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-2 text-center lg:text-left space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                {t.servicesPage.coreBadgeAcu}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif-baskerville text-[#1e293b] leading-snug">
                {language === 'ko' ? acupunctureService.koreanName : acupunctureService.name}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                {language === 'ko'
                  ? '목, 어깨, 허리 및 관절 통증을 완화하는 개인 맞춤형 침구 치료 세션을 경험해 보세요.'
                  : acupunctureService.shortDesc}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onSelectService(acupunctureService)}
                  className="text-sm font-semibold text-[#21272e] hover:text-emerald-700 underline underline-offset-4 transition-colors cursor-pointer"
                >
                  {t.servicesPage.learnDetails} &rarr;
                </button>
                <button
                  onClick={() => onAddToCart(acupunctureService.id)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedServices.includes(acupunctureService.id)
                      ? 'bg-emerald-700 border-emerald-700 text-white'
                      : 'border-gray-300 text-gray-800 hover:border-black'
                  }`}
                >
                  {selectedServices.includes(acupunctureService.id) ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> {t.servicesPage.addedToBag}
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" /> {t.servicesPage.addRequest}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 2. High frequency unit (INDIBA) (Content Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 text-center lg:text-left space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                {t.servicesPage.coreBadgeIndiba}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif-baskerville text-[#1e293b] leading-snug">
                {language === 'ko' ? indibaService.koreanName : indibaService.name}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                {language === 'ko'
                  ? '심부 온열 고주파를 통해 몸의 깊은 긴장을 풀고 세포 활력을 북돋우는 전문 테라피를 제공합니다.'
                  : indibaService.shortDesc}
              </p>

              <p className="text-sm text-gray-500 italic max-w-lg">
                {t.servicesPage.indibaNote}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onSelectService(indibaService)}
                  className="text-sm font-semibold text-[#21272e] hover:text-emerald-700 underline underline-offset-4 transition-colors cursor-pointer"
                >
                  {t.servicesPage.learnDetails} &rarr;
                </button>
                <button
                  onClick={() => onAddToCart(indibaService.id)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedServices.includes(indibaService.id)
                      ? 'bg-emerald-700 border-emerald-700 text-white'
                      : 'border-gray-300 text-gray-800 hover:border-black'
                  }`}
                >
                  {selectedServices.includes(indibaService.id) ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> {t.servicesPage.addedToBag}
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" /> {t.servicesPage.addRequest}
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div
                onClick={() => onSelectService(indibaService)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl aspect-[4/3]"
              >
                <img
                  src={indibaService.imageUrl}
                  alt="INDIBA Deep Beauty treatment unit"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-sm font-semibold flex items-center gap-2">
                    {t.servicesPage.learnDetails} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Oriental Medicine (Image Left, Content Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-1">
              <div
                onClick={() => onSelectService(orientalService)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl aspect-[4/3]"
              >
                <img
                  src={orientalService.imageUrl}
                  alt="Traditional Korean Oriental Medicine Herb Cabinet"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-sm font-semibold flex items-center gap-2">
                    {t.servicesPage.learnDetails} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-2 text-center lg:text-left space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                {t.servicesPage.coreBadgeHerb}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif-baskerville text-[#1e293b] leading-snug">
                {language === 'ko' ? orientalService.koreanName : orientalService.name}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                {language === 'ko'
                  ? '체질에 맞춘 최고급 전통 한약과 건강 증진 및 피부 개선을 돕는 한방 치료를 만나보세요.'
                  : orientalService.shortDesc}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onSelectService(orientalService)}
                  className="text-sm font-semibold text-[#21272e] hover:text-emerald-700 underline underline-offset-4 transition-colors cursor-pointer"
                >
                  {t.servicesPage.learnDetails} &rarr;
                </button>
                <button
                  onClick={() => onAddToCart(orientalService.id)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedServices.includes(orientalService.id)
                      ? 'bg-emerald-700 border-emerald-700 text-white'
                      : 'border-gray-300 text-gray-800 hover:border-black'
                  }`}
                >
                  {selectedServices.includes(orientalService.id) ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> {t.servicesPage.addedToBag}
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" /> {t.servicesPage.addRequest}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Full Services Catalog & Categories Filter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
              {t.servicesPage.catalogBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-baskerville text-[#111827] mt-3 mb-4">
              {t.servicesPage.catalogTitle}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {t.servicesPage.catalogSubtitle}
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: 'all', label: t.servicesPage.filterAll },
                { id: 'acupuncture', label: t.servicesPage.filterAcu },
                { id: 'rf_indiba', label: t.servicesPage.filterIndiba },
                { id: 'cosmetic', label: t.servicesPage.filterCosmetic },
                { id: 'herbal', label: t.servicesPage.filterHerbal },
                { id: 'wellness', label: t.servicesPage.filterWellness },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#21272e] text-white shadow-sm'
                      : 'bg-stone-100 text-gray-600 hover:bg-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const inCart = selectedServices.includes(service.id);
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div
                    onClick={() => onSelectService(service)}
                    className="relative h-56 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {service.highlight && (
                      <span className="absolute top-3 left-3 bg-[#21272e]/85 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                        {service.highlight}
                      </span>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        onClick={() => onSelectService(service)}
                        className="text-lg font-bold text-gray-900 group-hover:text-emerald-800 transition-colors cursor-pointer"
                      >
                        {language === 'ko' ? service.koreanName : service.name}
                      </h3>
                      <p className="text-xs text-emerald-700 font-medium mb-3">
                        {language === 'ko' ? service.name : service.koreanName}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => onSelectService(service)}
                        className="text-xs font-bold text-gray-800 hover:text-emerald-700 transition-colors cursor-pointer"
                      >
                        {t.servicesPage.viewDetails} &rarr;
                      </button>

                      <button
                        onClick={() => onAddToCart(service.id)}
                        className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all flex items-center gap-1 cursor-pointer ${
                          inCart
                            ? 'bg-emerald-700 text-white'
                            : 'bg-stone-100 hover:bg-stone-200 text-gray-800'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-3 h-3" /> {t.servicesPage.addedToBag}
                          </>
                        ) : (
                          <>
                            <Plus className="w-3 h-3" /> {t.servicesPage.addRequest}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section reproducing the exact original Gallery from Services page */}
      <section className="py-20 lg:py-28 bg-[#f8faf9] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif-baskerville text-[#111827] mb-4">
              {t.servicesPage.galleryTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-medium">
              {t.servicesPage.gallerySubtitle}
            </p>
          </div>

          <div className="space-y-8">
            {/* Top Wide Banner: Facial Cosmetic Acupuncture Diagram */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 text-center">
              <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl">
                <img
                  src={GALLERY_ITEMS[0].imageUrl}
                  alt={GALLERY_ITEMS[0].title}
                  className="w-full h-auto object-contain mx-auto transition-transform hover:scale-[1.01]"
                />
              </div>
              <div className="mt-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold font-serif-baskerville text-gray-900">
                  {language === 'ko'
                    ? '다나한방 성형침 부위별 시술 안내'
                    : GALLERY_ITEMS[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {language === 'ko'
                    ? '미간주름, 한방코성형, 팔자주름, 얼굴리프팅, 눈리프팅, 눈밑주름, 목주름, 처진턱밑'
                    : GALLERY_ITEMS[0].subtitle}
                </p>
              </div>
            </div>

            {/* Bottom 3-Card Vertical Showcase matching the original */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1: doTERRA Deep Blue */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group">
                <div className="h-80 sm:h-96 overflow-hidden bg-neutral-100">
                  <img
                    src={GALLERY_ITEMS[1].imageUrl}
                    alt={GALLERY_ITEMS[1].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-base font-bold text-gray-900">
                    {language === 'ko' ? '도테라 딥블루 & 페퍼민트 오일' : GALLERY_ITEMS[1].title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {language === 'ko' ? '순수 치료 등급 천연 아로마 에센셜 오일' : GALLERY_ITEMS[1].subtitle}
                  </p>
                </div>
              </div>

              {/* Card 2: INDIBA Deep Beauty */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group">
                <div className="h-80 sm:h-96 overflow-hidden bg-neutral-100">
                  <img
                    src={GALLERY_ITEMS[2].imageUrl}
                    alt={GALLERY_ITEMS[2].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-base font-bold text-gray-900">
                    {language === 'ko' ? '인디바 딥뷰티 페이셜 리프팅' : GALLERY_ITEMS[2].title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {language === 'ko' ? '448 kHz 고유 주파수 얼굴 윤곽 및 콜라겐 촉진' : GALLERY_ITEMS[2].subtitle}
                  </p>
                </div>
              </div>

              {/* Card 3: Cupping Therapy */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group">
                <div className="h-80 sm:h-96 overflow-hidden bg-neutral-100">
                  <img
                    src={GALLERY_ITEMS[3].imageUrl}
                    alt={GALLERY_ITEMS[3].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-base font-bold text-gray-900">
                    {language === 'ko' ? '전통 한방 부항 요법 (건부항 & 습부항)' : GALLERY_ITEMS[3].title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {language === 'ko' ? '심부 근막 이완, 어혈 제거 및 미세 혈액순환 활성화' : GALLERY_ITEMS[3].subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="py-16 bg-[#21272e] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-baskerville mb-3">
            {t.servicesPage.ctaTitle}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            {t.servicesPage.ctaSubtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-white text-gray-900 font-semibold text-sm hover:bg-neutral-100 transition-colors shadow-lg cursor-pointer"
            >
              {t.servicesPage.ctaButton}
            </button>
            <a
              href={`tel:${CLINIC_INFO.officePhoneRaw}`}
              className="px-8 py-3.5 rounded-full border border-white/40 hover:border-white text-white font-semibold text-sm transition-colors"
            >
              {t.servicesPage.ctaCall}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
