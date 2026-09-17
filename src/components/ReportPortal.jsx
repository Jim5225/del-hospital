import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Download, 
  Printer, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  FileCheck2, 
  Share2, 
  User, 
  Activity, 
  Calendar,
  X,
  Sparkles,
  ArrowUpRight,
  Stethoscope,
  Info,
  CheckCircle,
  AlertTriangle,
  Award
} from 'lucide-react';
import { SAMPLE_REPORTS } from '../data/reportsData';
import { useLanguage } from '../context/LanguageContext';

export default function ReportPortal({ onBookDoctorWithReport }) {
  const { lang, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedReport, setSelectedReport] = useState(SAMPLE_REPORTS[0]);
  const [searchMessage, setSearchMessage] = useState('');

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      setSearchMessage(lang === 'bn' ? 'অনুগ্রহ করে ইনভয়েস নম্বর অথবা ফোন নম্বর দিন।' : 'Please enter invoice ID or phone number.');
      return;
    }

    const found = SAMPLE_REPORTS.find(
      r => r.invoiceId.toLowerCase().includes(query) || r.phone.includes(query)
    );

    if (found) {
      setSelectedReport(found);
      setSearchMessage('');
    } else {
      setSearchMessage(
        lang === 'bn' 
          ? `দুঃখিত! "${searchQuery}" এর বিপরীতে কোনো রিপোর্ট পাওয়া যায়নি। নিচে দেওয়া নমুনা আইডি দিয়ে ট্রাই করুন।`
          : `Sorry! No report found for "${searchQuery}". Please try the sample IDs below.`
      );
    }
  };

  const handleQuickLoad = (report) => {
    setSelectedReport(report);
    setSearchQuery(report.invoiceId);
    setSearchMessage('');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="reports" className="py-16 bg-gradient-to-b from-white via-teal-50/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-teal-600/20 mb-3">
            <FileText className="w-4 h-4 text-yellow-300" />
            <span>{t('repBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] tracking-tight">
            {t('repTitle')}
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            {t('repSub')}
          </p>
        </div>

        {/* Search Box Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/30 p-6 sm:p-8 rounded-3xl border-2 border-teal-200 shadow-soft mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <label className="block text-sm font-black text-[#0B192C]">
              {t('lblInvoicePhone')}
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('searchRepPlaceholder')}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-slate-300 bg-white focus:border-teal-600 text-slate-900 font-bold text-sm shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-700 hover:to-emerald-800 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>{t('btnSearchRep')}</span>
              </button>
            </div>

            {/* Quick Demo Sample ID Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-black text-slate-600">{t('quickDemoLabel')}</span>
              {SAMPLE_REPORTS.map((rep) => (
                <button
                  type="button"
                  key={rep.invoiceId}
                  onClick={() => handleQuickLoad(rep)}
                  className={`px-3 py-1.5 rounded-xl border-2 font-black transition-all flex items-center gap-1.5 ${
                    selectedReport?.invoiceId === rep.invoiceId
                      ? 'bg-gradient-to-r from-teal-700 to-emerald-700 text-white border-teal-700 shadow-md scale-102'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-teal-500 hover:bg-teal-50'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>{rep.invoiceId}</span>
                  <span className="opacity-80 font-medium">({rep.patientName.split(' ')[0]})</span>
                </button>
              ))}
            </div>

            {searchMessage && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>{searchMessage}</span>
              </div>
            )}
          </form>
        </div>

        {/* Selected Report Card Display */}
        {selectedReport && (
          <div className="max-w-4xl mx-auto">
            
            {/* Status Flow Tracker */}
            <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-sm mb-6 no-print">
              <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>{t('flowTrackTitle')}</span>
                <span className="text-emerald-700 font-bold">{t('flowIso')}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-800 font-black text-xs flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span>{t('flowStep1')}</span>
                  <span className="text-[10px] text-emerald-600 font-bold mt-0.5">{t('flowStep1Sub')}</span>
                </div>
                <div className="p-3 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-800 font-black text-xs flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span>{t('flowStep2')}</span>
                  <span className="text-[10px] text-emerald-600 font-bold mt-0.5">{t('flowStep2Sub')}</span>
                </div>
                <div className={`p-3 rounded-2xl border-2 font-black text-xs flex flex-col items-center ${
                  selectedReport.status === 'completed'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-amber-50 border-amber-200 text-amber-800'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 text-white ${
                    selectedReport.status === 'completed' ? 'bg-emerald-600' : 'bg-amber-500'
                  }`}>
                    {selectedReport.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5 animate-spin" />
                    )}
                  </div>
                  <span>{t('flowStep3')}</span>
                  <span className="text-[10px] font-bold mt-0.5">
                    {selectedReport.status === 'completed' ? t('flowStep3Sub') : (lang === 'bn' ? 'পর্যালোচনা চলছে' : 'In Review')}
                  </span>
                </div>
                <div className={`p-3 rounded-2xl border-2 font-black text-xs flex flex-col items-center ${
                  selectedReport.status === 'completed'
                    ? 'bg-blue-50 border-blue-200 text-blue-900'
                    : 'bg-slate-50 border-slate-200 text-slate-500'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 text-white ${
                    selectedReport.status === 'completed' ? 'bg-blue-600' : 'bg-slate-400'
                  }`}>
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <span>{t('flowStep4')}</span>
                  <span className="text-[10px] font-bold mt-0.5">
                    {selectedReport.status === 'completed' ? t('flowStep4Sub') : (lang === 'bn' ? 'অপেক্ষমাণ' : 'Pending')}
                  </span>
                </div>
              </div>
            </div>

            {/* Printable Official Medical Lab Report */}
            <div className="bg-white rounded-3xl border-4 border-slate-300 shadow-2xl overflow-hidden p-6 sm:p-10 printable-card relative">
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <span className="text-8xl font-black text-slate-900 rotate-[-30deg]">DEL PATHOLOGY LAB</span>
              </div>

              {/* Header Letterhead */}
              <div className="border-b-4 border-slate-900 pb-6 relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-900 via-indigo-900 to-blue-800 text-white flex items-center justify-center font-black text-2xl shadow-md">
                      DEL
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#0B192C]">{t('slipHospitalName')}</h3>
                      <p className="text-xs font-bold text-slate-600">
                        {lang === 'bn' ? 'মিরপুর-১০, গোলচত্বর, ঢাকা-১২১৬ | জরুরি হেল্পলাইন: ১৬২৬৩' : 'Mirpur-10, Dhaka-1216 | Emergency Hotline: 16263'}
                      </p>
                      <p className="text-xs text-teal-800 font-extrabold mt-0.5">{t('repDeptTitle')}</p>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end">
                    <div className="font-mono text-xs font-black text-slate-900 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-300">
                      {lang === 'bn' ? 'ইনভয়েস' : 'Invoice'}: {selectedReport.invoiceId}
                    </div>
                    <span className="mt-2 text-xs font-black px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 inline-block">
                      {lang === 'bn' ? selectedReport.statusBangla : (selectedReport.status === 'completed' ? 'Report Ready & Verified' : 'Testing in Progress')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Patient Demographics */}
              <div className="my-6 p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs relative z-10">
                <div>
                  <span className="text-slate-500 font-bold block">{lang === 'bn' ? 'রোগীর পুরো নাম' : 'Patient Name'}</span>
                  <strong className="text-sm font-black text-[#0B192C]">{selectedReport.patientName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-bold block">{lang === 'bn' ? 'বয়স ও লিঙ্গ' : 'Age & Gender'}</span>
                  <strong className="text-slate-900 font-black text-sm">{selectedReport.age} | {selectedReport.gender}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-bold block">{lang === 'bn' ? 'স্যাম্পল গ্রহণের তারিখ' : 'Collection Date'}</span>
                  <strong className="text-slate-900 font-bold">{selectedReport.testDate}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-bold block">{lang === 'bn' ? 'রিপোর্ট ডেলিভারি' : 'Delivery Date'}</span>
                  <strong className="text-slate-900 font-bold">{selectedReport.deliveryDate}</strong>
                </div>
                <div className="col-span-2 sm:col-span-4 pt-3 border-t border-slate-200">
                  <span className="text-slate-500 font-bold">{lang === 'bn' ? 'রেফার্ড কনসালটেন্ট' : 'Referred Doctor'}: </span>
                  <strong className="text-blue-900 font-black">{selectedReport.referredDoctor}</strong>
                </div>
              </div>

              {/* Test Name Title */}
              <div className="mb-4 flex items-center justify-between relative z-10">
                <div>
                  <h4 className="text-xl font-black text-[#0B192C] flex items-center gap-2">
                    <Activity className="w-5 h-5 text-teal-700" />
                    <span>{selectedReport.testTitle}</span>
                  </h4>
                  <p className="text-xs text-slate-500 font-semibold">{selectedReport.department}</p>
                </div>
              </div>

              {/* Parameters Table */}
              <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 relative z-10">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 font-black border-b-2 border-slate-200">
                      <th className="p-3.5">{t('repTableHeaderName')}</th>
                      <th className="p-3.5">{t('repTableHeaderResult')}</th>
                      <th className="p-3.5">{t('repTableHeaderUnit')}</th>
                      <th className="p-3.5">{t('repTableHeaderNormal')}</th>
                      <th className="p-3.5 text-center">{t('repTableHeaderStatus')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-slate-100">
                    {selectedReport.parameters.map((param, idx) => {
                      let badgeClass = 'bg-emerald-100 text-emerald-900 border-emerald-300';
                      if (param.status === 'high') badgeClass = 'bg-rose-100 text-rose-900 border-rose-300 font-black';
                      if (param.status === 'low') badgeClass = 'bg-amber-100 text-amber-900 border-amber-300 font-black';
                      if (param.status === 'pending') badgeClass = 'bg-slate-100 text-slate-700 border-slate-300';

                      let label = param.statusLabel;
                      if (lang === 'en') {
                        if (param.status === 'high') label = 'High / Elevated';
                        else if (param.status === 'low') label = 'Low / Deficient';
                        else if (param.status === 'normal') label = 'Normal';
                        else label = 'Processing';
                      }

                      return (
                        <tr key={idx} className="hover:bg-teal-50/40 transition-colors">
                          <td className="p-3.5 font-black text-[#0B192C]">{param.name}</td>
                          <td className="p-3.5 font-black text-base text-slate-900">
                            {param.result}
                          </td>
                          <td className="p-3.5 text-slate-600 font-mono text-xs">{param.unit}</td>
                          <td className="p-3.5 text-slate-600 font-bold">{param.referenceRange}</td>
                          <td className="p-3.5 text-center">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-black border ${badgeClass}`}>
                              {label}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pathologist Clinical Summary Comment */}
              {selectedReport.clinicalSummary && (
                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-teal-50 to-emerald-50 border-2 border-teal-200 text-xs text-blue-950 relative z-10">
                  <div className="font-black flex items-center gap-1.5 mb-1.5 text-blue-900 text-sm">
                    <ShieldCheck className="w-5 h-5 text-teal-700" />
                    {t('pathologistComment')}
                  </div>
                  <p className="leading-relaxed text-slate-800 font-semibold">{selectedReport.clinicalSummary}</p>
                </div>
              )}

              {/* Doctor Signatures & Verification Seal */}
              <div className="mt-10 pt-6 border-t-2 border-slate-200 grid grid-cols-2 sm:grid-cols-3 items-end gap-4 text-center relative z-10">
                <div className="text-left text-xs">
                  <div className="font-mono text-slate-500 font-bold">QR VERIFIED</div>
                  <div className="w-20 h-20 bg-slate-100 border-2 border-slate-300 rounded-xl flex flex-col items-center justify-center text-[10px] text-slate-600 font-mono">
                    <Award className="w-6 h-6 text-teal-700 mb-1" />
                    <span>[VERIFIED]</span>
                  </div>
                </div>

                <div className="text-xs text-slate-600">
                  <div className="font-bold">{t('signedAndVerified')}</div>
                  <div className="font-mono text-blue-900 text-xs font-black mt-2">Dr. Shahed Ahmed, MD</div>
                  <div className="font-black text-[#0B192C]">{selectedReport.pathologist}</div>
                </div>

                <div className="text-right text-xs text-slate-500 col-span-2 sm:col-span-1">
                  <span className="inline-block px-3.5 py-1.5 bg-teal-100 border border-teal-300 text-teal-900 font-black rounded-xl">
                    ISO 15189 Accredited Lab
                  </span>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="mt-8 pt-6 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-3 no-print relative z-10">
                <div className="text-xs text-slate-500 font-bold">
                  {t('officialDisclaimer')}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-black text-sm shadow-md transition-all"
                  >
                    <Printer className="w-4 h-4" />
                    <span>{t('btnPrintPdf')}</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onBookDoctorWithReport) {
                        onBookDoctorWithReport();
                      }
                    }}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-700 hover:to-emerald-800 text-white font-black text-sm shadow-md transition-all"
                  >
                    <Stethoscope className="w-4 h-4" />
                    <span>{t('btnShowDoctor')}</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
