import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/siteData';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage(t.footer.errorMsg);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMessage(t.footer.errorMsg);
      return;
    }

    setStatus('success');
    setEmail('');
    setTimeout(() => {
      setStatus('idle');
    }, 6000);
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12 text-[#0d141a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12">
          {/* Column 1: Logo & copyright */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <img
                src={CLINIC_INFO.logoUrl}
                alt="Dana Han Bang (다나 한의원) logo"
                className="h-14 sm:h-16 w-auto object-contain mb-6"
              />
              <p className="text-gray-600 text-sm max-w-sm leading-relaxed mb-4">
                {t.footer.tagline}
              </p>
              <div className="inline-block bg-emerald-50 text-emerald-800 text-xs px-3 py-1.5 rounded-md font-medium border border-emerald-100">
                {t.footer.servingTag}
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-8 pt-4">
              {t.footer.rights}
            </p>
          </div>

          {/* Column 2: Services & Contact Info */}
          <div className="md:col-span-3">
            <h6 className="text-xs font-bold uppercase tracking-wider text-[#0d141a] mb-5">
              {t.footer.servicesCol}
            </h6>
            <div className="space-y-3 font-serif-baskerville text-[15px]">
              <div>
                <span className="font-bold">Office. </span>
                <a
                  href={`tel:${CLINIC_INFO.officePhoneRaw}`}
                  className="hover:text-emerald-700 transition-colors font-bold"
                >
                  {CLINIC_INFO.officePhone}
                </a>
              </div>
              <div>
                <span className="font-bold">Cell. </span>
                <a
                  href={`tel:${CLINIC_INFO.cellPhoneRaw}`}
                  className="hover:text-emerald-700 transition-colors font-semibold ml-2"
                >
                  {CLINIC_INFO.cellPhone}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-2 space-y-1 text-sm text-gray-700">
              <p className="font-semibold text-xs uppercase tracking-wider text-gray-500 mb-1">
                Email
              </p>
              <p>
                <a
                  href={`mailto:${CLINIC_INFO.emailOffice}`}
                  className="hover:text-emerald-700 hover:underline transition-colors"
                >
                  {CLINIC_INFO.emailOffice}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CLINIC_INFO.emailAlt}`}
                  className="hover:text-emerald-700 hover:underline transition-colors"
                >
                  {CLINIC_INFO.emailAlt}
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Contact Inquiry Newsletter Form */}
          <div className="md:col-span-4">
            <h6 className="text-xs font-bold uppercase tracking-wider text-[#0d141a] mb-5">
              {t.footer.contactCol}
            </h6>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="footer-email"
                  className="block text-xs text-gray-500 mb-2 font-medium"
                >
                  {t.footer.emailLabel}
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder={t.footer.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#21272e] focus:border-transparent transition-all placeholder:text-gray-400"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-100">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{t.footer.successMsg}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#21272e] text-white text-sm font-medium hover:bg-black hover:shadow-md transition-all cursor-pointer"
              >
                {t.footer.submitBtn}
              </button>
            </form>
          </div>
        </div>

        {/* Address and insurance disclaimer row */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            {t.footer.footerDisclaimer}
          </p>
          <div className="flex items-center gap-3">
            <span>{t.footer.insuranceList}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
