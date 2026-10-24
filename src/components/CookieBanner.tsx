import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('dana_cookie_consent');
    if (!consent) {
      // Show after short delay like original
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (status: string) => {
    localStorage.setItem('dana_cookie_consent', status);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm w-full bg-white rounded-2xl shadow-2xl border border-gray-200/80 p-6 animate-fadeIn transition-all">
      <h4 className="text-base font-bold text-gray-900 mb-2">{t.cookie.title}</h4>
      <p className="text-xs text-gray-600 mb-6 leading-relaxed">
        {t.cookie.text}
      </p>

      <div className="flex flex-col space-y-2.5">
        <button
          onClick={() => handleAction('accepted')}
          className="w-full py-2.5 px-4 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
        >
          {t.cookie.acceptAll}
        </button>
        <button
          onClick={() => handleAction('rejected')}
          className="w-full py-2.5 px-4 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
        >
          {t.cookie.rejectAll}
        </button>
        <button
          onClick={() => handleAction('preferences')}
          className="w-full py-2.5 px-4 rounded-full bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-200 text-xs font-semibold tracking-wide transition-colors cursor-pointer"
        >
          {t.cookie.preferences}
        </button>
      </div>
    </div>
  );
};
