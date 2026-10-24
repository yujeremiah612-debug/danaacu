import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateInquiryForm,
  formatPhoneNumber,
  calculateConsultationSummary,
  filterServicesByCategory,
  ServiceItem,
} from './appointmentPlanner.ts';

const mockServices: ServiceItem[] = [
  {
    id: 'acu-1',
    name: 'Acupuncture Treatments',
    koreanName: '침 치료',
    category: 'acupuncture',
    shortDesc: 'Relief from pain',
    fullDesc: 'Full desc',
    benefits: ['Pain relief'],
    imageUrl: 'https://example.com/acu.jpg',
    durationMinutes: 60,
  },
  {
    id: 'rf-1',
    name: 'High frequency unit (INDIBA)',
    koreanName: '인디바 심부 열 치료',
    category: 'rf_indiba',
    shortDesc: 'Deep beauty & pain',
    fullDesc: 'Full desc',
    benefits: ['Cell regeneration'],
    imageUrl: 'https://example.com/indiba.jpg',
    durationMinutes: 45,
  },
  {
    id: 'herb-1',
    name: 'Oriental Medicine',
    koreanName: '한방 한약 처방',
    category: 'herbal',
    shortDesc: 'Herbal remedies',
    fullDesc: 'Full desc',
    benefits: ['Holistic wellness'],
    imageUrl: 'https://example.com/herb.jpg',
    durationMinutes: 30,
  },
];

test('validateInquiryForm detects missing or invalid fields', () => {
  const emptyRes = validateInquiryForm({});
  assert.equal(emptyRes.isValid, false);
  assert.ok(emptyRes.errors.name);
  assert.ok(emptyRes.errors.email);

  const invalidEmailRes = validateInquiryForm({
    name: 'Jane Doe',
    email: 'notanemail',
  });
  assert.equal(invalidEmailRes.isValid, false);
  assert.equal(invalidEmailRes.errors.email, 'Please enter a valid email address');

  const validRes = validateInquiryForm({
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '4692070345',
    message: 'I want to inquire about acupuncture',
  });
  assert.equal(validRes.isValid, true);
  assert.deepEqual(validRes.errors, {});
});

test('formatPhoneNumber formats 10-digit numbers', () => {
  assert.equal(formatPhoneNumber('4692070345'), '(469) 207 - 0345');
  assert.equal(formatPhoneNumber('2012138555'), '(201) 213 - 8555');
  assert.equal(formatPhoneNumber('123'), '123');
});

test('calculateConsultationSummary computes correct counts and totals', () => {
  const summary = calculateConsultationSummary(['acu-1', 'rf-1'], mockServices);
  assert.equal(summary.count, 2);
  assert.equal(summary.totalEstimatedMinutes, 105);
  assert.deepEqual(summary.serviceNames, [
    'Acupuncture Treatments',
    'High frequency unit (INDIBA)',
  ]);
});

test('filterServicesByCategory filters appropriately', () => {
  const acuOnly = filterServicesByCategory(mockServices, 'acupuncture');
  assert.equal(acuOnly.length, 1);
  assert.equal(acuOnly[0].id, 'acu-1');

  const all = filterServicesByCategory(mockServices, 'all');
  assert.equal(all.length, 3);
});

test('translations dictionary contains all required keys for en and ko', async () => {
  const { TRANSLATIONS } = await import('../data/translations.ts');
  assert.ok(TRANSLATIONS.en);
  assert.ok(TRANSLATIONS.ko);
  assert.equal(TRANSLATIONS.ko.header.services, '진료 과목');
  assert.equal(TRANSLATIONS.ko.header.langToggle, 'ENG');
  assert.equal(TRANSLATIONS.en.header.langToggle, '한국어');
  assert.ok(TRANSLATIONS.ko.servicesPage.heroTitle.includes('침 치료'));
  assert.ok(TRANSLATIONS.ko.drawer.submitBtn.includes('신청'));
});

