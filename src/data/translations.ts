export type Language = 'en' | 'ko';

export interface Translations {
  header: {
    location: string;
    office: string;
    cell: string;
    hours: string;
    bookConsultation: string;
    home: string;
    services: string;
    about: string;
    contact: string;
    goToCart: string;
    closeMenu: string;
    openMenu: string;
    langToggle: string;
    langLabel: string;
  };
  servicesPage: {
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    scheduleButton: string;
    callButton: string;
    insuranceAetna: string;
    insuranceBcbs: string;
    insuranceCigna: string;
    coreBadgeAcu: string;
    coreBadgeIndiba: string;
    coreBadgeHerb: string;
    learnDetails: string;
    addRequest: string;
    addedToBag: string;
    indibaNote: string;
    catalogBadge: string;
    catalogTitle: string;
    catalogSubtitle: string;
    filterAll: string;
    filterAcu: string;
    filterIndiba: string;
    filterCosmetic: string;
    filterHerbal: string;
    filterWellness: string;
    viewDetails: string;
    galleryTitle: string;
    gallerySubtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    ctaCall: string;
  };
  homePage: {
    heroTitle: string;
    heroSubtitle: string;
    explore: string;
    tecarBadge: string;
    tecarDesc: string;
    beautyBadge: string;
    beautyDesc: string;
    cardIndibaTitle: string;
    cardIndibaSub: string;
    cardIndibaDesc: string;
    cardIndibaLink: string;
    cardCosmeticTitle: string;
    cardCosmeticSub: string;
    cardCosmeticDesc: string;
    cardCosmeticBadge: string;
    cardCosmeticLink: string;
    incontinenceTitle: string;
    hearingTitle: string;
    specializedDesc: string;
    aboutBadge: string;
    aboutTitle: string;
    aboutLocation: string;
    aboutText: string;
    popularBadge: string;
    popularTitle: string;
    popularLink: string;
    insuranceTitle: string;
    insuranceDesc: string;
    doctorTitle: string;
    doctorDesc: string;
    locationTitle: string;
    locationDesc: string;
  };
  aboutPage: {
    title: string;
    subtitle: string;
    credentialsTitle: string;
    videoSectionTitle: string;
    videoSectionSubtitle: string;
    video1Title: string;
    video2Title: string;
    diplomaTitle: string;
    diplomaDesc: string;
    diplomaVerified: string;
    watchYoutube: string;
    locationTitle: string;
    locationCardTitle: string;
    directionsButton: string;
    openMaps: string;
    scheduleHeading: string;
    scheduleText: string;
    scheduleBtn: string;
  };
  contactPage: {
    title: string;
    subtitle: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFormLabel: string;
    emailPlaceholder: string;
    phoneFormLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    successMessage: string;
    clinicPhotoTitle: string;
    clinicPhotoDesc: string;
    callOfficeNow: string;
    locationHeading: string;
    locationSub: string;
    parkingNotice: string;
    getDirections: string;
  };
  drawer: {
    title: string;
    subtitle: string;
    selectedBadge: string;
    clearAll: string;
    emptyTitle: string;
    emptyText: string;
    sessionEstimate: string;
    infoHeading: string;
    fullName: string;
    email: string;
    phone: string;
    prefDate: string;
    prefTime: string;
    timeMorning: string;
    timeAfternoon: string;
    timeEvening: string;
    timeSaturday: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    immediateTitle: string;
    immediateDesc: string;
    doneBtn: string;
  };
  modal: {
    sessionTime: string;
    welcomeMsg: string;
    treatmentOverview: string;
    benefitsHeading: string;
    insuranceAccepted: string;
    insurancePlans: string;
    inBag: string;
    addToConsultation: string;
  };
  cookie: {
    title: string;
    text: string;
    acceptAll: string;
    rejectAll: string;
    preferences: string;
  };
  footer: {
    tagline: string;
    servingTag: string;
    rights: string;
    servicesCol: string;
    contactCol: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitBtn: string;
    errorMsg: string;
    successMsg: string;
    footerDisclaimer: string;
    insuranceList: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    header: {
      location: 'Dallas & Carrollton, TX',
      office: 'Office',
      cell: 'Cell',
      hours: 'Mon–Fri: 9am–6pm | Sat: 9am–2pm',
      bookConsultation: 'Book Consultation',
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      goToCart: 'Go to cart',
      closeMenu: 'Close menu',
      openMenu: 'Open menu',
      langToggle: '한국어',
      langLabel: 'Switch to Korean',
    },
    servicesPage: {
      badge: 'Integrative Pain Management & Natural Aesthetics',
      heroTitle: 'Acupuncture and Oriental medicine',
      heroSubtitle: 'Offering affordable acupuncture and holistic treatments for all economic classes and cultural backgrounds since 2000.',
      scheduleButton: 'Schedule Consultation',
      callButton: 'Call (469) 207 - 0345',
      insuranceAetna: 'Aetna Certified',
      insuranceBcbs: 'BCBS TX (Blue Cross Blue Shield)',
      insuranceCigna: 'Cigna & Private Pay',
      coreBadgeAcu: 'Core Holistic Therapy',
      coreBadgeIndiba: 'Patented 448 kHz TECAR Technology',
      coreBadgeHerb: 'Custom Herbal Remedies',
      learnDetails: 'Learn treatment details',
      addRequest: 'Add to Request',
      addedToBag: 'Added to Bag',
      indibaNote: 'Utilizing clinically proven 448 kHz radiofrequency monopolar energy to stimulate cellular repair, relieve deep muscle stiffness, and revitalize skin tone.',
      catalogBadge: 'Personalized Holistic Healthcare',
      catalogTitle: 'All Clinical Services & Specializations',
      catalogSubtitle: 'From severe chronic pain relief to non-invasive facial rejuvenation and custom herbal formulations.',
      filterAll: 'All Services',
      filterAcu: 'Acupuncture & Pain',
      filterIndiba: 'INDIBA® RF Therapy',
      filterCosmetic: 'Facial Cosmetic Care',
      filterHerbal: 'Oriental Herbal Medicine',
      filterWellness: 'Aromatherapy & Cupping',
      viewDetails: 'View Details',
      galleryTitle: 'Gallery',
      gallerySubtitle: 'Affordable acupuncture and treatments for all cultural backgrounds.',
      ctaTitle: 'Ready to Begin Your Healing Journey?',
      ctaSubtitle: 'Contact Dr. Dana Chun today for compassionate acupuncture, INDIBA therapy, or customized oriental medicine in Carrollton and Dallas.',
      ctaButton: 'Request Consultation',
      ctaCall: 'Call (469) 207 - 0345',
    },
    homePage: {
      heroTitle: 'Acupuncture and Traditional Medicine has a unique approach to healing',
      heroSubtitle: 'Accessible and affordable acupuncture and holistic treatments, welcoming individuals from all walks of life',
      explore: 'Explore',
      tecarBadge: 'TECAR 448 kHz Rehabilitation',
      tecarDesc: "INDIBA® utilizes a fixed, scientifically proven 448 kHz frequency within a monopolar radiofrequency (RF) system, forming the basis of modern TECAR therapy. As the world's most clinically studied platform, it is the global reference point for effective, radiofrequency-based rehabilitation.",
      beautyBadge: 'Non-Surgical Rejuvenation',
      beautyDesc: 'Our nature-friendly acupuncture therapy preserves your beauty with non-surgical treatments designed to maintain youthful elasticity and radiance.',
      cardIndibaTitle: '몹시 아픈 통증 치료 인디바',
      cardIndibaSub: 'Severe Pain & Musculoskeletal Rehabilitation with INDIBA®',
      cardIndibaDesc: 'Deep RF heat therapy directly targets damaged joints, spasms, frozen shoulder, sciatica, and severe back pain.',
      cardIndibaLink: 'Explore INDIBA Therapy',
      cardCosmeticTitle: '다나한방 성형침',
      cardCosmeticSub: 'Facial Cosmetic Acupuncture & Natural V-Lifting',
      cardCosmeticDesc: 'Natural cosmetic stimulation to lift sagging skin, smooth smile lines (팔자주름), and contour the face without surgery.',
      cardCosmeticBadge: '다나한방 성형침이란?',
      cardCosmeticLink: 'Explore Facial Acupuncture',
      incontinenceTitle: '요실금 클리닉 요실금 치료 (Urinary Incontinence treatment)',
      hearingTitle: '이명 / 난청 치료 (Hearing Disorder treatment)',
      specializedDesc: 'Confidential, dedicated Eastern clinical protocols to restore pelvic floor strength, auditory nerve vitality, and inner balance.',
      aboutBadge: 'About us',
      aboutTitle: 'About us',
      aboutLocation: 'Dallas & Carrollton, TX',
      aboutText: 'Providing exceptional Eastern acupuncture treatments since 2021, we proudly serve the Dallas and Carrollton areas. We accept private insurance plans, including Aetna, BCBS TX, Cigna, and many others!',
      popularBadge: 'Holistic Care',
      popularTitle: 'Popular Treatment Modalities',
      popularLink: 'View all services & pricing inquiry →',
      insuranceTitle: 'Insurance Coverage',
      insuranceDesc: 'We accept private insurance plans including Aetna, BCBS TX, Cigna, and assist with verification of benefits.',
      doctorTitle: 'Doctor of Oriental Medicine',
      doctorDesc: 'Led by Ph.D. Dana Chun, board certified with clinical degrees from Southern California University.',
      locationTitle: 'Convenient Carrollton Location',
      locationDesc: '3712 Old Denton Rd #140. Same-day emergency pain relief appointments available.',
    },
    aboutPage: {
      title: 'About us',
      subtitle: 'Serving holistic wellness and affordable acupuncture treatments since 2021 in Dallas and Carrollton region.',
      credentialsTitle: 'Verified Clinical Credentials & Degrees',
      videoSectionTitle: 'Check our videos for facial acupuncture and alternative treatments',
      videoSectionSubtitle: 'Featured on DK NET Radio & Television broadcasts in the Dallas-Fort Worth metroplex.',
      video1Title: 'DK NET TV: 다나한방 한의원 특강 (Dr. Dana Chun Interview)',
      video2Title: 'DK NET TV: 다나한방 성형침 & 통증 치료 심층 분석',
      diplomaTitle: 'Southern California University SOMA',
      diplomaDesc: 'Master of Science in Oriental Medicine and Acupuncture (Awarded April 11, 2013)',
      diplomaVerified: 'Verified Academic Degree',
      watchYoutube: 'Watch on YouTube',
      locationTitle: 'Our Location',
      locationCardTitle: 'Visit us in the vibrant Dallas and Carrollton area for accessible holistic wellness and acupuncture treatments. Call Us Today!',
      directionsButton: 'Directions',
      openMaps: 'Open in Maps',
      scheduleHeading: 'Schedule with Dr. Dana Chun',
      scheduleText: 'Private insurance accepted. We welcome new and returning patients for comprehensive evaluations.',
      scheduleBtn: 'Book Your Consultation Now',
    },
    contactPage: {
      title: 'Contact Us',
      subtitle: 'Reach out for affordable acupuncture and holistic wellness services in Dallas and Carrollton area.',
      phoneLabel: 'Phone Numbers',
      emailLabel: 'Email Addresses',
      hoursLabel: 'Clinic Hours',
      nameLabel: 'Your First Name',
      namePlaceholder: 'Enter your first name',
      emailFormLabel: 'Your Email Address*',
      emailPlaceholder: 'Enter your email address',
      phoneFormLabel: 'Your Phone Number (Optional)',
      phonePlaceholder: '(469) 207 - 0345',
      messageLabel: 'Your Message*',
      messagePlaceholder: 'Type your message here',
      submitButton: 'Submit Your Inquiry',
      successMessage: 'Thank you! Your message has been sent successfully. We will be in touch with you shortly.',
      clinicPhotoTitle: 'Dana Han Bang (다나 한의원) Carrollton Clinic',
      clinicPhotoDesc: 'Tranquil consultation environment equipped with traditional herbal medicinals and modern electro-stimulation & INDIBA therapy.',
      callOfficeNow: 'Call Office Today',
      locationHeading: 'Our Location',
      locationSub: 'Visit us in the vibrant Dallas and Carrollton area for accessible holistic wellness and acupuncture treatments.',
      parkingNotice: 'Ample patient parking available directly in front of suite #140.',
      getDirections: 'Get Driving Directions on Google Maps',
    },
    drawer: {
      title: 'Consultation & Services Bag',
      subtitle: 'Dana Han Bang (다나 한의원) Appointment Request',
      selectedBadge: 'Selected Treatments',
      clearAll: 'Clear all',
      emptyTitle: 'Your bag is currently empty.',
      emptyText: 'Select treatments from our Services page to customize your session, or fill out the inquiry form below.',
      sessionEstimate: 'Estimated Session Time:',
      infoHeading: 'Your Information & Schedule',
      fullName: 'Full Name *',
      email: 'Email Address *',
      phone: 'Phone Number',
      prefDate: 'Preferred Date',
      prefTime: 'Preferred Time of Day',
      timeMorning: 'Morning (9am - 12pm)',
      timeAfternoon: 'Afternoon (1pm - 4pm)',
      timeEvening: 'Late Afternoon (4pm - 6pm)',
      timeSaturday: 'Saturday Morning (9am - 2pm)',
      notesLabel: 'Symptoms or Notes (Optional)',
      notesPlaceholder: 'e.g. chronic neck pain, insurance coverage inquiry, facial acupuncture...',
      submitBtn: 'Send Consultation Request',
      successTitle: 'Appointment Inquiry Received!',
      successDesc: 'Dr. Dana Chun and our clinic team will review your requested treatments and contact you shortly to confirm your schedule.',
      immediateTitle: 'Need Immediate Assistance?',
      immediateDesc: 'Call our Carrollton clinic directly for same-day openings or urgent pain relief:',
      doneBtn: 'Done',
    },
    modal: {
      sessionTime: 'Standard Session:',
      welcomeMsg: 'All economic & cultural backgrounds welcome',
      treatmentOverview: 'Treatment Overview',
      benefitsHeading: 'Key Clinical Benefits & Indications',
      insuranceAccepted: 'Private Insurance Accepted',
      insurancePlans: 'Aetna, BCBS TX, Cigna & flexible self-pay',
      inBag: 'In Your Bag (View / Schedule)',
      addToConsultation: 'Add to Consultation Request',
    },
    cookie: {
      title: 'We use cookies',
      text: 'This website uses cookies to ensure you get the best experience.',
      acceptAll: 'Accept all',
      rejectAll: 'Reject all',
      preferences: 'Manage preferences',
    },
    footer: {
      tagline: 'Affordable holistic treatments for all backgrounds.',
      servingTag: 'Serving Dallas & Carrollton Since 2021',
      rights: '© 2025. All rights reserved.',
      servicesCol: 'SERVICES',
      contactCol: 'CONTACT',
      emailLabel: 'Enter your email address',
      emailPlaceholder: 'Your email for updates',
      submitBtn: 'Submit your inquiry now',
      errorMsg: 'Please enter a valid email address.',
      successMsg: 'Thank you! Your inquiry has been received. We will contact you shortly.',
      footerDisclaimer: 'Location: 3712 Old Denton Road #140, Carrollton, TX 75007 · Licensed in Texas, New York & New Jersey',
      insuranceList: 'Insurance Accepted: Aetna · BCBS TX · Cigna · Private Plans',
    },
  },
  ko: {
    header: {
      location: '달라스 & 캐롤턴, TX',
      office: '원내 전화',
      cell: '직통 전화',
      hours: '월–금: 오전 9시–오후 6시 | 토: 오전 9시–오후 2시',
      bookConsultation: '진료 예약 상담',
      home: '홈',
      services: '진료 과목',
      about: '원장 소개',
      contact: '오시는 길 / 문의',
      goToCart: '상담 바구니 보기',
      closeMenu: '메뉴 닫기',
      openMenu: '메뉴 열기',
      langToggle: 'ENG',
      langLabel: '영문으로 변경',
    },
    servicesPage: {
      badge: '통합 통증 관리 & 한방 자연 성형 클리닉',
      heroTitle: '침 치료 및 한방 한의학',
      heroSubtitle: '2000년부터 모든 계층과 다양한 문화권의 환자분들을 위한 부담 없고 효과적인 침술 및 한방 전인 치료를 제공합니다.',
      scheduleButton: '진료 상담 예약하기',
      callButton: '전화 문의 (469) 207 - 0345',
      insuranceAetna: 'Aetna 보험 적용',
      insuranceBcbs: 'BCBS TX (텍사스 블루크로스)',
      insuranceCigna: 'Cigna & 일반 진료',
      coreBadgeAcu: '전통 핵심 침구 치료',
      coreBadgeIndiba: '특허받은 448 kHz TECAR 고주파',
      coreBadgeHerb: '체질 맞춤 전통 한약',
      learnDetails: '치료 상세 내용 보기',
      addRequest: '상담 바구니 담기',
      addedToBag: '바구니에 담김',
      indibaNote: '임상적으로 입증된 448 kHz 모노폴라 고주파 에너지를 통해 손상된 세포 재생을 촉진하고, 심부 근육 뭉침 해소 및 피부 탄력을 되살립니다.',
      catalogBadge: '환자 맞춤형 한방 전인 치료',
      catalogTitle: '전체 진료 과목 및 전문 클리닉',
      catalogSubtitle: '만성 난치성 통증 완화부터 비수술 한방 성형침, 사상 체질 맞춤 한약까지 정성을 다합니다.',
      filterAll: '전체 진료',
      filterAcu: '침구 & 통증 치료',
      filterIndiba: '인디바(INDIBA®) 고주파',
      filterCosmetic: '한방 성형침 / 동안 미용',
      filterHerbal: '체질 맞춤 한약',
      filterWellness: '아로마 & 부항 요법',
      viewDetails: '상세 정보 보기',
      galleryTitle: '갤러리 및 시술 안내',
      gallerySubtitle: '모든 분들을 위한 편안하고 부담 없는 한방 전인 치료.',
      ctaTitle: '건강과 젊음을 되찾는 치유의 여정을 시작하세요',
      ctaSubtitle: '달라스와 캐롤턴 지역에서 정성을 다하는 다나 전 한의학박사에게 침술, 인디바 고주파, 맞춤 한약 상담을 받아보세요.',
      ctaButton: '진료 상담 예약',
      ctaCall: '전화 상담 (469) 207 - 0345',
    },
    homePage: {
      heroTitle: '침술과 전통 한의학은 우리 몸 본연의 치유력을 깨웁니다',
      heroSubtitle: '모든 환자분들을 따뜻하게 맞이하는 믿을 수 있고 부담 없는 한방 전인 치료',
      explore: '진료 과목 둘러보기',
      tecarBadge: 'TECAR 448 kHz 심부 재생 치료',
      tecarDesc: '인디바(INDIBA®)는 과학적으로 입증된 448 kHz 고유 주파수의 모노폴라 고주파 시스템을 바탕으로 현대 TECAR 치료의 기준을 제시합니다. 전 세계에서 가장 많은 임상 연구를 보유한 심부 열 치료로 빠른 세포 재생과 통증 회복을 돕습니다.',
      beautyBadge: '비수술 자연 성형침',
      beautyDesc: '자연 친화적인 다나한방 미용침 요법은 인위적이지 않은 자연스러운 방식으로 피부 본연의 탄력과 화사한 윤기를 유지하도록 돕습니다.',
      cardIndibaTitle: '몹시 아픈 통증 치료 인디바',
      cardIndibaSub: '인디바(INDIBA®)를 통한 심한 통증 및 근골격계 재활 치료',
      cardIndibaDesc: '심부 열 고주파가 손상된 관절, 근육 경련, 오십견, 좌골신경통, 만성 허리 통증 깊숙이 침투하여 즉각적인 편안함을 선사합니다.',
      cardIndibaLink: '인디바 고주파 치료 알아보기',
      cardCosmeticTitle: '다나한방 성형침',
      cardCosmeticSub: '비수술 얼굴 V-리프팅 & 동안 미용침 클리닉',
      cardCosmeticDesc: '칼을 대지 않고 얼굴 경혈과 근막을 자극하여 처진 피부를 올리고, 팔자주름과 미간주름을 자연스럽게 완화합니다.',
      cardCosmeticBadge: '다나한방 성형침이란?',
      cardCosmeticLink: '성형침 시술 상세히 보기',
      incontinenceTitle: '요실금 클리닉 요실금 치료 (Urinary Incontinence treatment)',
      hearingTitle: '이명 / 난청 치료 (Hearing Disorder treatment)',
      specializedDesc: '골반저근 강화 및 청신경 활성화, 자율신경 균형을 위한 다나한방만의 세심하고 집중적인 특수 치료 프로토콜입니다.',
      aboutBadge: '한의원 소개',
      aboutTitle: 'About us',
      aboutLocation: '달라스 & 캐롤턴, TX',
      aboutText: '2021년부터 달라스와 캐롤턴 지역에 정성을 다하는 동양 한방 침술 치료를 제공해 오고 있습니다. Aetna, BCBS TX, Cigna 등 다양한 프라이빗 건강보험 적용이 가능합니다!',
      popularBadge: '주요 치료',
      popularTitle: '대표적인 한방 진료 프로그램',
      popularLink: '전체 진료 과목 및 상담 안내 보기 →',
      insuranceTitle: '건강보험 적용 안내',
      insuranceDesc: 'Aetna, BCBS TX, Cigna 등 미국 주요 프라이빗 보험을 취급하며, 보험 혜택 확인을 친절히 도와드립니다.',
      doctorTitle: '한의학박사 다나 전 원장',
      doctorDesc: '남가주 한의과대학(SCU SOMA) 석사 및 한의학박사, NCCAOM 미국 연방 침구/한약 면허를 보유한 베테랑 전문의료인입니다.',
      locationTitle: '편리한 캐롤턴 위치',
      locationDesc: '3712 Old Denton Rd #140. 환자 전용 무료 주차 완비 및 당일 급성 통증 환자 예약이 가능합니다.',
    },
    aboutPage: {
      title: '원장 소개',
      subtitle: '2021년부터 달라스 및 캐롤턴 지역 환자분들의 전인적 건강과 치유를 위해 정성을 다하고 있습니다.',
      credentialsTitle: '공인된 전문 한의학 학위 및 면허 자격',
      videoSectionTitle: '성형침 및 한방 특화 치료 방송 영상 보기',
      videoSectionSubtitle: '달라스-포트워스 지역 대표 방송 DK NET 라디오 & TV 출연 특강',
      video1Title: 'DK NET TV: 다나한방 한의원 특강 (다나 전 원장 방송 출연)',
      video2Title: 'DK NET TV: 다나한방 성형침 & 통증 치료 심층 분석',
      diplomaTitle: 'Southern California University of SOMA 학위',
      diplomaDesc: '남가주 한의과대학 침구 및 한의학 석사 (Master of Science, 2013년 4월 취득)',
      diplomaVerified: '공인 정규 학위 확인',
      watchYoutube: 'YouTube에서 시청하기',
      locationTitle: '오시는 길',
      locationCardTitle: '달라스와 캐롤턴 중심가에 위치하여 편리하고 아늑한 진료 환경을 제공합니다. 언제든 문의해 주세요!',
      directionsButton: '길 찾기',
      openMaps: '구글 지도에서 열기',
      scheduleHeading: '다나 전 원장 1:1 진료 상담',
      scheduleText: '프라이빗 보험 적용 가능. 초진 및 재진 환자분 모두 꼼꼼한 진찰과 맞춤 진료를 받으실 수 있습니다.',
      scheduleBtn: '지금 진료 상담 예약하기',
    },
    contactPage: {
      title: '오시는 길 & 문의',
      subtitle: '달라스 및 캐롤턴 지역에서 편안하고 친절한 한방 진료 상담을 받으실 수 있습니다.',
      phoneLabel: '전화 상담',
      emailLabel: '이메일 문의',
      hoursLabel: '진료 시간',
      nameLabel: '성함 *',
      namePlaceholder: '성함을 입력해 주세요',
      emailFormLabel: '이메일 주소 *',
      emailPlaceholder: '이메일을 입력해 주세요',
      phoneFormLabel: '연락처 전화번호 (선택)',
      phonePlaceholder: '(469) 207 - 0345',
      messageLabel: '문의 내용 및 증상 *',
      messagePlaceholder: '불편하신 부위나 원하시는 치료 내용을 적어주세요',
      submitButton: '문의 및 상담 신청하기',
      successMessage: '감사합니다! 문의가 성공적으로 접수되었습니다. 확인 후 신속하게 연락드리겠습니다.',
      clinicPhotoTitle: '다나 한의원 (Dana Han Bang) 캐롤턴 진료실',
      clinicPhotoDesc: '엄선된 전통 한약재와 최신 전기 침구 및 인디바 고주파 치료 장비를 갖춘 안락한 진료 환경.',
      callOfficeNow: '전화 바로 걸기',
      locationHeading: '한의원 위치',
      locationSub: '캐롤턴 올드덴튼 로드 중심에 위치하여 편리하게 방문하실 수 있습니다.',
      parkingNotice: '140호 건물 바로 앞에 넓은 무료 환자 전용 주차장이 마련되어 있습니다.',
      getDirections: '구글 지도로 길 찾기',
    },
    drawer: {
      title: '진료 상담 및 치료 바구니',
      subtitle: '다나 한의원 (Dana Han Bang) 예약 문의 신청',
      selectedBadge: '선택된 진료 과목',
      clearAll: '모두 비우기',
      emptyTitle: '바구니가 비어 있습니다.',
      emptyText: '진료 과목 페이지에서 원하시는 치료를 선택하시거나 아래 양식을 통해 문의해 주세요.',
      sessionEstimate: '예상 진료 소요 시간:',
      infoHeading: '환자 정보 및 희망 진료 일정',
      fullName: '성함 *',
      email: '이메일 주소 *',
      phone: '연락처 전화번호',
      prefDate: '희망 방문 날짜',
      prefTime: '희망 시간대',
      timeMorning: '오전 (9:00 - 12:00)',
      timeAfternoon: '오후 (13:00 - 16:00)',
      timeEvening: '늦은 오후 (16:00 - 18:00)',
      timeSaturday: '토요일 오전 (9:00 - 14:00)',
      notesLabel: '증상 또는 요청사항 (선택)',
      notesPlaceholder: '예: 만성 목/허리 통증, 건강보험 적용 여부, 한방 성형침 상담 등...',
      submitBtn: '진료 상담 신청 보내기',
      successTitle: '진료 예약 문의가 접수되었습니다!',
      successDesc: '다나 전 원장님과 원내 담당자가 확인 후 희망 일정 조율을 위해 빠르게 연락드리겠습니다.',
      immediateTitle: '당일 긴급 진료가 필요하신가요?',
      immediateDesc: '급성 통증이나 당일 진료 가능 여부는 원내 전화로 바로 문의해 주시면 신속히 안내해 드립니다:',
      doneBtn: '확인 완료',
    },
    modal: {
      sessionTime: '표준 진료 시간:',
      welcomeMsg: '모든 환자분을 위한 정성 어린 진료',
      treatmentOverview: '치료 개요 및 원리',
      benefitsHeading: '주요 치료 적응증 및 기대 효과',
      insuranceAccepted: '건강보험 적용 안내',
      insurancePlans: 'Aetna, BCBS TX, Cigna 및 분할 결제 지원',
      inBag: '바구니에 담김 (예약 진행)',
      addToConsultation: '상담 바구니에 담기',
    },
    cookie: {
      title: '쿠키 사용 안내',
      text: '본 웹사이트는 최상의 브라우징 경험과 예약 편의를 위해 쿠키를 사용합니다.',
      acceptAll: '모두 허용',
      rejectAll: '거부',
      preferences: '설정 관리',
    },
    footer: {
      tagline: '모든 분들을 위한 편안하고 부담 없는 한방 전인 치료.',
      servingTag: '2021년부터 달라스 & 캐롤턴 진료',
      rights: '© 2025. All rights reserved.',
      servicesCol: '진료 및 문의',
      contactCol: '소식 안내',
      emailLabel: '이메일 주소를 입력해 주세요',
      emailPlaceholder: '건강 소식 및 업데이트를 받을 이메일',
      submitBtn: '문의 및 구독 신청',
      errorMsg: '올바른 이메일 주소를 입력해 주세요.',
      successMsg: '감사합니다! 소중한 이메일 문의가 정상 접수되었습니다.',
      footerDisclaimer: '위치: 3712 Old Denton Road #140, Carrollton, TX 75007 · 텍사스, 뉴욕, 뉴저지 면허 보유',
      insuranceList: '취급 보험: Aetna · BCBS TX · Cigna · 개인 건강보험',
    },
  },
};
