export const SAMPLE_REPORTS = [
  {
    invoiceId: 'DEL-88219',
    pin: '1234',
    patientName: 'মোঃ আব্দুল করিম',
    age: '৫২ বছর',
    gender: 'পুরুষ',
    phone: '01711223344',
    referredDoctor: 'অধ্যাপক ডা. এ. কে. এম. মোহিতুর রহমান (চিফ কার্ডিওলজিস্ট)',
    testDate: '১৬ সেপ্টেম্বর, ২০২৬',
    deliveryDate: '১৭ সেপ্টেম্বর, ২০২৬',
    status: 'completed', // completed, processing, collected
    statusBangla: 'রিপোর্ট প্রস্তুত ও অনুমোদিত',
    department: 'বায়োকেমিস্ট্রি ও হেমাটোলজি ল্যাব',
    pathologist: 'ডা. শাহেদ আহমেদ (এমবিবিএস, এমডি - ক্লিনিক্যাল প্যাথলজি)',
    testTitle: 'কমপ্লিট লিপিড প্রোফাইল ও ফাস্টিং গ্লুকোজ (Lipid Profile & Glucose)',
    clinicalSummary: 'রোগীর রক্তে ট্রাইগ্লিসারাইড ও এলডিএল সামান্য উচ্চমাত্রায় রয়েছে। খাদ্যতালিকায় চর্বি নিয়ন্ত্রণ ও নিয়মিত হাঁটার পরামর্শ রইল।',
    parameters: [
      {
        name: 'Fasting Blood Sugar (গ্লুকোজ)',
        result: '৬.১',
        unit: 'mmol/L',
        referenceRange: '৪.০ - ৫.৯',
        status: 'high',
        statusLabel: 'সামান্য বেশি'
      },
      {
        name: 'Total Cholesterol (কোলেস্টেরল)',
        result: '২১২',
        unit: 'mg/dL',
        referenceRange: '১৫০ - ২০০',
        status: 'high',
        statusLabel: 'উচ্চ'
      },
      {
        name: 'Triglycerides (ট্রাইগ্লিসারাইড)',
        result: '১৯০',
        unit: 'mg/dL',
        referenceRange: '< ১৫০',
        status: 'high',
        statusLabel: 'উচ্চ'
      },
      {
        name: 'HDL Cholesterol (ভালো চর্বি)',
        result: '৪২',
        unit: 'mg/dL',
        referenceRange: '> ৪০',
        status: 'normal',
        statusLabel: 'স্বাভাবিক'
      },
      {
        name: 'LDL Cholesterol (খারাপ চর্বি)',
        result: '১৩২',
        unit: 'mg/dL',
        referenceRange: '< ১০০',
        status: 'high',
        statusLabel: 'উচ্চ'
      },
      {
        name: 'Serum Creatinine (কিডনি ফাংশন)',
        result: '০.৯৫',
        unit: 'mg/dL',
        referenceRange: '০.৭ - ১.২',
        status: 'normal',
        statusLabel: 'স্বাভাবিক'
      }
    ]
  },
  {
    invoiceId: 'DEL-74102',
    pin: '5678',
    patientName: 'বেগম নাজনীন সুলতানা',
    age: '৩৪ বছর',
    gender: 'মহিলা',
    phone: '01899887766',
    referredDoctor: 'ডা. ফারহানা জামান (তৃষা) (চিফ গাইনিকোলজিস্ট)',
    testDate: '১৭ সেপ্টেম্বর, ২০২৬',
    deliveryDate: '১৮ সেপ্টেম্বর, ২০২৬',
    status: 'completed',
    statusBangla: 'রিপোর্ট প্রস্তুত ও অনুমোদিত',
    department: 'হেমাটোলজি ল্যাবরেটরি',
    pathologist: 'ডা. ফারিয়া তাবাসসুম (এমবিবিএস, ডিসিপি)',
    testTitle: 'কমপ্লিট ব্লাড কাউন্ট (CBC with ESR)',
    clinicalSummary: 'হিমোগ্লোবিন মান স্বাভাবিকের চেয়ে কিছুটা কম (মৃদু অ্যানিমিয়া)। আয়রন সমৃদ্ধ পুষ্টিকর খাবার ও ওরাল সাপ্লিমেন্ট গ্রহণের পরামর্শ।',
    parameters: [
      {
        name: 'Hemoglobin (হিমোগ্লোবিন)',
        result: '১০.৮',
        unit: 'g/dL',
        referenceRange: '১১.৫ - ১৬.৫',
        status: 'low',
        statusLabel: 'স্বল্পতা'
      },
      {
        name: 'ESR (১ম ঘন্টা)',
        result: '১৮',
        unit: 'mm/1st hr',
        referenceRange: '০ - ২০',
        status: 'normal',
        statusLabel: 'স্বাভাবিক'
      },
      {
        name: 'Total WBC Count (শ্বেত রক্তকণিকা)',
        result: '৭,৫০০',
        unit: '/cumm',
        referenceRange: '৪,০০০ - ১১,০০০',
        status: 'normal',
        statusLabel: 'স্বাভাবিক'
      },
      {
        name: 'Platelet Count (প্লাটিলেট)',
        result: '২,৬০,০০০',
        unit: '/cumm',
        referenceRange: '১,৫০,০০০ - ৪,৫০,০০০',
        status: 'normal',
        statusLabel: 'স্বাভাবিক'
      },
      {
        name: 'Neutrophils',
        result: '৬৪',
        unit: '%',
        referenceRange: '৪০ - ৭৫',
        status: 'normal',
        statusLabel: 'স্বাভাবিক'
      },
      {
        name: 'Lymphocytes',
        result: '৩০',
        unit: '%',
        referenceRange: '২০ - ৪৫',
        status: 'normal',
        statusLabel: 'স্বাভাবিক'
      }
    ]
  },
  {
    invoiceId: 'DEL-99341',
    pin: '9900',
    patientName: 'তানভীর হাসান সৌরভ',
    age: '২৮ বছর',
    gender: 'পুরুষ',
    phone: '01912345678',
    referredDoctor: 'ডা. তৌহিদুল ইসলাম পাটোয়ারী (মেডিসিন স্পেশালিস্ট)',
    testDate: '১৮ সেপ্টেম্বর, ২০২৬',
    deliveryDate: '১৯ সেপ্টেম্বর, ২০২৬ (সম্ভাব্য)',
    status: 'processing',
    statusBangla: 'ল্যাবরেটরিতে পরীক্ষা প্রক্রিয়াধীন',
    department: 'মলিকুলার ডায়াগনস্টিক ও সেরোলজি',
    pathologist: 'ডা. এম. হাসানুজ্জামান',
    testTitle: 'ডেঙ্গু NS1 অ্যান্টিজেন ও সেরোলজি প্যানেল',
    clinicalSummary: 'স্যাম্পল প্রক্রিয়াকরণ চলছে। ফাইনাল বায়োমার্কার এনালাইসিস সম্পন্ন হলে ডাক্তার দ্বারা অনুমোদিত হয়ে এখানে দৃশ্যমান হবে।',
    parameters: [
      {
        name: 'Dengue NS1 Antigen',
        result: 'পরীক্ষা চলছে...',
        unit: 'ELISA',
        referenceRange: 'Negative',
        status: 'pending',
        statusLabel: 'প্রক্রিয়াধীন'
      },
      {
        name: 'Dengue IgM Antibody',
        result: 'অপেক্ষারত',
        unit: 'Index',
        referenceRange: '< ০.৯ Negative',
        status: 'pending',
        statusLabel: 'প্রক্রিয়াধীন'
      },
      {
        name: 'Hematocrit (HCT)',
        result: '৪২.৫',
        unit: '%',
        referenceRange: '৪০ - ৫০',
        status: 'normal',
        statusLabel: 'স্বাভাবিক'
      }
    ]
  }
];
