import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'ফারুক আহমেদ (ব্যবসায়ী)',
      location: 'মিরপুর-১, ঢাকা',
      dept: 'কার্ডিওলজি বিভাগ',
      review: 'আমার বাবার হঠাৎ হার্ট অ্যাটাকের সময় ডেল হাসপাতালের এমার্জেন্সি ও সিসিইউ টিমের দ্রুত পদক্ষেপ জীবন রক্ষা করেছে। অনলাইন রিপোর্ট সিস্টেমের কারণে রিপোর্ট আনতে আর লাইনে দাঁড়াতে হয়নি।',
      rating: 5,
      date: '১২ সেপ্টেম্বর, ২০২৬'
    },
    {
      name: 'সুলতানা পারভীন (শিক্ষিকা)',
      location: 'উত্তরা, ঢাকা',
      dept: 'গাইনোকোলজি ও মাতৃত্ব সেবা',
      review: 'ডা. ফারহানা জামান ম্যাডামের আন্তরিক পরামর্শ ও হাসপাতালের চমৎকার পরিবেশ আমাদের প্রথম সন্তানের প্রসবে মানসিক প্রশান্তি দিয়েছে। নার্সদের সেবা অতুলনীয়।',
      rating: 5,
      date: '৮ সেপ্টেম্বর, ২০২৬'
    },
    {
      name: 'আশরাফুল ইসলাম (সফটওয়্যার ইঞ্জিনিয়ার)',
      location: 'ধানমন্ডি, ঢাকা',
      dept: 'ডায়াগনস্টিক ও ল্যাব',
      review: 'অনলাইনে সিরিয়াল নেওয়ার প্রসেস খুবই সহজ এবং টেস্টের ৩ ঘন্টার মধ্যে মোবাইলে এসএমএস ও ইনভয়েস দিয়ে পুরো রিপোর্ট পিডিএফ পেয়েছি। সত্যি বিশ্বমানের সেবা!',
      rating: 5,
      date: '১৫ সেপ্টেম্বর, ২০২৬'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
            রোগীদের অভিজ্ঞতা
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C] mt-2">
            রোগী ও তাদের পরিবারের আস্থা
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            প্রতিটি মানুষের সুস্থতা ও স্বস্তি নিশ্চিত করাই ডেল হাসপাতালের প্রধান লক্ষ্য।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-soft hover:shadow-elevated transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blue-200" />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[#0B192C]">{rev.name}</div>
                  <div className="text-xs text-slate-500">{rev.location}</div>
                </div>
                <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-2 py-1 rounded-md">
                  {rev.dept}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
