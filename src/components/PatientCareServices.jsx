import React from 'react';
import { 
  HeartHandshake, 
  Home, 
  Pill, 
  Video, 
  Clock, 
  Users, 
  ShieldCheck, 
  Sparkles,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';

export default function PatientCareServices({ onBookHomeSample, onTelemedicine }) {
  const patientServices = [
    {
      id: 'wheelchair',
      title: 'ফ্রি হুইলচেয়ার ও সহকারী সেবা',
      desc: 'হাসপাতালে প্রবেশের সাথে সাথেই বয়োজ্যেষ্ঠ, গর্ভবতী মা ও গুরুতর অসুস্থ রোগীদের জন্য বিনামূল্যে হুইলচেয়ার ও ডেডিকেটেড সহকারী প্রদান করা হয়।',
      icon: HeartHandshake,
      badge: '১০০% ফ্রি সেবা',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'homesample',
      title: 'বাসা থেকে ল্যাব স্যাম্পল কালেকশন',
      desc: 'বৃদ্ধ বা বিছানাগত রোগীদের আর হাসপাতালে আসার কষ্ট নেই। আমাদের প্রশিক্ষিত ফ্লেবোটোমিস্ট আপনার বাসায় গিয়ে রক্ত ও প্রস্রাবের নমুনা সংগ্রহ করবে।',
      icon: Home,
      badge: 'হোম সার্ভিস',
      badgeColor: 'bg-blue-100 text-blue-800',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      id: 'pharmacy',
      title: '২৪/৭ জেনুইন ফার্মেসি ও হোম ডেলিভারি',
      desc: 'শতভাগ মানসম্মত ও কোল্ড-চেইন সংরক্ষিত জীবনরক্ষাকারী অ্যান্টিবায়োটিক, ইনসুলিন ও ক্যান্সার প্রতিরোধী ওষুধ যেকোনো সময় সরবরাহ করা হয়।',
      icon: Pill,
      badge: '২৪ ঘন্টা খোলা',
      badgeColor: 'bg-rose-100 text-rose-800',
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      id: 'telemedicine',
      title: 'অনলাইন ভিডিও টেলিমেডিসিন',
      desc: 'গ্রাম কিংবা দূর-দূরান্ত থেকে দেশের শীর্ষস্থানীয় প্রফেসরদের সাথে এইচডি ভিডিও কনসালটেশন ও ডিজিটাল প্রেসক্রিপশন গ্রহণ করার সহজ সুবিধা।',
      icon: Video,
      badge: 'ডিজিটাল চেম্বার',
      badgeColor: 'bg-purple-100 text-purple-800',
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      id: 'priority',
      title: 'মা ও শিশুর বিশেষ প্রায়োরিটি ডেস্ক',
      desc: 'শিশুরোগী ও গর্ভবতী মায়েদের জন্য দীর্ঘ লাইনে অপেক্ষা ছাড়াই দ্রুত টিকেট ও ডক্টরস চেম্বারে প্রবেশের অগ্রাধিকার নিশ্চিত করা হয়।',
      icon: Users,
      badge: 'জিরো ওয়েটিং',
      badgeColor: 'bg-amber-100 text-amber-900',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      id: 'hotline',
      title: 'রোগীর পরামর্শ ও হেল্পডেস্ক (২৪/৭)',
      desc: 'কোন ডাক্তার দেখাবেন, টেস্টের প্রস্তুতি কী—যেকোনো দ্বিধায় আমাদের পেশেন্ট কেয়ার এক্সিকিউটিভরা ফোন ও হোয়াটসঅ্যাপে সদা প্রস্তুত।',
      icon: PhoneCall,
      badge: 'লাইভ সাপোর্ট',
      badgeColor: 'bg-sky-100 text-sky-800',
      gradient: 'from-sky-500 to-blue-700',
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-xs sm:text-sm font-bold shadow-sm mb-3">
            <Sparkles className="w-4 h-4" />
            <span>রোগীবান্ধব সুযোগ-সুবিধা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C]">
            রোগীর প্রতিটি পদক্ষেপে আমাদের সর্বোচ্চ যত্ন
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            চিকিৎসার চেয়ে রোগীর মানসিক স্বস্তি ও পরিবারের নির্ভারতা আমাদের কাছে সবার আগে। আমরা নিশ্চিত করি পারিবারিক উষ্ণতা।
          </p>
        </div>

        {/* 6 Cards Grid with Warm, Colorful Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patientServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-slate-50/80 hover:bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${service.badgeColor} shadow-xs`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B192C] group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>বিনামূল্যে যেকোনো সময় সহায়ক টিম উপস্থিত</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Friendly Reassurance Banner */}
        <div className="mt-12 bg-gradient-to-r from-teal-50 via-blue-50 to-indigo-50 border-2 border-teal-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-black text-[#0B192C]">বাসায় বসেই রক্ত পরীক্ষার স্যাম্পল দিতে চান?</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">আমাদের অভিজ্ঞ ল্যাব টেকনিশিয়ান আপনার সুবিধামতো সময়ে বাড়ি গিয়ে স্যাম্পল নিয়ে আসবে।</p>
            </div>
          </div>

          <a
            href="tel:16263"
            className="whitespace-nowrap px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-black text-sm shadow-md transition-colors flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>হোম সার্ভিসের জন্য কল করুন: ১৬২৬৩</span>
          </a>
        </div>

      </div>
    </section>
  );
}
