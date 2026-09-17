import React from 'react';
import { 
  ShieldPlus, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Heart, 
  Ambulance, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer id="contact" className="bg-[#0B192C] text-slate-300 pt-16 pb-12 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Emergency CTA Grid */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-6 sm:p-8 mb-14 border border-blue-700/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse">
              <Ambulance className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-red-300">জরুরি অ্যাম্বুলেন্স ও ট্রমা কেয়ার</span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">যে কোনো জরুরি প্রয়োজনে কল করুন</h3>
              <p className="text-xs text-blue-200 mt-1">আইসিইউ ও সিসিইউ সাপোর্ট যুক্ত আধুনিক অ্যাম্বুলেন্স প্রস্তুত রয়েছে</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:16263"
              className="px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>১৬২৬৩ (হটলাইন)</span>
            </a>
            <a
              href="tel:09666787878"
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-blue-700" />
              <span>০৯৬৬৬-৭৮৭৮৭৮</span>
            </a>
          </div>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                <ShieldPlus className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-white">ডেল হাসপাতাল</h4>
                <p className="text-[11px] text-blue-400 font-bold">Del Specialized Hospital</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              আধুনিক স্বাস্থ্যসেবা, সর্বাধুনিক প্যাথলজি ল্যাব ও বিশ্বমানের বিশেষজ্ঞ ডাক্তারদের সমন্বয়ে একটি নির্ভরযোগ্য চিকিৎসা প্রতিষ্ঠান।
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>স্বাস্থ্য মন্ত্রণালয় ও ডিজিএইচএস অনুমোদিত</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISO 9001:2015 সনদপ্রাপ্ত</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">দ্রুত লিংক</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('appointment')} className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>ডাক্তার অ্যাপয়েন্টমেন্ট বুকিং</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reports')} className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>অনলাইন টেস্ট রিপোর্ট পোর্টাল</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doctors')} className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>বিশেষজ্ঞ ডাক্তারদের তালিকা</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('departments')} className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>আইসিইউ ও বিশেষায়িত সেবা</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>বিএমআই ক্যালকুলেটর</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">ডায়াগনস্টিক টেস্ট ও সেবা</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• ১.৫ টেসলা এমআরআই (1.5T MRI)</li>
              <li>• ১২৮ স্লাইস আল্ট্রাফাস্ট সিটি স্ক্যান</li>
              <li>• ৪ডি কালার ডপলার আল্ট্রাসনোগ্রাম</li>
              <li>• ডিজিটাল এক্স-রে ও ম্যামোগ্রাফি</li>
              <li>• মলিকুলার পিসিআর ও হেমাটোলজি ল্যাব</li>
              <li>• হোম স্যাম্পল কালেকশন সার্ভিস</li>
            </ul>
          </div>

          {/* Col 4: Address & Contact */}
          <div className="space-y-3 text-xs">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">হাসপাতালের ঠিকানা</h4>
            
            <div className="flex items-start gap-2.5 text-slate-400">
              <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>প্লট # ১২, সেকশন # ১০, গোলচত্বর মোড়, মিরপুর, ঢাকা-১২১৬, বাংলাদেশ।</span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-400">
              <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>ইমার্জেন্সি ও ল্যাব: ২৪ ঘন্টা খোলা</span>
            </div>

            <div className="flex items-center gap-2.5 text-slate-400">
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>info@delhospitalbd.com</span>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-300 block mb-1">রোগী দেখার সময়সূচী:</span>
              <p className="text-slate-400">প্রতিদিন সকাল ৯:০০ টা হতে রাত ১০:০০ টা পর্যন্ত</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} ডেল স্পেশালাইজড হাসপাতাল লিমিটেড। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">গোপনীয়তা নীতি</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">ব্যবহারের শর্তাবলী</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">রোগীর অধিকার সনদ</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
