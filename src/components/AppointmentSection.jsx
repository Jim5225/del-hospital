import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MapPin, 
  CreditCard, 
  CheckCircle2, 
  Printer, 
  Share2, 
  Search, 
  Filter, 
  Star, 
  ShieldCheck, 
  AlertCircle,
  X,
  Stethoscope,
  ChevronRight,
  FileCheck,
  Sparkles,
  MessageCircle,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DOCTORS_DATA, DEPARTMENTS } from '../data/doctorsData';
import { useLanguage } from '../context/LanguageContext';

export default function AppointmentSection({ initialDoctorId = null, prefilledDept = null }) {
  const { lang, t } = useLanguage();
  const [selectedDept, setSelectedDept] = useState(prefilledDept || 'all');
  const [searchDoctor, setSearchDoctor] = useState('');
  const [bookingDoctor, setBookingDoctor] = useState(
    initialDoctorId ? DOCTORS_DATA.find(d => d.id === initialDoctorId) : null
  );
  
  // Booking Form States
  const [appointmentDate, setAppointmentDate] = useState(
    lang === 'bn' ? '২০ সেপ্টেম্বর, ২০২৬ (রবিবার)' : '20 September, 2026 (Sunday)'
  );
  const [selectedSlot, setSelectedSlot] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState(lang === 'bn' ? 'পুরুষ' : 'Male');
  const [patientProblem, setPatientProblem] = useState('');
  const [visitType, setVisitType] = useState(lang === 'bn' ? 'নতুন রোগী' : 'New Patient');
  const [formError, setFormError] = useState('');

  // Confirmed Appointment State (Token Slip)
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Available dates for quick selection
  const upcomingDates = lang === 'bn' ? [
    { label: 'আজ (জরুরি)', val: '১৮ সেপ্টেম্বর, ২০২৬ (শুক্রবার)' },
    { label: 'আগামীকাল', val: '১৯ সেপ্টেম্বর, ২০২৬ (শনিবার)' },
    { label: 'রবিবার', val: '২০ সেপ্টেম্বর, ২০২৬ (রবিবার)' },
    { label: 'সোমবার', val: '২১ সেপ্টেম্বর, ২০২৬ (সোমবার)' },
    { label: 'মঙ্গলবার', val: '২২ সেপ্টেম্বর, ২০২৬ (মঙ্গলবার)' },
  ] : [
    { label: 'Today (Urgent)', val: '18 September, 2026 (Friday)' },
    { label: 'Tomorrow', val: '19 September, 2026 (Saturday)' },
    { label: 'Sunday', val: '20 September, 2026 (Sunday)' },
    { label: 'Monday', val: '21 September, 2026 (Monday)' },
    { label: 'Tuesday', val: '22 September, 2026 (Tuesday)' },
  ];

  // Filter Doctors
  const filteredDoctors = DOCTORS_DATA.filter(doc => {
    const matchesDept = selectedDept === 'all' || doc.department === selectedDept;
    const matchesSearch = doc.name.toLowerCase().includes(searchDoctor.toLowerCase()) ||
                          doc.deptName.toLowerCase().includes(searchDoctor.toLowerCase()) ||
                          doc.degrees.toLowerCase().includes(searchDoctor.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleStartBooking = (doctor) => {
    setBookingDoctor(doctor);
    setSelectedSlot(doctor.timeSlots[0] || '');
    setFormError('');
    setConfirmedBooking(null);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();

    if (!patientName.trim()) {
      setFormError(lang === 'bn' ? 'অনুগ্রহ করে রোগীর নাম লিখুন।' : 'Please enter patient full name.');
      return;
    }
    if (!patientPhone.trim() || patientPhone.trim().length < 11) {
      setFormError(lang === 'bn' ? 'অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017xxxxxxxx)।' : 'Please provide a valid 11-digit mobile number.');
      return;
    }
    if (!patientAge.trim()) {
      setFormError(lang === 'bn' ? 'রোগীর বয়স লিখুন।' : 'Please specify patient age.');
      return;
    }
    if (!selectedSlot) {
      setFormError(lang === 'bn' ? 'অনুগ্রহ করে একটি সময়সূচী (টাইম স্লট) বাছাই করুন।' : 'Please select a preferred time slot.');
      return;
    }

    setFormError('');

    const tokenNo = Math.floor(1000 + Math.random() * 9000);
    const trackingCode = `DEL-APT-${Math.floor(10000 + Math.random() * 90000)}`;

    const bookingResult = {
      tokenNo: `TK-${tokenNo}`,
      trackingCode,
      doctor: bookingDoctor,
      date: appointmentDate,
      timeSlot: selectedSlot,
      patientName,
      patientPhone,
      patientAge,
      patientGender,
      patientProblem: patientProblem || (lang === 'bn' ? 'সাধারণ স্বাস্থ্য পরীক্ষা ও পরামর্শ' : 'General Checkup & Consultation'),
      visitType,
      fee: bookingDoctor.fee,
      createdAt: new Date().toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    };

    setConfirmedBooking(bookingResult);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  const handlePrintSlip = () => {
    window.print();
  };

  const resetBookingForm = () => {
    setConfirmedBooking(null);
    setBookingDoctor(null);
    setPatientName('');
    setPatientPhone('');
    setPatientAge('');
    setPatientProblem('');
    setFormError('');
  };

  return (
    <section id="appointment" className="py-16 bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 mb-3">
            <Calendar className="w-4 h-4 text-yellow-300" />
            <span>{t('aptBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] tracking-tight">
            {t('aptTitle')}
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            {t('aptSub')}
          </p>
        </div>

        {/* 4 Steps Visual Guide */}
        <div className="max-w-4xl mx-auto mb-10 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm no-print">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 font-bold flex flex-col items-center">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mb-1">১</span>
              <span>{t('step1')}</span>
              <span className="text-[10px] text-blue-600 font-normal">{t('step1Sub')}</span>
            </div>
            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 font-bold flex flex-col items-center">
              <span className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs mb-1">২</span>
              <span>{t('step2')}</span>
              <span className="text-[10px] text-purple-600 font-normal">{t('step2Sub')}</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold flex flex-col items-center">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs mb-1">৩</span>
              <span>{t('step3')}</span>
              <span className="text-[10px] text-emerald-600 font-normal">{t('step3Sub')}</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold flex flex-col items-center">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs mb-1">৪</span>
              <span>{t('step4')}</span>
              <span className="text-[10px] text-amber-600 font-normal">{t('step4Sub')}</span>
            </div>
          </div>
        </div>

        {/* If Confirmation Slip is Active, Show Full Token View */}
        {confirmedBooking ? (
          <div className="max-w-3xl mx-auto my-6">
            <div className="bg-white rounded-3xl border-4 border-emerald-500 shadow-2xl overflow-hidden p-6 sm:p-8 printable-card relative">
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <span className="text-8xl font-black text-slate-900 rotate-[-25deg]">DEL HOSPITAL</span>
              </div>

              {/* Slip Top Header */}
              <div className="flex items-center justify-between border-b-2 border-slate-100 pb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg">
                    <FileCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#0B192C]">{t('slipHospitalName')}</h3>
                    <p className="text-xs font-bold text-emerald-700">{t('slipSubtitle')}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black inline-block mb-1 border border-emerald-300">
                    {t('serialConfirmed')}
                  </span>
                  <p className="text-xs font-bold text-slate-500">{confirmedBooking.trackingCode}</p>
                </div>
              </div>

              {/* Big Token Number Banner */}
              <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 relative z-10">
                <div>
                  <span className="text-xs font-bold text-yellow-300 uppercase tracking-widest">{t('tokenBannerTitle')}</span>
                  <div className="text-4xl sm:text-5xl font-black text-white mt-1 tracking-tight">
                    {confirmedBooking.tokenNo}
                  </div>
                  <p className="text-xs text-blue-100 mt-1">{t('tokenBannerNotice')}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center min-w-[180px]">
                  <div className="text-xs font-semibold text-blue-200">{t('slipVisitDate')}</div>
                  <div className="text-sm font-extrabold text-white mt-0.5">{confirmedBooking.date}</div>
                  <div className="mt-1.5 px-3 py-1 bg-yellow-400 text-slate-950 rounded-lg text-xs font-black inline-block">
                    {confirmedBooking.timeSlot}
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm text-slate-800 relative z-10">
                <div className="p-4 rounded-2xl bg-blue-50/60 border-2 border-blue-100 space-y-2">
                  <h4 className="text-xs font-black text-blue-900 uppercase flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-blue-700" />
                    {t('slipDocInfo')}
                  </h4>
                  <div className="font-black text-base text-[#0B192C]">{confirmedBooking.doctor.name}</div>
                  <p className="text-xs text-slate-600 font-medium">{confirmedBooking.doctor.degrees}</p>
                  <p className="text-xs font-black text-blue-700">{confirmedBooking.doctor.deptName}</p>
                  <p className="text-xs font-bold text-slate-700">{confirmedBooking.doctor.room}</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border-2 border-emerald-100 space-y-2">
                  <h4 className="text-xs font-black text-emerald-900 uppercase flex items-center gap-1.5">
                    <User className="w-4 h-4 text-emerald-700" />
                    {t('slipPatientInfo')}
                  </h4>
                  <div className="font-black text-base text-[#0B192C]">{confirmedBooking.patientName}</div>
                  <p className="text-xs text-slate-700">
                    <span className="font-bold">{t('slipMobile')}:</span> {confirmedBooking.patientPhone}
                  </p>
                  <p className="text-xs text-slate-700">
                    <span className="font-bold">{t('slipAgeGender')}:</span> {confirmedBooking.patientAge} {lang === 'bn' ? 'বছর' : 'yrs'}, {confirmedBooking.patientGender}
                  </p>
                  <p className="text-xs text-slate-700">
                    <span className="font-bold">{t('slipFeeCounter')}:</span> ৳{confirmedBooking.fee}
                  </p>
                </div>
              </div>

              {/* Patient Guidelines */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-50 border-2 border-amber-200 text-xs text-amber-950 space-y-1 relative z-10">
                <div className="font-black flex items-center gap-1.5 text-amber-900 text-sm">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  {t('slipGuidelineTitle')}
                </div>
                <p className="font-medium">{t('slipRule1')}</p>
                <p className="font-medium">{t('slipRule2')}</p>
                <p className="font-medium">{t('slipRule3')}</p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-200 no-print relative z-10">
                <button
                  onClick={resetBookingForm}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border-2 border-slate-300 font-bold text-slate-700 hover:bg-slate-100 transition-colors text-sm"
                >
                  {t('btnNewSerial')}
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={handlePrintSlip}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-black text-sm shadow-md transition-all"
                  >
                    <Printer className="w-4 h-4" />
                    <span>{t('btnPrintSlip')}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <>
            {/* Search & Specialty Filters */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border-2 border-slate-200 shadow-soft mb-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                <div className="md:col-span-6 relative">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchDoctor}
                    onChange={(e) => setSearchDoctor(e.target.value)}
                    placeholder={t('searchDocPlaceholder')}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 text-sm font-semibold transition-colors text-slate-900"
                  />
                  {searchDoctor && (
                    <button 
                      onClick={() => setSearchDoctor('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="md:col-span-6 flex items-center justify-between md:justify-end gap-3 text-sm text-slate-600 font-semibold">
                  <span>{t('totalDocsFound')}: <strong className="text-blue-700 font-bold">{filteredDoctors.length}</strong></span>
                </div>
              </div>

              {/* Department Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 scrollbar-none">
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDept(dept.id)}
                    className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                      selectedDept === dept.id
                        ? 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-md scale-102'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-3xl border-2 border-slate-200 hover:border-blue-500 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-5">
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        {t('todayAvailable')}
                      </span>
                      <span className="text-xs font-bold text-slate-500">{doc.room}</span>
                    </div>

                    <div className="flex items-start gap-4">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-200 shadow-sm group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-black px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 inline-block mb-1">
                          {doc.deptName}
                        </span>
                        <h3 className="font-black text-base text-[#0B192C] leading-snug line-clamp-2">
                          {doc.name}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-1 font-semibold">{doc.degrees}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      {doc.bio}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-700">
                      <div>
                        <span className="text-slate-500 block font-medium">{t('experience')}</span>
                        <strong className="text-slate-900 font-bold">{doc.experience}</strong>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-500 block font-medium">{t('visitFee')}</span>
                        <strong className="text-emerald-700 font-black text-base">৳ {doc.fee}</strong>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
                      <div className="flex items-center gap-1 text-amber-600 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{doc.rating}</span>
                        <span className="text-slate-400 font-normal">({doc.reviewsCount} {t('reviews')})</span>
                      </div>
                      <span className="text-blue-700 font-bold">{t('bmdcReg')}: {doc.bmdcNo}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border-t border-slate-100">
                    <button
                      onClick={() => handleStartBooking(doc)}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-black text-sm shadow-md hover:shadow-lg transition-all duration-150 group"
                    >
                      <Calendar className="w-4 h-4 text-yellow-300 group-hover:scale-110 transition-transform" />
                      <span>{t('btnBookSerial')}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Booking Modal / Dialog Form */}
        {bookingDoctor && !confirmedBooking && (
          <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border-2 border-blue-500/30">
              
              <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={bookingDoctor.image}
                    alt={bookingDoctor.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white/40 shadow"
                  />
                  <div>
                    <h3 className="font-black text-lg sm:text-xl text-white">{bookingDoctor.name}</h3>
                    <p className="text-xs text-blue-200 font-semibold">{bookingDoctor.deptName} • ৳{bookingDoctor.fee}</p>
                    <p className="text-xs text-blue-300 font-medium">{bookingDoctor.room}</p>
                  </div>
                </div>
                <button
                  onClick={() => setBookingDoctor(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleConfirmBooking} className="p-5 sm:p-6 overflow-y-auto space-y-5">
                
                {formError && (
                  <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-bold flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Step 1: Select Date */}
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase mb-2">
                    {t('formStepDate')}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {upcomingDates.map((item, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setAppointmentDate(item.val)}
                        className={`p-3 rounded-2xl text-xs font-bold text-left border-2 transition-all ${
                          appointmentDate === item.val
                            ? 'bg-blue-700 text-white border-blue-700 shadow-md'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-[10px] opacity-85">{item.label}</div>
                        <div className="font-black mt-0.5">{item.val.split(' ')[0]} {item.val.split(' ')[1]}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Time Slots */}
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase mb-2">
                    {t('formStepSlot')}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {bookingDoctor.timeSlots.map((slot, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-black border-2 transition-all text-center ${
                          selectedSlot === slot
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 inline mr-1" />
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Patient Information */}
                <div className="space-y-3 pt-3 border-t border-slate-200">
                  <h4 className="text-xs font-black text-slate-700 uppercase">{t('formStepPatient')}</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t('lblPatientName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder={lang === 'bn' ? "যেমন: মোঃ কামরুল ইসলাম" : "e.g. John Doe"}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm font-semibold focus:border-blue-600 focus:bg-white text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t('lblPatientPhone')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        placeholder="017xxxxxxxx"
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm font-semibold focus:border-blue-600 focus:bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t('lblPatientAge')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={patientAge}
                        onChange={(e) => setPatientAge(e.target.value)}
                        placeholder={lang === 'bn' ? "যেমন: ৪৫" : "45"}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm font-semibold focus:border-blue-600 focus:bg-white text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">{t('lblGender')}</label>
                      <select
                        value={patientGender}
                        onChange={(e) => setPatientGender(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm font-semibold bg-white focus:border-blue-600 text-slate-900"
                      >
                        <option value={lang === 'bn' ? "পুরুষ" : "Male"}>{lang === 'bn' ? "পুরুষ" : "Male"}</option>
                        <option value={lang === 'bn' ? "মহিলা" : "Female"}>{lang === 'bn' ? "মহিলা" : "Female"}</option>
                        <option value={lang === 'bn' ? "অন্যান্য" : "Other"}>{lang === 'bn' ? "অন্যান্য" : "Other"}</option>
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-700 mb-1">{t('lblVisitType')}</label>
                      <select
                        value={visitType}
                        onChange={(e) => setVisitType(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm font-semibold bg-white focus:border-blue-600 text-slate-900"
                      >
                        <option value={lang === 'bn' ? "নতুন রোগী" : "New Patient"}>{lang === 'bn' ? "নতুন রোগী" : "New Patient"}</option>
                        <option value={lang === 'bn' ? "পুরাতন রোগী (ফলোআপ)" : "Follow-up Patient"}>{lang === 'bn' ? "পুরাতন রোগী (ফলোআপ)" : "Follow-up Patient"}</option>
                        <option value={lang === 'bn' ? "রিপোর্ট দেখানো" : "Report Consultation"}>{lang === 'bn' ? "রিপোর্ট দেখানো" : "Report Consultation"}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('lblProblem')}
                    </label>
                    <textarea
                      rows="2"
                      value={patientProblem}
                      onChange={(e) => setPatientProblem(e.target.value)}
                      placeholder={lang === 'bn' ? "যেমন: ৩ দিন ধরে বুকে চিনচিন ব্যথা বা পেটে তীব্র জ্বালাপোড়া..." : "e.g. Chest pain, fever for 3 days..."}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:border-blue-600 focus:bg-white text-slate-900"
                    ></textarea>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{t('noAdvanceNotice')}</span>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setBookingDoctor(null)}
                    className="px-5 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 text-sm"
                  >
                    {t('btnCancel')}
                  </button>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t('btnConfirmApt')}</span>
                  </button>
                </div>

              </form>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
