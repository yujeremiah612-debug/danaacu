import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Phone, Calendar, Globe } from 'lucide-react';
import { CLINIC_INFO } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  onOpenCart,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.header.home, path: '/' },
    { name: t.header.services, path: '/services' },
    { name: t.header.about, path: '/about' },
    { name: t.header.contact, path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      {/* Top micro bar for fast telephone connection & hours */}
      <div className="bg-[#1f2824] text-white/90 text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center tracking-wide">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-emerald-300 font-medium">
            {t.header.location}
          </span>
          <a
            href={`tel:${CLINIC_INFO.officePhoneRaw}`}
            className="hover:text-emerald-300 flex items-center gap-1 transition-colors font-medium"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>{t.header.office}: {CLINIC_INFO.officePhone}</span>
          </a>
          <a
            href={`tel:${CLINIC_INFO.cellPhoneRaw}`}
            className="hidden md:flex items-center gap-1 hover:text-emerald-300 transition-colors"
          >
            <span>{t.header.cell}: {CLINIC_INFO.cellPhone}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline text-gray-300">{t.header.hours}</span>

          {/* Language Switcher in top bar */}
          <button
            onClick={toggleLanguage}
            aria-label={t.header.langLabel}
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full border border-white/20 transition-all cursor-pointer"
          >
            <Globe className="w-3 h-3 text-emerald-300" />
            <span>{t.header.langToggle}</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="bg-emerald-700 hover:bg-emerald-600 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Calendar className="w-3 h-3" />
            <span>{t.header.bookConsultation}</span>
          </button>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="Dana Han Bang Homepage">
          <img
            src={CLINIC_INFO.logoUrl}
            alt="Dana Han Bang (다나 한의원) logo"
            className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] font-medium tracking-wide transition-all relative py-1 ${
                  active
                    ? 'text-[#21272e] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#21272e]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Main Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            title={t.header.langLabel}
            aria-label={t.header.langLabel}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-gray-800 transition-colors border border-gray-200 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === 'en' ? '한국어' : 'English'}</span>
          </button>

          {/* Cart / Inquiry Drawer button */}
          <button
            onClick={onOpenCart}
            aria-label={t.header.goToCart}
            className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative cursor-pointer"
          >
            <ShoppingBag className="w-6 h-6 stroke-[1.6]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#21272e] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t.header.closeMenu : t.header.openMenu}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation slide-down menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-5 shadow-lg animate-fadeIn">
          {/* Mobile Language Switcher Row */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100">
            <span className="text-xs text-gray-500 font-medium">Language / 언어</span>
            <button
              onClick={() => {
                toggleLanguage();
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? '한국어로 보기' : 'View in English'}</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base py-2 border-b border-gray-100 flex items-center justify-between ${
                    active ? 'text-[#21272e] font-bold' : 'text-gray-700'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#21272e]" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-3 border-t border-gray-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#21272e] text-white text-sm font-medium rounded-full text-center hover:bg-black transition-colors"
            >
              {t.header.bookConsultation}
            </button>
            <div className="text-center text-xs text-gray-500 pt-1 space-y-1">
              <p>{t.header.office}: <a href={`tel:${CLINIC_INFO.officePhoneRaw}`} className="text-gray-900 font-semibold">{CLINIC_INFO.officePhone}</a></p>
              <p>{t.header.cell}: <a href={`tel:${CLINIC_INFO.cellPhoneRaw}`} className="text-gray-900 font-semibold">{CLINIC_INFO.cellPhone}</a></p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
