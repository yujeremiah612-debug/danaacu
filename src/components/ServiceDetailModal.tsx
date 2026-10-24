import React from 'react';
import { X, CheckCircle2, Clock, Calendar, Sparkles } from 'lucide-react';
import { ServiceItem } from '../utils/appointmentPlanner';
import { useLanguage } from '../context/LanguageContext';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForConsultation: (serviceId: string) => void;
  isAlreadySelected: boolean;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForConsultation,
  isAlreadySelected,
}) => {
  const { language, t } = useLanguage();

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 border border-gray-100 max-h-[90vh] flex flex-col">
        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-72 w-full bg-stone-900 shrink-0">
          <img
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white">
            {service.highlight && (
              <span className="inline-block bg-emerald-600/90 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-2 uppercase tracking-wider">
                {service.highlight}
              </span>
            )}
            <h3 className="text-2xl font-bold font-serif-baskerville leading-tight">
              {language === 'ko' ? service.koreanName : service.name}
            </h3>
            <p className="text-sm text-emerald-200 font-medium mt-0.5">
              {language === 'ko' ? service.name : service.koreanName}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex items-center gap-4 text-xs text-gray-500 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-1.5 font-medium text-gray-800">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>{t.modal.sessionTime} ~{service.durationMinutes} min</span>
            </div>
            <span>•</span>
            <span className="text-emerald-700 font-medium">{t.modal.welcomeMsg}</span>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
              {t.modal.treatmentOverview}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              {service.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{t.modal.benefitsHeading}</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-gray-700 bg-stone-50 p-3 rounded-lg border border-stone-200/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
              <p className="font-semibold text-gray-800">{t.modal.insuranceAccepted}</p>
              <p>{t.modal.insurancePlans}</p>
            </div>

            <button
              onClick={() => {
                onSelectForConsultation(service.id);
                onClose();
              }}
              className={`w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                isAlreadySelected
                  ? 'bg-emerald-800 text-white hover:bg-emerald-900'
                  : 'bg-[#21272e] text-white hover:bg-black'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>
                {isAlreadySelected ? t.modal.inBag : t.modal.addToConsultation}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
