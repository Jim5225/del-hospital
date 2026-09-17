import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  FileText, 
  Ambulance, 
  Clock, 
  CheckCircle2, 
  Award, 
  Users, 
  Activity, 
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  PhoneCall,
  HeartHandshake
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onNavigate }) {
  const { lang, t } = useLanguage();
  const [greetingKey, setGreetingKey] = useState('greetingMorning');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreetingKey('greetingMorning');
    } else if (hour >= 12 && hour < 17) {
      setGreetingKey('greetingAfternoon');
    } else if (hour >= 17 && hour < 21) {
      setGreetingKey('greetingEvening');
    } else {
      setGreetingKey('greetingNight');
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/40 to-slate-50 pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-200">
      
      {/* Dynamic Colorful Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-300/30 to-purple-400/30 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-tr from-teal-300/30 to-emerald-400/30 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/30 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Friendly Time-based Greeting Chip */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-500/20">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
            <span>{t(greetingKey)} {t('heroSubWelcome')}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>{t('doctorPresentToday')}</span>
          </div>
        </div>

        {/* Main Grid: Headline & Friendly Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Main Headline with Colorful Gradients */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] leading-tight tracking-normal">
              {t('heroHeadline1')} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-600">
                {t('heroHeadline2')}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              {t('heroDesc')}
            </p>

            {/* Direct Colorful Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('appointment')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 hover:from-blue-800 hover:to-indigo-700 text-white font-extrabold text-base shadow-lg shadow-blue-700/25 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-yellow-300" />
                <span>{t('btnHeroAppointment')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('reports')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-white hover:bg-teal-50 text-[#0B192C] border-2 border-teal-600 font-extrabold text-base shadow-sm hover:shadow transition-all duration-200"
              >
                <FileText className="w-5 h-5 text-teal-600" />
                <span>{t('btnHeroReport')}</span>
              </button>
            </div>

            {/* Patient Comfort Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{t('comfort1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{t('comfort2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{t('comfort3')}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card with Warm Hospital Picture & Floating Badges */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with vibrant border */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80"
                  alt="হাসপাতালে রোগীর আন্তরিক পরিচর্যা"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                {/* Image Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200 text-slate-900 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center text-white">
                        <HeartHandshake className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-sm text-[#0B192C]">{t('nursingTitle')}</h4>
                        <p className="text-xs text-slate-600">{t('nursingSub')}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-emerald-100 text-emerald-800 rounded-lg">{t('activeStatus')}</span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 1: Experience */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border-2 border-indigo-100 flex items-center gap-3 animate-bounce-subtle">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-black text-[#0B192C]">{t('statExp')}</div>
                  <div className="text-xs font-semibold text-slate-600">{t('statExpSub')}</div>
                </div>
              </div>

              {/* Floating Stat Card 2: Patients */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border-2 border-emerald-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-black text-[#0B192C]">{t('statPatients')}</div>
                  <div className="text-xs font-semibold text-slate-600">{t('statPatientsSub')}</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Colorful Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          
          {/* Card 1: Appointment */}
          <div 
            onClick={() => onNavigate('appointment')}
            className="group cursor-pointer bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-black text-white">
              {t('cardAptTitle')}
            </h3>
            <p className="text-xs text-blue-100 mt-2 leading-relaxed">
              {t('cardAptDesc')}
            </p>
            <div className="mt-4 flex items-center text-xs font-black text-yellow-300 group-hover:translate-x-1.5 transition-transform">
              <span>{t('cardAptBtn')}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 2: Report */}
          <div 
            onClick={() => onNavigate('reports')}
            className="group cursor-pointer bg-gradient-to-br from-teal-600 to-emerald-700 p-6 rounded-3xl text-white shadow-lg shadow-teal-600/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-black text-white">
              {t('cardRepTitle')}
            </h3>
            <p className="text-xs text-teal-100 mt-2 leading-relaxed">
              {t('cardRepDesc')}
            </p>
            <div className="mt-4 flex items-center text-xs font-black text-emerald-200 group-hover:translate-x-1.5 transition-transform">
              <span>{t('cardRepBtn')}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 3: Symptoms Helper */}
          <div 
            onClick={() => onNavigate('symptoms')}
            className="group cursor-pointer bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-3xl text-white shadow-lg shadow-purple-600/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-black text-white">
              {t('cardSymTitle')}
            </h3>
            <p className="text-xs text-purple-100 mt-2 leading-relaxed">
              {t('cardSymDesc')}
            </p>
            <div className="mt-4 flex items-center text-xs font-black text-pink-200 group-hover:translate-x-1.5 transition-transform">
              <span>{t('cardSymBtn')}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 4: Emergency */}
          <div 
            onClick={() => onNavigate('contact')}
            className="group cursor-pointer bg-gradient-to-br from-rose-600 to-red-700 p-6 rounded-3xl text-white shadow-lg shadow-rose-600/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Ambulance className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-black text-white">
              {t('cardAmbTitle')}
            </h3>
            <p className="text-xs text-rose-100 mt-2 leading-relaxed">
              {t('cardAmbDesc')}
            </p>
            <div className="mt-4 flex items-center text-xs font-black text-yellow-300 group-hover:translate-x-1.5 transition-transform">
              <span>{t('cardAmbBtn')}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
