import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/siteData';
import { Phone, Mail, Clock, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { validateInquiryForm } from '../utils/appointmentPlanner';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm({
      name: firstName,
      email,
      phone,
      message,
    });

    if (!validation.isValid) {
      setStatus('error');
      const firstErr = Object.values(validation.errors)[0];
      setErrorMessage(firstErr || 'Please check all required fields.');
      return;
    }

    if (!message.trim()) {
      setStatus('error');
      setErrorMessage(t.contactPage.messagePlaceholder);
      return;
    }

    // Save inquiry to localStorage
    const savedInquiries = JSON.parse(localStorage.getItem('dana_inquiries') || '[]');
    savedInquiries.push({
      date: new Date().toISOString(),
      name: firstName,
      email,
      phone,
      message,
      source: 'contact_page',
    });
    localStorage.setItem('dana_inquiries', JSON.stringify(savedInquiries));

    setStatus('success');
    setFirstName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header & Intro Form Section */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Intro */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-baskerville text-[#111827] tracking-tight">
              {t.contactPage.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-md">
              {t.contactPage.subtitle}
            </p>

            <div className="pt-6 space-y-4 border-t border-gray-100">
              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    {t.contactPage.phoneLabel}
                  </h4>
                  <p className="text-sm font-semibold text-gray-900 mt-0.5">
                    Office: <a href={`tel:${CLINIC_INFO.officePhoneRaw}`} className="hover:text-emerald-700 underline">{CLINIC_INFO.officePhone}</a>
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    Cell: <a href={`tel:${CLINIC_INFO.cellPhoneRaw}`} className="hover:text-emerald-700 underline">{CLINIC_INFO.cellPhone}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    {t.contactPage.emailLabel}
                  </h4>
                  <p className="text-sm text-gray-900 mt-0.5">
                    <a href={`mailto:${CLINIC_INFO.emailOffice}`} className="hover:text-emerald-700 underline">
                      {CLINIC_INFO.emailOffice}
                    </a>
                  </p>
                  <p className="text-sm text-gray-900">
                    <a href={`mailto:${CLINIC_INFO.emailAlt}`} className="hover:text-emerald-700 underline">
                      {CLINIC_INFO.emailAlt}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    {t.contactPage.hoursLabel}
                  </h4>
                  {CLINIC_INFO.hours.map((h, i) => (
                    <p key={i} className="text-xs text-gray-700">
                      <span className="font-medium text-gray-900">{h.days}:</span> {h.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-first-name"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  {t.contactPage.nameLabel}
                </label>
                <input
                  id="contact-first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder={t.contactPage.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#21272e] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  {t.contactPage.emailFormLabel}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder={t.contactPage.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#21272e] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  {t.contactPage.phoneFormLabel}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder={t.contactPage.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#21272e] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  {t.contactPage.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder={t.contactPage.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#21272e] focus:border-transparent transition-all"
                  required
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 p-3 rounded-xl border border-red-100">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                  <span>{t.contactPage.successMessage}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#21272e] hover:bg-black text-white text-sm font-semibold shadow-md transition-all cursor-pointer"
              >
                {t.contactPage.submitButton}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Authentic Clinic Photo Section */}
      <section className="py-12 bg-stone-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="max-h-[600px] overflow-hidden">
              <img
                src={CLINIC_INFO.clinicConsultationImage}
                alt="Dana Han Bang Consultation and Treatment Room"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 sm:p-8 bg-white flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-lg font-bold font-serif-baskerville text-gray-900">
                  {t.contactPage.clinicPhotoTitle}
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  {t.contactPage.clinicPhotoDesc}
                </p>
              </div>
              <a
                href={`tel:${CLINIC_INFO.officePhoneRaw}`}
                className="px-6 py-2.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold shrink-0 transition-colors"
              >
                {t.contactPage.callOfficeNow}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location Map Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-baskerville text-gray-900">
            {t.contactPage.locationHeading}
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            {t.contactPage.locationSub}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-stone-50">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-md">
                  Carrollton Office
                </span>
                <h3 className="text-xl font-bold font-serif-baskerville text-gray-900 mt-3">
                  {CLINIC_INFO.address}
                </h3>
                <p className="text-sm text-gray-600">{CLINIC_INFO.cityStateZip}</p>
              </div>

              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-semibold text-gray-900">Office:</span> {CLINIC_INFO.officePhone}</p>
                <p><span className="font-semibold text-gray-900">Cell:</span> {CLINIC_INFO.cellPhone}</p>
                <p><span className="font-semibold text-gray-900">Email:</span> {CLINIC_INFO.emailOffice}</p>
              </div>

              <div className="text-xs text-gray-500 pt-2 border-t border-gray-200">
                {t.contactPage.parkingNotice}
              </div>
            </div>

            <div className="pt-8">
              <a
                href={CLINIC_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#21272e] hover:bg-black text-white text-xs font-semibold rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t.contactPage.getDirections}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-96 lg:h-auto min-h-[400px]">
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
      </section>
    </div>
  );
};
