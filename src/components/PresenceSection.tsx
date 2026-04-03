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

        <div className="mt-20 relative h-[300px] lg:h-[500px] bg-white/50 rounded-[3rem] border border-slate-200 overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,185,157,0.05),transparent)]"></div>
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative w-full max-w-3xl aspect-[1.2/1] bg-slate-100/30 rounded-3xl border border-slate-200/50 flex items-center justify-center">
              <span className="text-sm font-black text-slate-300 uppercase tracking-[0.5em] italic">North Central Coverage Map</span>
              <div className="absolute top-[45%] left-[45%]">
                <div className="relative flex h-8 w-8">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ab99d] opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-8 w-8 bg-[#0ab99d]/20 border border-[#0ab99d] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#0ab99d] rounded-full"></div>
                  </span>
                </div>
              </div>
              <div className="absolute top-[35%] left-[55%] animate-pulse delay-75">
                <div className="w-3 h-3 bg-[#0ab99d]/40 rounded-full border border-[#0ab99d]/60"></div>
              </div>
              <div className="absolute top-[55%] left-[35%] animate-pulse delay-150">
                <div className="w-3 h-3 bg-[#0ab99d]/40 rounded-full border border-[#0ab99d]/60"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
            <div className="max-w-xs">
              <h5 className="text-lg font-black text-slate-900 uppercase italic tracking-tight mb-2">Expanding Every Week</h5>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                We are rapidly adding new collection centers to provide even faster vehicle pickups and legal documentation.
              </p>
            </div>
            <div className="flex gap-2">
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
