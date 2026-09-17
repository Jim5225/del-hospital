import React, { useState } from 'react';
import { 
  PhoneCall, 
  Ambulance, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  CalendarCheck, 
  FileText, 
  HeartHandshake, 
  ShieldPlus,
  Stethoscope,
  Eye,
  Sparkles,
  HelpCircle,
  Globe
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onNavigate, activeSection, highContrast, setHighContrast, largeFont, setLargeFont }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, toggleLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('navHome') },
    { id: 'symptoms', label: t('navSymptoms'), badge: lang === 'bn' ? 'রোগীবান্ধব' : 'Guide', badgeColor: 'bg-rose-500' },
    { id: 'appointment', label: t('navAppointment'), badge: lang === 'bn' ? 'ফ্রি টোকেন' : 'Free Token', badgeColor: 'bg-blue-600' },
    { id: 'reports', label: t('navReports'), badge: lang === 'bn' ? 'লাইভ' : 'Live', badgeColor: 'bg-emerald-600' },
    { id: 'patient-services', label: t('navServices') },
    { id: 'doctors', label: t('navDoctors') },
    { id: 'departments', label: t('navDepartments') },
    { id: 'calculator', label: t('navBmi') },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md transition-all duration-200">
      
      {/* Top Emergency & Settings Bar */}
      <div className="bg-[#0B192C] text-white text-xs md:text-sm py-2 px-4 border-b-2 border-blue-600">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          {/* Emergency Contacts */}
          <div className="flex items-center space-x-4 md:space-x-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-400 font-black tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
              {t('emergency247')}
            </span>
            <a 
              href="tel:16263" 
              className="flex items-center gap-1.5 hover:text-yellow-300 font-bold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-yellow-400" />
              {t('hotline')}: <strong className="text-yellow-300 font-black">16263</strong>
            </a>
            <a 
              href="tel:09666787878" 
              className="hidden sm:flex items-center gap-1.5 hover:text-red-300 font-bold transition-colors"
            >
              <Ambulance className="w-3.5 h-3.5 text-red-400" />
              {t('icuAmbulance')}: <strong className="text-red-300 font-black">09666-787878</strong>
            </a>
          </div>

          {/* Top Right Controls: Language Switcher & Accessibility */}
          <div className="flex items-center space-x-2.5 ml-auto text-xs">
            
            {/* Prominent Language Switcher Button */}
            <div className="flex items-center bg-slate-800 rounded-full p-0.5 border border-blue-500/50 shadow-sm">
              <button
                onClick={() => setLang('bn')}
                className={`px-2.5 py-1 rounded-full text-xs font-black transition-all flex items-center gap-1 ${
                  lang === 'bn'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="বাংলায় পরিবর্তন করুন"
              >
                <span>বাংলা</span>
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-black transition-all flex items-center gap-1 ${
                  lang === 'en'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Switch to English"
              >
                <span>English</span>
              </button>
            </div>

            {/* High Contrast Mode */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`flex items-center gap-1 px-3 py-1 rounded-full font-bold border transition-all ${
                highContrast 
                  ? 'bg-yellow-400 text-black border-yellow-400 font-black' 
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }`}
              title="উচ্চ কনট্রাস্ট মোড"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{highContrast ? t('normalMode') : t('highContrast')}</span>
            </button>

            {/* Font Size Adjuster */}
            <button
              onClick={() => setLargeFont(!largeFont)}
              className={`px-2.5 py-1 rounded-full font-black border transition-all ${
                largeFont 
                  ? 'bg-blue-600 text-white border-blue-500' 
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }`}
              title="ফন্ট সাইজ"
            >
              {largeFont ? t('fontSizeMinus') : t('fontSizePlus')}
            </button>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Hospital Brand Logo with Colorful Shield */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-blue-600/25 group-hover:scale-105 transition-transform duration-200">
              <ShieldPlus className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-[#0B192C] tracking-tight">{t('hospitalName')}</span>
                <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-black tracking-wider">
                  {t('specialized')}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-semibold">{t('hospitalSub')}</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 font-semibold">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 rounded-xl text-sm transition-all duration-200 font-bold flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-blue-700 bg-blue-50 font-black' 
                      : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full text-white font-black shadow-xs ${item.badgeColor || 'bg-blue-600'}`}>
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-700 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Language pill */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('reports')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border-2 border-teal-600 text-teal-800 font-black hover:bg-teal-50 transition-all text-xs sm:text-sm shadow-sm"
            >
              <FileText className="w-4 h-4 text-teal-700" />
              <span>{t('btnReports')}</span>
            </button>

            <button
              onClick={() => handleNavClick('appointment')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 hover:from-blue-800 hover:to-indigo-700 text-white font-black shadow-md hover:shadow-lg transition-all text-xs sm:text-sm group"
            >
              <CalendarCheck className="w-4 h-4 text-yellow-300 group-hover:scale-110 transition-transform" />
              <span>{t('btnBook')}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-xl border border-blue-600 font-black text-xs text-blue-700 bg-blue-50"
            >
              {lang === 'bn' ? 'EN' : 'বাং'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          
          {/* Mobile Language Switcher */}
          <div className="p-2 bg-slate-100 rounded-2xl flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>ভাষা পরিবর্তন / Language</span>
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLang('bn')}
                className={`px-3 py-1 rounded-xl text-xs font-black ${
                  lang === 'bn' ? 'bg-emerald-600 text-white' : 'bg-white text-slate-700'
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-xl text-xs font-black ${
                  lang === 'en' ? 'bg-blue-600 text-white' : 'bg-white text-slate-700'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-2xl font-bold flex items-center justify-between text-sm ${
                activeSection === item.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-800 hover:bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full text-white font-black ${item.badgeColor || 'bg-blue-500'}`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
            <button
              onClick={() => handleNavClick('reports')}
              className="w-full py-3 text-center font-black text-teal-800 border-2 border-teal-600 rounded-2xl text-xs"
            >
              {t('btnReports')}
            </button>
            <button
              onClick={() => handleNavClick('appointment')}
              className="w-full py-3 text-center font-black text-white bg-blue-700 rounded-2xl text-xs"
            >
              {t('btnBook')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
