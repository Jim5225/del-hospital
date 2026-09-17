import React, { useState } from 'react';
import { Activity, Heart, ArrowRight, CheckCircle2, AlertTriangle, Info } from 'lucide-react';

export default function BmiCalculator({ onConsultDoctor }) {
  const [weightKg, setWeightKg] = useState('68');
  const [heightFeet, setHeightFeet] = useState('5');
  const [heightInches, setHeightInches] = useState('6');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBmi = (e) => {
    e.preventDefault();

    const w = parseFloat(weightKg);
    const feet = parseFloat(heightFeet);
    const inches = parseFloat(heightInches);

    if (isNaN(w) || isNaN(feet) || isNaN(inches) || w <= 0) {
      return;
    }

    const totalMeters = ((feet * 12) + inches) * 0.0254;
    const bmiVal = (w / (totalMeters * totalMeters)).toFixed(1);

    let category = '';
    let categoryBangla = '';
    let color = '';
    let recommendation = '';

    if (bmiVal < 18.5) {
      category = 'underweight';
      categoryBangla = 'স্বাভাবিকের চেয়ে কম ওজন (Underweight)';
      color = 'text-amber-600 bg-amber-50 border-amber-200';
      recommendation = 'পুষ্টিকর খাদ্য গ্রহণ করুন এবং ডাক্তারের পরামর্শ অনুযায়ী ওজন বৃদ্ধির ডায়েট চার্ট অনুসরণ করুন।';
    } else if (bmiVal >= 18.5 && bmiVal <= 24.9) {
      category = 'normal';
      categoryBangla = 'আদর্শ ও স্বাস্থ্যকর ওজন (Normal)';
      color = 'text-emerald-700 bg-emerald-50 border-emerald-200';
      recommendation = 'চমৎকার! আপনার ওজন স্বাভাবিক সীমায় রয়েছে। স্বাস্থ্যকর ডায়েট ও নিয়মিত হাঁটার অভ্যাস বজায় রাখুন।';
    } else if (bmiVal >= 25 && bmiVal <= 29.9) {
      category = 'overweight';
      categoryBangla = 'অতিরিক্ত ওজন (Overweight)';
      color = 'text-orange-600 bg-orange-50 border-orange-200';
      recommendation = 'দৈনিক অন্তত ৩০ মিনিট শরীরচর্চা করুন এবং মিষ্টি ও চর্বিজাতীয় খাবার নিয়ন্ত্রণ করুন।';
    } else {
      category = 'obese';
      categoryBangla = 'স্থূলতা ও উচ্চ ঝুঁকি (Obese)';
      color = 'text-red-700 bg-red-50 border-red-200';
      recommendation = 'হৃদরোগ ও ডায়াবেটিসের ঝুঁকি এড়াতে অবিলম্বে আমাদের পুষ্টিবিদ বা বিশেষজ্ঞ ডাক্তারের পরামর্শ নিন।';
    }

    setBmiResult({
      value: bmiVal,
      category,
      categoryBangla,
      color,
      recommendation
    });
  };

  return (
    <section id="calculator" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-bold">
              <Activity className="w-4 h-4 text-teal-700" />
              <span>ইন্টারেক্টিভ হেলথ টুল</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B192C]">
              আপনার বডি ম্যাস ইনডেক্স (BMI) পরীক্ষা করুন
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              সঠিক ওজন সুস্থ জীবনের চাবিকাঠি। আপনার উচ্চতা ও ওজন দিয়ে জেনে নিন আপনি আদর্শ ওজনে আছেন কিনা এবং হৃদরোগ বা ডায়াবেটিসের কোনো ঝুঁকি রয়েছে কিনা।
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span>১৮.৫ এর নিচে = কম ওজন</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span>১৮.৫ থেকে ২৪.৯ = আদর্শ ও স্বাভাবিক ওজন</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                <span>২৫ থেকে ২৯.৯ = অতিরিক্ত ওজন</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <span className="w-3 h-3 rounded-full bg-red-600"></span>
                <span>৩০ বা তার বেশি = স্থূলতা (Obesity)</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Calculator Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-soft">
              <h3 className="text-xl font-bold text-[#0B192C] mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>BMI ক্যালকুলেটর</span>
              </h3>

              <form onSubmit={calculateBmi} className="space-y-4">
                {/* Weight */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    আপনার ওজন (কেজি / kg):
                  </label>
                  <input
                    type="number"
                    min="20"
                    max="200"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 font-bold text-slate-900 bg-white focus:border-teal-600 text-base"
                    required
                  />
                </div>

                {/* Height */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    আপনার উচ্চতা (ফুট ও ইঞ্চি):
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="relative">
                        <input
                          type="number"
                          min="3"
                          max="7"
                          value={heightFeet}
                          onChange={(e) => setHeightFeet(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 font-bold text-slate-900 bg-white focus:border-teal-600 text-base"
                          required
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">ফুট</span>
                      </div>
                    </div>
                    <div>
                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          max="11"
                          value={heightInches}
                          onChange={(e) => setHeightInches(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 font-bold text-slate-900 bg-white focus:border-teal-600 text-base"
                          required
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">ইঞ্চি</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl shadow-md transition-all text-sm mt-2"
                >
                  ফলাফল হিসাব করুন
                </button>
              </form>

              {/* BMI Output Card */}
              {bmiResult && (
                <div className={`mt-6 p-5 rounded-2xl border ${bmiResult.color} animate-in fade-in duration-200`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider block">আপনার BMI স্কোর</span>
                      <div className="text-3xl font-black mt-0.5">{bmiResult.value}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold block">স্বাস্থ্য বিভাগ</span>
                      <div className="text-sm font-extrabold">{bmiResult.categoryBangla}</div>
                    </div>
                  </div>

                  <p className="text-xs font-semibold mt-3 pt-3 border-t border-current/20 leading-relaxed">
                    {bmiResult.recommendation}
                  </p>

                  <button
                    onClick={onConsultDoctor}
                    className="mt-3 w-full py-2 bg-white/80 hover:bg-white text-slate-900 font-bold text-xs rounded-lg shadow-sm border border-slate-300 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>ডাক্তারের অ্যাপয়েন্টমেন্ট নিন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
