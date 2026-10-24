import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, Trash2, Clock, Sparkles } from 'lucide-react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/siteData';
import { validateInquiryForm } from '../utils/appointmentPlanner';
import { useLanguage } from '../context/LanguageContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServices: string[];
  onRemoveService: (id: string) => void;
  onClearCart: () => void;
  onAddService: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  selectedServices,
  onRemoveService,
  onClearCart,
  onAddService,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('morning');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const currentItems = SERVICES_LIST.filter((s) => selectedServices.includes(s.id));
  const totalMinutes = currentItems.reduce((acc, curr) => acc + curr.durationMinutes, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm({ name, email, phone, message });
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setSubmitted(true);
    // save to localStorage
    const savedInquiries = JSON.parse(localStorage.getItem('dana_inquiries') || '[]');
    savedInquiries.push({
      date: new Date().toISOString(),
      name,
      email,
      phone,
      preferredDate,
      preferredTime,
      services: currentItems.map((s) => s.name),
      message,
    });
    localStorage.setItem('dana_inquiries', JSON.stringify(savedInquiries));
  };

  const handleReset = () => {
    setSubmitted(false);
    onClearCart();
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-stone-50">
            <div>
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>{t.drawer.title}</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                {t.drawer.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-200/50 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t.drawer.successTitle}
                </h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  {language === 'ko' ? (
                    <>
                      <span className="font-semibold text-gray-900">{name}</span>님, 신청해 주셔서 대단히 감사합니다. {t.drawer.successDesc}
                    </>
                  ) : (
                    <>
                      Thank you, <span className="font-semibold text-gray-900">{name}</span>. {t.drawer.successDesc}
                    </>
                  )}
                </p>

                <div className="bg-emerald-50 p-4 rounded-xl text-left border border-emerald-100 text-xs space-y-2 mt-4">
                  <p className="font-semibold text-emerald-900">{t.drawer.immediateTitle}</p>
                  <p className="text-emerald-800">
                    {t.drawer.immediateDesc}
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <a
                      href={`tel:${CLINIC_INFO.officePhoneRaw}`}
                      className="inline-flex items-center gap-2 font-bold text-sm text-emerald-950 hover:underline"
                    >
                      <Phone className="w-4 h-4 text-emerald-700" />
                      <span>Office: {CLINIC_INFO.officePhone}</span>
                    </a>
                    <a
                      href={`tel:${CLINIC_INFO.cellPhoneRaw}`}
                      className="inline-flex items-center gap-2 font-bold text-sm text-emerald-950 hover:underline"
                    >
                      <Phone className="w-4 h-4 text-emerald-700" />
                      <span>Cell: {CLINIC_INFO.cellPhone}</span>
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-6 w-full py-3 bg-[#21272e] text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
                >
                  {t.drawer.doneBtn}
                </button>
              </div>
            ) : (
              <>
                {/* Selected Treatments */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t.drawer.selectedBadge} ({currentItems.length})
                    </span>
                    {currentItems.length > 0 && (
                      <button
                        onClick={onClearCart}
                        className="text-xs text-red-600 hover:underline"
                      >
                        {t.drawer.clearAll}
                      </button>
                    )}
                  </div>

                  {currentItems.length === 0 ? (
                    <div className="border border-dashed border-gray-200 rounded-xl p-5 text-center text-sm text-gray-500 bg-gray-50/50">
                      <p className="font-medium text-gray-700">{t.drawer.emptyTitle}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {t.drawer.emptyText}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        {SERVICES_LIST.slice(0, 3).map((item) => (
                          <button
                            key={item.id}
                            onClick={() => onAddService(item.id)}
                            className="text-xs bg-white border border-gray-300 hover:border-gray-800 text-gray-700 px-2.5 py-1.5 rounded-lg transition-colors"
                          >
                            + {language === 'ko' ? item.koreanName.split(' ')[0] : item.name.split(' ')[0]}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {currentItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-100"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              className="w-12 h-12 rounded-lg object-cover shrink-0"
                            />
                            <div>
                              <p className="text-sm font-semibold text-gray-900 leading-tight">
                                {language === 'ko' ? item.koreanName : item.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {language === 'ko' ? item.name : item.koreanName}
                              </p>
                              <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-1">
                                <Clock className="w-3 h-3 text-emerald-600" />
                                <span>~{item.durationMinutes} mins</span>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => onRemoveService(item.id)}
                            className="text-gray-400 hover:text-red-600 p-1.5 transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}

                      <div className="bg-emerald-50/70 p-3 rounded-lg flex items-center justify-between text-xs text-emerald-900 border border-emerald-100">
                        <span>{t.drawer.sessionEstimate}</span>
                        <span className="font-bold">~{totalMinutes} minutes</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Appointment Inquiry Form */}
                <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    {t.drawer.infoHeading}
                  </h3>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      {t.drawer.fullName}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Sarah Kim"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21272e] focus:outline-none"
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        {t.drawer.email}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="you@email.com"
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21272e] focus:outline-none"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        {t.drawer.phone}
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="(469) 000-0000"
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21272e] focus:outline-none"
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        {t.drawer.prefDate}
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21272e] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        {t.drawer.prefTime}
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21272e] focus:outline-none bg-white"
                      >
                        <option value="morning">{t.drawer.timeMorning}</option>
                        <option value="afternoon">{t.drawer.timeAfternoon}</option>
                        <option value="evening">{t.drawer.timeEvening}</option>
                        <option value="saturday">{t.drawer.timeSaturday}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      {t.drawer.notesLabel}
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.drawer.notesPlaceholder}
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21272e] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#21272e] hover:bg-black text-white text-sm font-semibold shadow-md transition-all cursor-pointer"
                  >
                    {t.drawer.submitBtn}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
