
"use client";

import { useState, useMemo, useEffect } from "react";
import { 
  CheckCircle2, 
  Car, 
  Bike, 
  Truck, 
  LayoutGrid, 
  User, 
  Phone, 
  CreditCard,
  Factory,
  Activity,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type VehicleType = 'car' | 'bike' | 'truck' | 'other';

const vehicleTypes = [
  { id: 'car' as const, label: 'Car', icon: Car },
  { id: 'bike' as const, label: 'Bike', icon: Bike },
  { id: 'truck' as const, label: 'Truck', icon: Truck },
  { id: 'other' as const, label: 'Other', icon: LayoutGrid }
];

const vehicleData = {
  car: {
    brands: [
      { id: "maruti", name: "Maruti Suzuki", models: ["Alto", "WagonR", "Swift", "Dzire", "Baleno", "Ertiga", "Brezza", "Grand Vitara", "Fronx", "Jimny", "Celerio", "S-Presso", "Ignis", "Ciaz", "XL6", "Eeco", "Other"] },
      { id: "tata", name: "Tata Motors", models: ["Punch", "Nexon", "Tiago", "Tigor", "Altroz", "Harrier", "Safari", "Curvv", "Indica", "Nano", "Sumo", "Other"] },
      { id: "mahindra", name: "Mahindra", models: ["Thar", "Scorpio-N", "Scorpio Classic", "XUV700", "XUV300", "Bolero", "Bolero Neo", "XUV400", "Marazzo", "Xylo", "Other"] },
      { id: "hyundai", name: "Hyundai", models: ["Creta", "Venue", "i20", "i10 Nios", "Exter", "Verna", "Alcazar", "Tucson", "Ioniq 5", "Santro", "Eon", "Other"] },
      { id: "kia", name: "Kia", models: ["Seltos", "Sonet", "Carens", "EV6", "Carnival", "Other"] },
      { id: "honda", name: "Honda", models: ["City", "Amaze", "Elevate", "Civic", "CR-V", "Jazz", "Brio", "Other"] },
      { id: "toyota", name: "Toyota", models: ["Fortuner", "Innova Hycross", "Innova Crysta", "Glanza", "Urban Cruiser Hyryder", "Hilux", "Camry", "Vellfire", "Etios", "Corolla Altis", "Other"] },
      { id: "mg", name: "MG", models: ["Hector", "Astor", "ZS EV", "Comet EV", "Gloster", "Other"] },
      { id: "renault", name: "Renault", models: ["Kwid", "Triber", "Kiger", "Duster", "Other"] },
      { id: "skoda", name: "Skoda", models: ["Kushaq", "Slavia", "Kodiaq", "Superb", "Octavia", "Rapid", "Other"] },
      { id: "vw", name: "Volkswagen", models: ["Taigun", "Virtus", "Tiguan", "Polo", "Vento", "Other"] },
      { id: "nissan", name: "Nissan", models: ["Magnite", "X-Trail", "Sunny", "Terrano", "Other"] },
      { id: "jeep", name: "Jeep", models: ["Compass", "Meridian", "Wrangler", "Grand Cherokee", "Other"] },
      { id: "citroen", name: "Citroen", models: ["C3", "C3 Aircross", "C5 Aircross", "eC3", "Other"] },
      { id: "mercedes", name: "Mercedes-Benz", models: ["C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE", "GLS", "A-Class", "Other"] },
      { id: "bmw", name: "BMW", models: ["2 Series", "3 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X7", "Other"] },
      { id: "audi", name: "Audi", models: ["A4", "A6", "A8 L", "Q3", "Q5", "Q7", "Q8", "e-tron", "Other"] },
      { id: "other", name: "Other", models: ["Other"] }
    ]
  },
  bike: {
    brands: [
      { id: "hero", name: "Hero MotoCorp", models: ["Splendor Plus", "Passion Pro", "HF Deluxe", "Glamour", "Super Splendor", "Xpulse 200", "Xtreme 160R", "Destini 125", "Maestro Edge", "Pleasure Plus", "Mavrick 440", "Other"] },
      { id: "honda_bike", name: "Honda", models: ["Activa", "Shine", "Unicorn", "SP 125", "Livo", "Hornet 2.0", "CB350", "H'ness CB350", "Dio", "Grazia", "Other"] },
      { id: "tvs", name: "TVS", models: ["Apache RTR", "Jupiter", "NTORQ 125", "Raider 125", "Sport", "Star City Plus", "Radeon", "Ronin", "iQube", "XL 100", "Other"] },
      { id: "bajaj", name: "Bajaj", models: ["Pulsar", "Platina", "CT 100", "Avenger", "Dominar", "Chetak EV", "Discover", "V15", "Other"] },
      { id: "re", name: "Royal Enfield", models: ["Classic 350", "Bullet 350", "Meteor 350", "Hunter 350", "Himalayan", "Interceptor 650", "Continental GT 650", "Thunderbird", "Other"] },
      { id: "suzuki_bike", name: "Suzuki", models: ["Access 125", "Gixxer", "Burgman Street", "V-Strom SX", "Avenis", "Hayabusa", "Other"] },
      { id: "yamaha", name: "Yamaha", models: ["MT-15", "R15", "FZ", "Fascino", "RayZR", "Aerox 155", "FZ-X", "Other"] },
      { id: "ktm", name: "KTM", models: ["Duke 200", "Duke 250", "Duke 390", "RC 200", "RC 390", "Adventure 250", "Adventure 390", "Other"] },
      { id: "kawasaki", name: "Kawasaki", models: ["Ninja 300", "Ninja 650", "Z900", "ZX-10R", "Other"] },
      { id: "jawa", name: "Jawa", models: ["Jawa 350", "42", "Perak", "Other"] },
      { id: "yezdi", name: "Yezdi", models: ["Roadster", "Scrambler", "Adventure", "Other"] },
      { id: "triumph", name: "Triumph", models: ["Speed 400", "Scrambler 400X", "Trident 660", "Tiger 900", "Other"] },
      { id: "other", name: "Other", models: ["Other"] }
    ]
  },
  truck: {
    brands: [
      { id: "tata_truck", name: "Tata Motors", models: ["Prima", "Signa", "Ultra", "LPT", "Ace", "Intra", "Yodha", "Winger", "Other"] },
      { id: "ashok_leyland", name: "Ashok Leyland", models: ["Dost", "Bada Dost", "Partner", "Ecomet", "AVTR", "Boss", "Other"] },
      { id: "mahindra_truck", name: "Mahindra", models: ["Bolero Pickup", "Supro", "Jeeto", "Blazo", "Furio", "Treo", "Other"] },
      { id: "bharatbenz", name: "BharatBenz", models: ["Medium Duty", "Heavy Duty", "Tipper", "Other"] },
      { id: "eicher", name: "Eicher", models: ["Pro 2000", "Pro 3000", "Pro 6000", "Pro 8000", "Other"] },
      { id: "volvo", name: "Volvo", models: ["FM Series", "FMX Series", "FH Series", "Other"] },
      { id: "scania", name: "Scania", models: ["R Series", "G Series", "P Series", "Other"] },
      { id: "force", name: "Force Motors", models: ["Traveller", "Trax", "Tempo Traveller", "Other"] },
      { id: "other", name: "Other", models: ["Other"] }
    ]
  },
  other: {
    brands: [{ id: "other", name: "Other", models: ["Other"] }]
  }
};

export function QuoteForm() {
  const [vehicleType, setVehicleType] = useState<VehicleType>('car');
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("");

  const currentBrands = useMemo(() => vehicleData[vehicleType].brands, [vehicleType]);
  
  const currentModels = useMemo(() => {
    if (!brand) return [];
    const selectedBrand = currentBrands.find(b => b.name === brand);
    return selectedBrand ? selectedBrand.models : [];
  }, [brand, currentBrands]);

  useEffect(() => {
    setBrand("");
    setModel("");
  }, [vehicleType]);

  useEffect(() => {
    setModel("");
  }, [brand]);

  return (
    <Card className="w-full max-w-md mx-auto relative overflow-hidden group border-white/40 dark:border-slate-800/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
      
      <CardHeader className="space-y-4 pb-4 relative z-10">
        <div className="flex justify-between items-center px-1">
          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary fill-primary/10" />
            Best Price
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary fill-primary/10" />
            Free Pickup
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary fill-primary/10" />
            Legal Papers
          </div>
        </div>

        <CardTitle className="text-xl lg:text-2xl font-black text-center text-slate-900 dark:text-white tracking-tight italic uppercase">
          Get Instant Offer
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <form action="https://formsubmit.co/Shivamdisposalrvsf@gmail.com" method="POST" className="space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New Scrap Quote Request - Shivam Disposal" />
          
          <div className="space-y-2">
            <Label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 ml-1 uppercase tracking-wider">Vehicle Type*</Label>
            <input type="hidden" name="vehicle_type" value={vehicleType} />
            <div className="grid grid-cols-4 gap-2">
              {vehicleTypes.map((type) => {
                const Icon = type.icon;
                const isActive = vehicleType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setVehicleType(type.id)}
                    type="button"
                    className={cn(
                      "flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border-2 transition-all duration-300 ease-in-out group/btn",
                      isActive 
                        ? "border-primary bg-primary/10 text-black dark:text-white shadow-md translate-y-[-2px] scale-[1.02]" 
                        : "border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-500 hover:border-slate-400 hover:text-black dark:hover:text-white hover:bg-white/80"
                    )}
                  >
                    <Icon className={cn(
                      "h-5 w-5 transition-all duration-300", 
                      isActive ? "text-black dark:text-white scale-110" : "text-slate-400 group-hover/btn:text-black dark:group-hover/btn:text-white"
                    )} />
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-wider transition-all duration-300",
                      isActive ? "text-black dark:text-white" : ""
                    )}>
                      {type.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {vehicleType === 'other' ? (
              <>
                <div className="relative">
                  <Factory className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                  <Input 
                    name="brand"
                    required
                    className="pl-10 h-11 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white placeholder:text-slate-400" 
                    placeholder="Enter Make" 
                  />
                </div>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                  <Input 
                    name="model"
                    required
                    className="pl-10 h-11 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white placeholder:text-slate-400" 
                    placeholder="Enter Model" 
                  />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-1">
                  <input type="hidden" name="brand" value={brand} />
                  <Select onValueChange={setBrand} value={brand} required name="brand_select">
                    <SelectTrigger className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 h-11 text-xs font-bold text-slate-900 dark:text-white">
                      <SelectValue placeholder="Select Make" />
                    </SelectTrigger>
                    <SelectContent className="backdrop-blur-xl">
                      {currentBrands.map((b) => (
                        <SelectItem key={b.id} value={b.name}>
                          {b.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <input type="hidden" name="model" value={model} />
                  <Select onValueChange={setModel} value={model} disabled={!brand} required name="model_select">
                    <SelectTrigger className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 h-11 text-xs font-bold text-slate-900 dark:text-white">
                      <SelectValue placeholder="Select Model" />
                    </SelectTrigger>
                    <SelectContent className="backdrop-blur-xl">
                      {currentModels.map((m) => (
                        <SelectItem key={m} value={m}>
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
              <Input 
                name="reg_no"
                required
                className="pl-10 h-11 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white placeholder:text-slate-400" 
                placeholder="Reg No" 
              />
            </div>
            <div className="relative">
              <Activity className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary z-10" />
              <input type="hidden" name="scrap_option" value={condition} />
              <Select onValueChange={setCondition} required name="condition_select">
                <SelectTrigger className="pl-10 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 h-11 text-xs font-bold text-slate-900 dark:text-white">
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                  <SelectItem value="poor">Poor</SelectItem>
                  <SelectItem value="scrap-only">Scrap Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 ml-1 uppercase tracking-wider">Vehicle Details</Label>
            <Textarea 
              name="vehicle_details"
              required
              placeholder="Tell us about engine status, major damages, or missing parts..."
              className="min-h-[60px] bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-xs font-medium resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
              <Input 
                name="user_name"
                required
                className="pl-10 h-11 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white placeholder:text-slate-400" 
                placeholder="Your Name" 
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
              <Input 
                name="phone_number"
                required
                type="tel"
                pattern="[0-9]{10}"
                minLength={10}
                maxLength={10}
                title="Please enter a valid 10-digit phone number"
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.replace(/[^0-9]/g, '');
                }}
                className="pl-10 h-11 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white placeholder:text-slate-400" 
                placeholder="Phone No" 
              />
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#3CB371] hover:bg-[#2e8b57] text-white h-14 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg shadow-green-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] border-2 border-black"
          >
            <Send className="h-5 w-5 mr-2" />
            Get Offer Now
          </Button>
          
          <p className="text-[10px] text-center text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
            Authorized Gwalior Disposal Partner
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
