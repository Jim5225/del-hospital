import React from 'react';
import { 
  Heart, 
  Activity, 
  ShieldAlert, 
  Layers, 
  Eye, 
  Baby, 
  Microscope, 
  Syringe,
  ArrowRight
} from 'lucide-react';

export default function Departments({ onSelectDept }) {
  const departmentsList = [
    {
      id: 'cardiac',
      title: 'কার্ডিয়াক কেয়ার ও ক্যাথল্যাব',
      desc: 'সর্বাধুনিক এনজিওগ্রাম, এনজিওপ্লাস্টি (রিং পরানো), পেসমেকার ও ২৪/৭ জরুরি হার্ট অ্যাটাক সেবা।',
      icon: Heart,
      color: 'from-rose-500 to-red-600',
      tag: '২৪ ঘন্টা ক্যাথল্যাব'
    },
    {
      id: 'icu',
      title: 'আইসিইউ ও সিসিইউ (ICU / CCU)',
      desc: 'আন্তর্জাতিক মানের সেন্ট্রাল ভেন্টিলেটর, মাল্টিপ্যারা মনিটরিং ও ডেডিকেটেড ক্রিটিক্যাল কেয়ার ডাক্তার।',
      icon: Activity,
      color: 'from-blue-600 to-indigo-700',
      tag: 'সর্বোচ্চ আইসোলেশন'
    },
    {
      id: 'diagnostic',
      title: 'রেডিওলজি ও ডিজিটাল ইমেজিং',
      desc: '1.5 Tesla MRI, ১২৮ স্লাইস আল্ট্রাফাস্ট সিটি স্ক্যান, ৪ডি আল্ট্রাসাউন্ড ও ডিজিটাল এক্স-রে।',
      icon: Layers,
      color: 'from-teal-600 to-emerald-700',
      tag: '১০০% ডিজিটাল ল্যাব'
    },
    {
      id: 'ot',
      title: 'ল্যামিনার ফ্লো মডুলার ওটি',
      desc: 'শতভাগ জীবাণুমুক্ত ফিল্ট্রেশন সম্পন্ন অপারেশন থিয়েটার, অর্থোপেডিক ও নিউরো সার্জারি।',
      icon: ShieldAlert,
      color: 'from-cyan-600 to-blue-700',
      tag: 'সংক্রমণমুক্ত ওটি'
    },
    {
      id: 'nicu',
      title: 'এনআইসিইউ ও শিশু পরিচর্যা',
      desc: 'অপরিণত ও কম ওজনের নবজাতকের জন্য ফটোথেরাপি, ইনকিউবেটর ও সার্বক্ষণিক শিশুরোগ বিশেষজ্ঞ।',
      icon: Baby,
      color: 'from-purple-500 to-indigo-600',
      tag: 'বিশেষ যত্ন'
    },
    {
      id: 'pathology',
      title: 'অটোমেটেড মলিকুলার ল্যাব',
      desc: 'রোবটিক বায়োকেমিস্ট্রি বিশ্লেষক দ্বারা কম সময়ে নির্ভুল রক্ত, হরমোন ও হিস্টোপ্যাথলজি পরীক্ষা।',
      icon: Microscope,
      color: 'from-amber-600 to-orange-600',
      tag: 'দ্রুত রিপোর্ট'
    },
  ];

  return (
    <section id="departments" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold mb-3">
            <Layers className="w-4 h-4 text-blue-700" />
            <span>সেন্টার অফ এক্সিলেন্স</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C]">
            হাসপাতালের প্রধান বিশেষায়িত বিভাগসমূহ
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            রোগীর জীবন রক্ষার্থে আমাদের রয়েছে বিশ্বমানের অবকাঠামো, উচ্চপ্রযুক্তির চিকিৎসা যন্ত্রপাতি এবং অভিজ্ঞ টিম।
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentsList.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                className="bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-600 p-6 shadow-soft hover:shadow-elevated transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${dept.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg">
                      {dept.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B192C] group-hover:text-blue-700 transition-colors">
                    {dept.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {dept.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                  <span>আন্তর্জাতিক প্রটোকল অনুসরণ</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
