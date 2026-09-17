import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SymptomsHelper from './components/SymptomsHelper';
import AppointmentSection from './components/AppointmentSection';
import ReportPortal from './components/ReportPortal';
import PatientCareServices from './components/PatientCareServices';
import DoctorsDirectory from './components/DoctorsDirectory';
import Departments from './components/Departments';
import BmiCalculator from './components/BmiCalculator';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { 
  PhoneCall, 
  ArrowUp, 
  MessageCircle, 
  Ambulance, 
  HeartHandshake, 
  X, 
  HelpCircle,
  Clock,
  CheckCircle2,
  Calendar,
  FileText
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [prefilledDept, setPrefilledDept] = useState(null);
  const [highContrast, setHighContrast] = useState(false);
  const [largeFont, setLargeFont] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [patientChatOpen, setPatientChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBookDoctor = (doc) => {
    setSelectedDoctorId(doc.id);
    scrollToSection('appointment');
  };

  const handleSelectSymptom = (symptom) => {
    setPrefilledDept(symptom.deptId);
    scrollToSection('appointment');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${
      highContrast 
        ? 'bg-slate-900 text-white selection:bg-yellow-400 selection:text-black contrast-more' 
        : 'bg-[#F8FAFC] text-[#0F172A]'
    } ${largeFont ? 'text-lg' : 'text-base'}`}>
      
      {/* Main Responsive Navbar */}
      <Navbar
        onNavigate={scrollToSection}
        activeSection={activeSection}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        largeFont={largeFont}
        setLargeFont={setLargeFont}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div id="home">
          <Hero onNavigate={scrollToSection} />
        </div>

        {/* Patient-Friendly Symptoms Helper */}
        <div id="symptoms">
          <SymptomsHelper onSelectSymptom={handleSelectSymptom} />
        </div>

        {/* Doctor Appointment Booking Section */}
        <div id="appointment">
          <AppointmentSection 
            key={`${selectedDoctorId}-${prefilledDept}`} 
            initialDoctorId={selectedDoctorId} 
            prefilledDept={prefilledDept} 
          />
        </div>

        {/* Patient Online Lab Report Portal */}
        <div id="reports">
          <ReportPortal onBookDoctorWithReport={() => scrollToSection('appointment')} />
        </div>

        {/* Patient Care & Special Amenities */}
        <div id="patient-services">
          <PatientCareServices 
            onBookHomeSample={() => scrollToSection('appointment')} 
            onTelemedicine={() => scrollToSection('appointment')} 
          />
        </div>

        {/* Full Doctors Directory */}
        <div id="doctors">
          <DoctorsDirectory onBookDoctor={handleBookDoctor} />
        </div>

        {/* Specialized Hospital Departments */}
        <div id="departments">
          <Departments onSelectDept={() => scrollToSection('appointment')} />
        </div>

        {/* Interactive BMI Health Calculator */}
        <div id="calculator">
          <BmiCalculator onConsultDoctor={() => scrollToSection('appointment')} />
        </div>

        {/* Patient Reviews & Stories */}
        <Testimonials />
      </main>

      {/* Patient Friendly Floating Help Desk Widget */}
      <div className="fixed bottom-6 left-6 z-40 no-print">
        {patientChatOpen ? (
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-emerald-400 p-5 max-w-sm w-80 animate-in zoom-in-95 duration-200 text-slate-900">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-sm text-[#0B192C]">রোগী সহায়তা ডেস্ক</h4>
                  <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    অনলাইন সহকারী সক্রিয়
                  </p>
                </div>
              </div>
              <button
                onClick={() => setPatientChatOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-3 font-medium">
              আসসালামু আলাইকুম! কোনো ডাক্তার নির্বাচন বা টেস্ট রিপোর্ট নিয়ে কোনো সমস্যা হচ্ছে? আমরা সাহায্য করতে প্রস্তুত।
            </p>

            <div className="space-y-2">
              <button
                onClick={() => { setPatientChatOpen(false); scrollToSection('symptoms'); }}
                className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2 transition-colors"
              >
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>লক্ষণ দেখে ডাক্তার বাছাই করতে চাই</span>
              </button>

              <button
                onClick={() => { setPatientChatOpen(false); scrollToSection('reports'); }}
                className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2 transition-colors"
              >
                <FileText className="w-4 h-4 text-teal-600" />
                <span>আমার টেস্টের রিপোর্ট দেখতে চাই</span>
              </button>

              <a
                href="tel:16263"
                className="w-full p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center justify-center gap-2 transition-colors shadow"
              >
                <PhoneCall className="w-4 h-4" />
                <span>সরাসরি ১৬২৬৩ নম্বরে কল করুন</span>
              </a>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setPatientChatOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            aria-label="রোগী সহায়তা"
          >
            <HeartHandshake className="w-5 h-5 text-yellow-300 animate-bounce" />
            <span className="hidden sm:inline">সহায়তা প্রয়োজন?</span>
          </button>
        )}
      </div>

      {/* Floating Action Buttons (Right side: Emergency Call & Scroll to Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 no-print">
        {/* Quick Emergency Call Floating Button */}
        <a
          href="tel:16263"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all group"
          title="জরুরি হটলাইনে কল করুন"
          aria-label="হটলাইন ১৬২৬৩"
        >
          <PhoneCall className="w-6 h-6 animate-pulse" />
          <span className="hidden group-hover:block absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow">
            হটলাইন ১৬২৬৩
          </span>
        </a>

        {/* Back To Top Floating Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-300 flex items-center justify-center shadow-lg transition-all"
            aria-label="উপরে যান"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
