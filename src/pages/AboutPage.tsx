import React, { useState } from 'react';
import { CLINIC_INFO, DOCTOR_CREDENTIALS, VIDEO_SHOWCASE } from '../data/siteData';
import { MapPin, Award, Play, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section: Mint Green matching original */}
      <section className="bg-[#ddf2e4] pt-20 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-4 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold font-serif-baskerville text-[#9b6336]">
                {t.aboutPage.title}
              </h1>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl sm:text-2xl font-normal font-serif-baskerville text-[#1f2824] leading-relaxed">
                {t.aboutPage.subtitle}
              </p>
            </div>
          </div>

          {/* Practitioner Profile Banner */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <div className="relative">
              <img
                src={CLINIC_INFO.doctorProfileImage}
                alt="한의학박사 Dana Chun (다나 전) Ph.D in Oriental Medicine"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Doctor Credentials Breakdown */}
            <div className="p-6 sm:p-10 bg-stone-50 border-t border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-700" />
                <span>{t.aboutPage.credentialsTitle}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {DOCTOR_CREDENTIALS.map((cred, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Videos Section */}
      <section className="py-20 lg:py-28 bg-[#f5fbf7] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-baskerville text-[#1f2824] leading-snug">
              {t.aboutPage.videoSectionTitle}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              {t.aboutPage.videoSectionSubtitle}
            </p>
          </div>

          {/* 3-Column Media Showcase matching original */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Video 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
              <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
                {activeVideo === VIDEO_SHOWCASE[0].id ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${VIDEO_SHOWCASE[0].id}?autoplay=1`}
                    title={VIDEO_SHOWCASE[0].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={VIDEO_SHOWCASE[0].thumbnail}
                      alt={VIDEO_SHOWCASE[0].title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={() => setActiveVideo(VIDEO_SHOWCASE[0].id)}
                      className="absolute w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 cursor-pointer"
                      aria-label="Play Video 1"
                    >
                      <Play className="w-7 h-7 fill-white ml-0.5" />
                    </button>
                  </>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm line-clamp-2">
                    {language === 'ko' ? t.aboutPage.video1Title : VIDEO_SHOWCASE[0].title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">DK NET Dallas Broadcast</p>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${VIDEO_SHOWCASE[0].id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-xs font-semibold text-red-600 flex items-center gap-1 hover:underline"
                >
                  {t.aboutPage.watchYoutube} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* University Diploma Document */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
              <div className="relative aspect-video bg-neutral-100 flex items-center justify-center p-2">
                <img
                  src={CLINIC_INFO.diplomaImage}
                  alt="Southern California University of SOMA Diploma"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {t.aboutPage.diplomaTitle}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    {t.aboutPage.diplomaDesc}
                  </p>
                </div>
                <span className="mt-3 text-xs font-semibold text-emerald-800 flex items-center gap-1">
                  {t.aboutPage.diplomaVerified}
                </span>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
              <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
                {activeVideo === VIDEO_SHOWCASE[1].id ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${VIDEO_SHOWCASE[1].id}?autoplay=1`}
                    title={VIDEO_SHOWCASE[1].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={VIDEO_SHOWCASE[1].thumbnail}
                      alt={VIDEO_SHOWCASE[1].title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={() => setActiveVideo(VIDEO_SHOWCASE[1].id)}
                      className="absolute w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 cursor-pointer"
                      aria-label="Play Video 2"
                    >
                      <Play className="w-7 h-7 fill-white ml-0.5" />
                    </button>
                  </>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm line-clamp-2">
                    {language === 'ko' ? t.aboutPage.video2Title : VIDEO_SHOWCASE[1].title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">DK NET Dallas Broadcast</p>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${VIDEO_SHOWCASE[1].id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-xs font-semibold text-red-600 flex items-center gap-1 hover:underline"
                >
                  {t.aboutPage.watchYoutube} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location Section matching original layout with building background and map */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${CLINIC_INFO.locationBgImage}')` }}
        >
          <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-6xl font-bold font-serif-baskerville text-white mb-8">
            {t.aboutPage.locationTitle}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Info boxes */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-lg">
                <p className="text-xl sm:text-2xl font-serif-baskerville text-gray-900 leading-snug">
                  {t.aboutPage.locationCardTitle}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl max-w-lg space-y-3 font-serif-baskerville">
                <div className="text-xl sm:text-2xl text-gray-900">
                  <span className="font-bold">Office. </span>
                  <a
                    href={`tel:${CLINIC_INFO.officePhoneRaw}`}
                    className="hover:text-emerald-700 transition-colors font-bold"
                  >
                    {CLINIC_INFO.officePhone}
                  </a>
                </div>
                <div className="text-xl sm:text-2xl text-gray-900">
                  <span className="font-bold">Cell. </span>
                  <a
                    href={`tel:${CLINIC_INFO.cellPhoneRaw}`}
                    className="hover:text-emerald-700 transition-colors font-bold ml-2"
                  >
                    {CLINIC_INFO.cellPhone}
                  </a>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-xl max-w-lg flex items-center justify-between text-gray-900">
                <div>
                  <p className="font-bold text-sm sm:text-base">{CLINIC_INFO.address}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{CLINIC_INFO.cityStateZip}</p>
                </div>
                <a
                  href={CLINIC_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#21272e] text-white text-xs font-semibold rounded-full hover:bg-black transition-colors flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{t.aboutPage.directionsButton}</span>
                </a>
              </div>
            </div>

            {/* Google Map Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-4 shadow-2xl overflow-hidden border border-gray-100">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">3712 Old Denton Rd #140</h4>
                    <p className="text-xs text-gray-500">Carrollton, TX 75007, USA</p>
                  </div>
                  <a
                    href={CLINIC_INFO.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{t.aboutPage.openMaps}</span>
                  </a>
                </div>

                <div className="h-80 sm:h-96 w-full rounded-2xl overflow-hidden mt-3">
                  <iframe
                    src={CLINIC_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dana Han Bang Location Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 bg-white text-center border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-bold font-serif-baskerville text-gray-900 mb-3">
            {t.aboutPage.scheduleHeading}
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            {t.aboutPage.scheduleText}
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full bg-[#21272e] text-white text-sm font-semibold hover:bg-black transition-colors shadow-lg cursor-pointer"
          >
            {t.aboutPage.scheduleBtn}
          </button>
        </div>
      </section>
    </div>
  );
};
