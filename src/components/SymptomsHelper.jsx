import React, { useState } from 'react';
import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Flame, 
  Sparkles, 
  Activity, 
  Stethoscope, 
  ArrowRight, 
  Smile, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const COMMON_SYMPTOMS = [
  {
    id: 'chest_pain',
    label: 'বুকে ব্যথা বা বুক ধড়ফড়',
    englishLabel: 'Chest Pain / Palpitations',
    deptId: 'cardiology',
    deptName: 'কার্ডিওলজি (হৃদরোগ বিভাগ)',
    deptNameEn: 'Cardiology (Heart Care)',
    icon: Heart,
    color: 'from-rose-500 to-red-600',
    descriptionBn: 'বুকে ভারি ভাব, বাম বাহুতে ব্যথা ছড়ানো বা হাঁটার সময় শ্বাসকষ্ট।',
    descriptionEn: 'Heaviness in chest, radiating pain to left arm, or shortness of breath during exertion.'
  },
  {
    id: 'fever_cold',
    label: 'জ্বর, সর্দি ও দুর্বলতা',
    englishLabel: 'Fever, Cough & Fatigue',
    deptId: 'medicine',
    deptName: 'মেডিসিন ও ডায়াবেটিস বিভাগ',
    deptNameEn: 'General Medicine & Diabetes',
    icon: Flame,
    color: 'from-amber-500 to-orange-600',
    descriptionBn: 'টানা কয়েকদিনের জ্বর, শরীরে প্রচণ্ড ব্যথা, কাশি বা সুগার ওঠানামা।',
    descriptionEn: 'Prolonged fever, persistent body aches, dry cough, or fluctuating blood sugar.'
  },
  {
    id: 'headache_neuro',
    label: 'তীব্র মাথাব্যথা বা মাইগ্রেন',
    englishLabel: 'Severe Headache & Nerve Pain',
    deptId: 'neurology',
    deptName: 'নিউরোলজি (স্নায়ুরোগ বিভাগ)',
    deptNameEn: 'Neurology (Brain & Spine)',
    icon: Brain,
    color: 'from-purple-500 to-indigo-600',
    descriptionBn: 'একপাশে প্রচণ্ড মাথাব্যথা, হাত-পা অবশ ভাব বা খিঁচুনির সমস্যা।',
    descriptionEn: 'Severe throbbing headache on one side, numbness in extremities, or dizziness.'
  },
  {
    id: 'joint_bone',
    label: 'হাঁটু ও কোমর ব্যথা',
    englishLabel: 'Joint, Knee & Back Pain',
    deptId: 'orthopedics',
    deptName: 'অর্থোপেডিক ও হাড়ভাঙা বিভাগ',
    deptNameEn: 'Orthopedics & Joint Care',
    icon: Bone,
    color: 'from-blue-500 to-cyan-600',
    descriptionBn: 'বসলে উঠতে কষ্ট, মেরুদণ্ডে ব্যথা বা আঘাতজনিত হাড়ের সমস্যা।',
    descriptionEn: 'Difficulty getting up from seated position, back pain, or bone trauma/injury.'
  },
  {
    id: 'maternity',
    label: 'গর্ভকালীন পরামর্শ ও নারী স্বাস্থ্য',
    englishLabel: 'Pregnancy & Gynaecology',
    deptId: 'gynecology',
    deptName: 'স্ত্রী ও প্রসূতি রোগ বিভাগ',
    deptNameEn: 'Obstetrics & Gynaecology',
    icon: Baby,
    color: 'from-pink-500 to-rose-600',
    descriptionBn: 'গর্ভকালীন চেকআপ, অনিয়মিত পিরিয়ড বা তলপেটে দীর্ঘদিনের ব্যথা।',
    descriptionEn: 'Prenatal wellness checkups, menstrual irregularities, or lower abdominal pain.'
  },
  {
    id: 'child_health',
    label: 'শিশুর জ্বর, বমি ও পুষ্টি',
    englishLabel: 'Child, Infant & Newborn Care',
    deptId: 'pediatrics',
    deptName: 'শিশু ও নবজাতক বিভাগ',
    deptNameEn: 'Pediatrics & Neonatology',
    icon: Smile,
    color: 'from-emerald-500 to-teal-600',
    descriptionBn: 'শিশুর ঘন ঘন বমি, পাতলা পায়খানা, ওজন বৃদ্ধি না পাওয়া ও টিকাদান।',
    descriptionEn: 'Frequent infant vomiting, loose stool, inadequate weight gain, or immunization.'
  },
  {
    id: 'stomach_gas',
    label: 'গ্যাস্ট্রিক, এসিডিটি ও লিভার',
    englishLabel: 'Acidity, Gas & Digestion',
    deptId: 'gastroenterology',
    deptName: 'গ্যাস্ট্রো ও হেপাটোলজি বিভাগ',
    deptNameEn: 'Gastroenterology & Liver',
    icon: Activity,
    color: 'from-teal-500 to-cyan-700',
    descriptionBn: 'তীব্র গ্যাস্ট্রিকের জ্বালাপোড়া, বদহজম, জন্ডিস বা পায়খানায় সমস্যা।',
    descriptionEn: 'Severe heartburn, indigestion, jaundice, or chronic abdominal cramps.'
  },
  {
    id: 'skin_allergy',
    label: 'অ্যালার্জি, চুলকানি ও ত্বক',
    englishLabel: 'Skin Allergy, Rash & Acne',
    deptId: 'dermatology',
    deptName: 'চর্ম ও যৌন রোগ বিভাগ',
    deptNameEn: 'Dermatology & Skin Care',
    icon: Sparkles,
    color: 'from-fuchsia-500 to-purple-600',
    descriptionBn: 'শরীরে লাল চাকা দাগ, চুল পড়া, ত্বকের ফাঙ্গাল ইনফেকশন বা ব্রণ।',
    descriptionEn: 'Red rashes, extreme itching, hair thinning, skin fungal infection, or severe acne.'
  }
];

