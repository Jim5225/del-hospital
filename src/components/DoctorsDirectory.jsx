import React, { useState } from 'react';
import { 
  Stethoscope, 
  Search, 
  Star, 
  CalendarCheck, 
  Clock, 
  Award, 
  MapPin, 
  Filter,
  CheckCircle,
  X,
  Phone
} from 'lucide-react';
import { DOCTORS_DATA, DEPARTMENTS } from '../data/doctorsData';

export default function DoctorsDirectory({ onBookDoctor }) {
  const [selectedDept, setSelectedDept] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoctorModal, setSelectedDoctorModal] = useState(null);

  const filteredDoctors = DOCTORS_DATA.filter(doc => {
    const matchesDept = selectedDept === 'all' || doc.department === selectedDept;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.deptName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.degrees.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section id="doctors" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold mb-3">
            <Stethoscope className="w-4 h-4 text-blue-700" />
            <span>অভিজ্ঞ মেডিকেল টিম</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C]">
            আমাদের প্রথিতযশা বিশেষজ্ঞ ডাক্তারবৃন্দ
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            দেশ ও বিদেশের শ্রেষ্ঠ মেডিকেল কলেজ ও হাসপাতাল থেকে উচ্চতর ডিগ্রিপ্রাপ্ত অভিজ্ঞ কনসালটেন্টদের সেবা গ্রহণ করুন।
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ডাক্তারের নাম দিয়ে খুঁজুন..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium bg-white focus:border-blue-600 text-slate-900"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
            {DEPARTMENTS.slice(0, 5).map(dept => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedDept === dept.id
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map(doc => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-600 shadow-soft hover:shadow-elevated transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-blue-900/90 backdrop-blur-sm text-white text-[11px] font-bold">
                    {doc.deptName}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 bg-white/95 px-2 py-0.5 rounded-md text-xs font-extrabold text-amber-600 flex items-center gap-1 shadow">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{doc.rating}</span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-base text-[#0B192C] group-hover:text-blue-700 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{doc.degrees}</p>
                  
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-semibold">{doc.experience}</span>
                    <span className="text-emerald-700 font-black text-sm">৳ {doc.fee}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => onBookDoctor(doc)}
                    className="w-full py-2.5 px-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>অ্যাপয়েন্টমেন্ট নিন</span>
                  </button>

                  <button
                    onClick={() => setSelectedDoctorModal(doc)}
                    className="w-full py-1.5 text-slate-600 hover:text-blue-700 font-bold text-xs transition-colors"
                  >
                    বিস্তারিত প্রোফাইল দেখুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Bio Modal */}
        {selectedDoctorModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
              <button
                onClick={() => setSelectedDoctorModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 mb-4">
                <img
                  src={selectedDoctorModal.image}
                  alt={selectedDoctorModal.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-100"
                />
                <div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {selectedDoctorModal.deptName}
                  </span>
                  <h3 className="text-lg font-black text-[#0B192C] mt-1">{selectedDoctorModal.name}</h3>
                  <p className="text-xs text-slate-600">{selectedDoctorModal.degrees}</p>
                  <p className="text-xs text-slate-500 mt-0.5">বিএমডিসি নম্বর: {selectedDoctorModal.bmdcNo}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 mb-4">
                <div>
                  <span className="font-bold text-slate-900">বিশেষ অভিজ্ঞতা ও কর্মক্ষেত্র:</span>
                  <p className="mt-1 leading-relaxed">{selectedDoctorModal.bio}</p>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between">
                  <span>চেম্বার: <strong className="text-slate-900">{selectedDoctorModal.room}</strong></span>
                  <span>ভিজিট: <strong className="text-emerald-700 font-bold">৳ {selectedDoctorModal.fee}</strong></span>
                </div>
              </div>

              <button
                onClick={() => {
                  const doc = selectedDoctorModal;
                  setSelectedDoctorModal(null);
                  onBookDoctor(doc);
                }}
                className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
              >
                এই ডাক্তারের সাথে সিরিয়াল বুক করুন
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
