export interface ServiceItem {
  id: string;
  name: string;
  koreanName: string;
  category: 'acupuncture' | 'rf_indiba' | 'herbal' | 'cosmetic' | 'wellness';
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  imageUrl: string;
  durationMinutes: number;
  highlight?: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone?: string;
  serviceId?: string;
  preferredDate?: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateInquiryForm(data: Partial<InquiryFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Please enter your name';
  }

  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'Please enter your email address';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
  }

  if (data.phone && data.phone.trim().length > 0) {
    const digitsOnly = data.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} - ${digits.slice(6)}`;
  }
  return phone;
}

export function calculateConsultationSummary(
  selectedServiceIds: string[],
  servicesList: ServiceItem[]
): { count: number; totalEstimatedMinutes: number; serviceNames: string[] } {
  const selected = servicesList.filter((s) => selectedServiceIds.includes(s.id));
  return {
    count: selected.length,
    totalEstimatedMinutes: selected.reduce((acc, curr) => acc + curr.durationMinutes, 0),
    serviceNames: selected.map((s) => s.name),
  };
}

export function filterServicesByCategory(
  servicesList: ServiceItem[],
  category: string
): ServiceItem[] {
  if (!category || category === 'all') return servicesList;
  return servicesList.filter((s) => s.category === category);
}
