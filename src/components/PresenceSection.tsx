"use client";

import { useState } from "react";
import { MapPin, Globe, Zap, Navigation as NavIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StateType = "MP" | "UP" | "RJ";

const mpCities = [
  "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", 
  "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Indore", 
  "Jabalpur", "Jhabua", "Katni", "Khandwa (East Nimar)", "Khargone (West Nimar)", "Maihar", "Mandla", "Mandsaur", 
  "Morena", "Narmadapuram (Hoshangabad)", "Narsinghpur", "Neemuch", "Niwari", "Panna", "Raisen", "Rajgarh", 
  "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", 
  "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"
];

const upCities = [
  "Agra", "Jhansi", "Etawah", "Firozabad", "Mainpuri", "Kannauj", "Orai", "Jalaun", "Kanpur", "Farrukhabad", "Shikohabad"
];

const rjCities = [
  "Dholpur", "Karauli", "Bharatpur", "Hindaun", "Gangapur City", "Sawai Madhopur"
];

export function PresenceSection() {
  const [activeState, setActiveState] = useState<StateType>("MP");

  return (
    <section className="py-20 lg:py-32 bg-slate-50/50 relative overflow-hidden" id="presence">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="#0ab99d" strokeWidth="0.5" />
          <path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="#0ab99d" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ab99d]/10 text-[#0ab99d] border border-[#0ab99d]/20 mb-6">
            <Globe className="h-4 w-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Live Network</span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-[1.1]">
            Our <span className="text-[#0ab99d]">Presence</span>
          </h2>
          <p className="text-slate-500 text-sm lg:text-xl max-w-2xl mx-auto font-medium mb-10">
            Expanding across Central & North India with professional scrap solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 rounded-2xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0ab99d]/10 flex items-center justify-center text-[#0ab99d]">
                <Zap className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xl font-black text-slate-900 leading-none italic">50+</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Cities Active</p>
              </div>
            </div>
            <div className="px-6 py-3 rounded-2xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0ab99d]/10 flex items-center justify-center text-[#0ab99d]">
                <NavIcon className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xl font-black text-slate-900 leading-none italic">3</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">States Covered</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-24 z-30 mb-12">
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40 flex">
            {(["MP", "UP", "RJ"] as StateType[]).map((state) => (
              <button
                key={state}
                onClick={() => setActiveState(state)}
                className={cn(
                  "flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300",
                  activeState === state 
                    ? "bg-[#0ab99d] text-white shadow-lg shadow-[#0ab99d]/20 scale-[1.02]" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                {state === "MP" ? "Madhya Pradesh" : state === "UP" ? "Uttar Pradesh" : "Rajasthan"}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[500px]">
          {activeState === "MP" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {mpCities.map((city) => (
                  <CityCard key={city} name={city} />
                ))}
                <div className="p-4 rounded-2xl bg-slate-100/50 border border-dashed border-slate-300 flex items-center justify-center opacity-60">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Expanding Soon...</span>
                </div>
              </div>
            </div>
          )}

          {activeState === "UP" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {upCities.map((city) => (
                  <CityCard key={city} name={city} />
                ))}
              </div>
            </div>
          )}

          {activeState === "RJ" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {rjCities.map((city) => (
                  <CityCard key={city} name={city} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-20 relative h-[400px] lg:h-[600px] bg-white/50 rounded-[3rem] border border-slate-200 overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,185,157,0.05),transparent)]"></div>
          <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.737156942474!2d78.22157487538965!3d26.064094777161834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976be0027f310f7%3A0xc6c766785e2580a1!2sShivam%20Disposal%20RVSF%20Gwalior%20%7C%20Government%20Authorized!5e0!3m2!1sen!2sin!4v1740120000000!5m2!1sen!2sin"
              className="w-full h-full rounded-[2rem] border-0 shadow-2xl relative z-20"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shivam Disposal Location"
            ></iframe>
          </div>

          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end pointer-events-none">
            <div className="max-w-xs bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-100 relative z-30 pointer-events-auto">
              <h5 className="text-lg font-black text-slate-900 uppercase italic tracking-tight mb-2">Expanding Every Week</h5>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Visit our authorized facility for professional vehicle recycling and instant legal documentation.
              </p>
            </div>
            <div className="flex gap-2 relative z-30">
              <div className="w-2 h-2 rounded-full bg-[#0ab99d]"></div>
              <div className="w-2 h-2 rounded-full bg-[#0ab99d]/30"></div>
              <div className="w-2 h-2 rounded-full bg-[#0ab99d]/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CityCard({ name }: { name: string }) {
  return (
    <div className="group p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#0ab99d]/5 hover:border-[#0ab99d]/30 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-[#0ab99d]/10 flex items-center justify-center text-slate-400 group-hover:text-[#0ab99d] transition-colors">
          <MapPin className="h-4 w-4" />
        </div>
        <span className="text-xs lg:text-sm font-black text-slate-700 uppercase italic tracking-tight leading-tight">{name}</span>
      </div>
    </div>
  );
}