export default function SymptomsHelper({ onSelectSymptom }) {
  const { lang, t } = useLanguage();
  const [activeSymptom, setActiveSymptom] = useState(COMMON_SYMPTOMS[0]);

  const handleSelect = (symptom) => {
    setActiveSymptom(symptom);
  };

  const handleBookNow = () => {
    onSelectSymptom(activeSymptom);
  };

  return (
    <section className="py-14 bg-gradient-to-br from-indigo-50/50 via-white to-pink-50/40 relative overflow-hidden border-b border-slate-200">
      
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Friendly Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-rose-500/20 mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>{t('symBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] tracking-tight">
            {t('symTitle')}
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            {t('symDesc')}
          </p>
        </div>

        {/* Symptoms Colorful Pills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {COMMON_SYMPTOMS.map((sym) => {
            const Icon = sym.icon;
            const isSelected = activeSymptom.id === sym.id;
            return (
              <button
                key={sym.id}
                onClick={() => handleSelect(sym)}
                className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col justify-between group ${
                  isSelected
                    ? 'border-blue-600 bg-white shadow-lg shadow-blue-500/10 scale-102 ring-2 ring-blue-500/30'
                    : 'border-slate-200 bg-white/80 hover:bg-white hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${sym.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>
                  )}
                </div>

                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-[#0B192C] leading-snug">
                    {lang === 'bn' ? sym.label : sym.englishLabel}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-semibold block mt-1 line-clamp-1">
                    {lang === 'bn' ? sym.deptName.split(' ')[0] : sym.deptNameEn.split(' ')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Symptom Colorful Recommendation Box */}
        {activeSymptom && (
          <div className="bg-white rounded-3xl border-2 border-blue-200 shadow-xl p-6 sm:p-8 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    {t('symRecBadge')}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {t('symRecSymptom')}: {lang === 'bn' ? activeSymptom.label : activeSymptom.englishLabel}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0B192C]">
                  {lang === 'bn' ? activeSymptom.deptName : activeSymptom.deptNameEn}
                </h3>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-medium">
                  {lang === 'bn' ? activeSymptom.descriptionBn : activeSymptom.descriptionEn}
                </p>
              </div>

              <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={handleBookNow}
                  className="px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 hover:from-blue-800 hover:to-indigo-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-700/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <Stethoscope className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>{t('symRecBtn')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
