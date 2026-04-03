import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { QuoteForm } from "@/components/QuoteForm";
import { Testimonials } from "@/components/Testimonials";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { PresenceSection } from "@/components/PresenceSection";
import { 
  CheckCircle2, 
  FileText, 
  Leaf, 
  PhoneCall, 
  ClipboardCheck,
  Truck,
  ShieldCheck, 
  Wallet,
  XCircle,
  AlertTriangle,
  TrendingDown,
  ShieldAlert,
  ArrowRight,
  ShieldCheck as Shield,
  History as HistoryIcon,
  AlertOctagon,
  Info,
  Globe,
  FileCheck,
  Mail,
  MapPin,
  Phone,
  Zap,
  ImageIcon,
  Clock
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery-"));

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Process", href: "#our-route" },
    { name: "Why Us", href: "#why-us" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
    { name: "Presence", href: "#presence" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-body transition-colors duration-300">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden" id="hero-section">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/95 lg:bg-gradient-to-r lg:from-[#0f172a]/95 lg:to-[#0f172a]/40"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-48 lg:pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider">Licensed RVSF Facility</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-6 lg:mb-8 tracking-tighter">
                Turn Your Scrap Into <span className="text-primary">Instant Cash</span>
              </h1>
              <p className="text-sm sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 mb-10 lg:mb-12 leading-relaxed font-medium">
                Gwalior's highest rates for end-of-life vehicles. We handle all paperwork, provide disposal proof, and offer free same-day collection.
              </p>
              <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="outline" className="h-16 lg:h-20 px-8 lg:px-10 bg-white/5 text-white backdrop-blur-md rounded-2xl font-bold text-lg border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2" asChild>
                  <Link href="tel:+917701088001">
                    <PhoneCall className="h-5 w-5" />
                    +91-7701088001
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 lg:h-20 px-8 lg:px-10 bg-white/5 text-white backdrop-blur-md rounded-2xl font-bold text-lg border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2" asChild>
                  <Link href="tel:+917701088002">
                    <PhoneCall className="h-5 w-5" />
                    +91-7701088002
                  </Link>
                </Button>
              </div>
            </div>

            <div id="quote-form" className="w-full max-w-md lg:mt-0 relative z-20">
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* Our Route - Process Timeline */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden" id="our-route">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-24">
              <h2 className="text-3xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
                Our <span className="text-primary">4 Step</span> Process
              </h2>
              <p className="text-slate-500 text-sm lg:text-lg max-w-2xl mx-auto font-medium">
                We handle everything from pickup to paperwork. Experience the simplest 4-step vehicle scrapping journey in the country.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 hidden lg:block -translate-x-1/2"></div>
              
              <div className="space-y-12 lg:space-y-0 relative z-10">
                {[
                  {
                    title: "Request a Quote",
                    desc: "Call us or fill out our form with your vehicle details. As a trusted dealer, we'll provide an instant estimate based on your vehicle's condition.",
                    icon: ClipboardCheck,
                  },
                  {
                    title: "Free Vehicle Pickup",
                    desc: "We'll schedule a convenient time to collect your vehicle from your location at no extra cost. Our team handles all the logistics.",
                    icon: Truck,
                  },
                  {
                    title: "Documentation & Scrapping",
                    desc: "We handle all paperwork and legal formalities. Your vehicle is scrapped following environmentally friendly processes at our facility.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Payment & Certificates",
                    desc: "Receive immediate payment for your vehicle along with an official disposal proof issued by our licensed facility.",
                    icon: Wallet,
                  }
                ].map((step, i) => {
                  const Icon = step.icon;
                  const stepNum = i + 1;
                  return (
                    <div key={i} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 lg:even:flex-row-reverse">
                      <div className="relative flex items-center justify-center">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white border-4 border-[#0ab99d] shadow-xl z-20 flex items-center justify-center text-[#0ab99d] font-black text-lg lg:text-xl">
                          {stepNum}
                        </div>
                        {i < 3 && <div className="absolute top-full left-1/2 w-0.5 h-12 bg-[#0ab99d]/20 lg:hidden -translate-x-1/2"></div>}
                      </div>

                      <div className="w-full lg:w-1/2 flex justify-center">
                        <div className={cn(
                          "w-full max-w-md p-8 lg:p-10 rounded-[2.5rem] bg-white border-2 border-[#0ab99d]/20 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-[#0ab99d]/50 transition-all duration-500 group relative",
                          i % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                        )}>
                          <div className="absolute top-6 right-8 text-6xl font-black text-[#0ab99d]/5 group-hover:text-[#0ab99d]/10 transition-colors pointer-events-none italic">
                            {stepNum}
                          </div>
                          <div className="w-14 h-14 rounded-2xl bg-[#0ab99d]/10 flex items-center justify-center text-[#0ab99d] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                            <Icon className="h-7 w-7" />
                          </div>
                          <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase italic">{step.title}</h3>
                          <p className="text-slate-500 text-sm lg:text-base leading-relaxed font-medium">{step.desc}</p>
                        </div>
                      </div>

                      <div className="hidden lg:block lg:w-1/2"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Comparison Section */}
        <section className="py-24 lg:py-40 bg-slate-50 relative overflow-hidden" id="why-us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-24">
              <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                The Choice is Clear
              </div>
              <h2 className="text-4xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-[1.1]">
                Why Go <span className="text-primary">Direct?</span>
              </h2>
              <p className="text-slate-500 text-sm lg:text-xl max-w-2xl mx-auto font-medium">
                Not all dealers operate with proper authorization. Choosing an unlicensed middleman puts you at legal risk.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white border-8 border-slate-50 shadow-2xl hidden lg:flex items-center justify-center text-slate-400 font-black italic text-xl">
                VS
              </div>

              {/* The Old Way / Middlemen */}
              <div className="group p-8 lg:p-12 rounded-[3rem] bg-white border-2 border-red-100 shadow-xl shadow-slate-200/50 hover:border-red-200 transition-all duration-500">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-500 border border-red-100 text-[10px] font-black uppercase tracking-wider mb-4">
                      <ShieldAlert className="h-3 w-3" />
                      Not Recommended
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight italic">The Middleman Route</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: HistoryIcon, text: "Indirect path through dealers, agents, and unknown yards.", color: "red" },
                    { icon: ShieldAlert, text: "Risk of vehicle being used for illegal activities without proof.", color: "red" },
                    { icon: TrendingDown, text: "Reduced value as middlemen take heavy commissions.", color: "red" },
                    { icon: AlertTriangle, text: "Delays in paperwork and no official notification.", color: "red" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 shrink-0 bg-red-50 p-2 rounded-xl text-red-400">
                        <XCircle className="h-5 w-5" />
                      </div>
                      <p className="text-slate-500 text-sm lg:text-base font-bold leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Shivam Disposal Way */}
              <div className="group p-8 lg:p-12 rounded-[3rem] bg-white border-2 border-[#0ab99d]/30 shadow-2xl shadow-[#0ab99d]/10 relative overflow-hidden transition-all duration-500 hover:border-[#0ab99d]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0ab99d]/10 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0ab99d]/10 text-[#0ab99d] border border-[#0ab99d]/20 text-[10px] font-black uppercase tracking-wider mb-4">
                        <Shield className="h-3 w-3" />
                        Recommended
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight italic">The <span className="text-[#0ab99d]">Shivam Disposal</span> Route</h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      { icon: ArrowRight, text: "Direct path from your driveway to our licensed facility." },
                      { icon: ShieldCheck, text: "Instant disposal proof for full legal peace of mind." },
                      { icon: Wallet, text: "Maximum value with zero middleman commissions." },
                      { icon: Leaf, text: "Environmentally responsible disposal with 95% recycling yield." },
                      { icon: Zap, text: "Same-day collection and instant bank transfer payment." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-1 shrink-0 bg-[#0ab99d]/20 p-2 rounded-xl text-[#0ab99d]">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <p className="text-slate-800 text-sm lg:text-base font-black leading-relaxed italic">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <Button className="w-full h-16 bg-[#0ab99d] text-white font-black text-lg rounded-2xl shadow-xl shadow-[#0ab99d]/20 hover:scale-[1.02] active:scale-[0.98] transition-all" asChild>
                      <Link href="tel:+917701088001">Choose Legality - Call Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-28 bg-white dark:bg-[#0f172a]" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-20">
              <h2 className="text-3xl lg:text-6xl font-black text-slate-900 dark:text-white mb-5 tracking-tighter uppercase italic">Our Services</h2>
              <div className="h-2 w-20 lg:w-28 bg-[#0ab99d] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Certificate of Deposit (cod)",
                  desc: "Instant digital and physical proof of vehicle handover for full legal security.",
                  icon: FileText
                },
                {
                  title: "Certificate of Vehicle Scrap (cvs)",
                  desc: "The final official document proving your vehicle has been scrapped following all laws.",
                  icon: FileCheck
                },
                {
                  title: "Registration Certificate Cancelation",
                  desc: "Complete assistance and filing for cancellation of your RC with relevant authorities.",
                  icon: XCircle
                },
                {
                  title: "Free Home Pickups",
                  desc: "Zero-cost doorstep collection service across Gwalior and surrounding regions.",
                  icon: Truck
                },
                {
                  title: "Pan India Services",
                  desc: "Extending our professional scrappage network to facilitate disposals nationwide.",
                  icon: Globe
                }
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border-2 border-[#0ab99d]/10 hover:border-[#0ab99d]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0ab99d]/5">
                    <div className="w-14 h-14 rounded-2xl bg-[#0ab99d]/10 flex items-center justify-center text-[#0ab99d] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight uppercase italic">{service.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base font-medium leading-relaxed">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Section with Slider */}
        <section className="py-20 lg:py-32 bg-slate-50" id="gallery">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ab99d]/10 text-[#0ab99d] border border-[#0ab99d]/20 mb-6">
                <ImageIcon className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Visual Tour</span>
              </div>
              <h2 className="text-3xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
                Our <span className="text-primary">Facility</span>
              </h2>
              <p className="text-slate-500 text-sm lg:text-lg max-w-2xl mx-auto font-medium">
                Professional vehicle recycling and industrial operations at our scrap facility.
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 lg:-ml-6">
                {galleryImages.map((img, i) => (
                  <CarouselItem key={i} className="pl-4 lg:pl-6 md:basis-1/2 lg:basis-1/3">
                    <div 
                      className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-[#0ab99d]/20 hover:border-[#0ab99d]/50"
                    >
                      {img.type === 'video' ? (
                        <video 
                          src={img.imageUrl}
                          className={cn(
                            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                            (img.description === "Professional sorting area" || img.description === "Eco-friendly disposal process") && "-rotate-90 scale-[1.35]"
                          )}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <Image 
                          src={img.imageUrl} 
                          alt={img.description}
                          width={img.width || 800}
                          height={img.height || 600}
                          className={cn(
                            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                            (img.description === "Professional sorting area" || img.description === "Eco-friendly disposal process") && "-rotate-90 scale-[1.35]"
                          )}
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-12">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/90 transition-all rounded-xl shadow-lg" />
                <CarouselNext className="static translate-y-0 h-12 w-12 bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/90 transition-all rounded-xl shadow-lg" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Presence Section */}
        <PresenceSection />

        {/* Enforcement Alert Section */}
        <section className="py-12 lg:py-28 bg-white relative overflow-hidden" id="alert">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white border-4 border-red-50 rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-16 shadow-2xl shadow-red-900/5 overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full -mr-48 -mt-48 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
              
              <div className="flex flex-col items-center relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-600 border border-red-200 mb-6 lg:mb-8 animate-pulse">
                  <AlertOctagon className="h-3.5 w-3.5" />
                  <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest">Enforcement Alert</span>
                </div>
                
                <h2 className="text-2xl lg:text-5xl font-black text-slate-900 mb-4 lg:mb-6 leading-[1.1] tracking-tighter uppercase italic">
                  Don't Let Your <span className="text-red-600">Vehicle Get Seized</span>
                </h2>
                
                <p className="text-slate-600 text-[13px] lg:text-lg font-medium leading-relaxed mb-8 lg:mb-10 max-w-3xl">
                  Government agencies are actively identifying and seizing end-of-life vehicles without prior notice. As an <strong>Authorized Recycling Facility</strong>, we help you scrap legally, secure your payout, and provide valid documentation before it's too late.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 justify-center">
                  <Button className="w-full sm:w-auto h-12 lg:h-16 px-8 lg:px-12 bg-red-600 hover:bg-red-700 text-white font-black text-base lg:text-lg rounded-2xl shadow-xl shadow-red-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]" asChild>
                    <Link href="#hero-section">Protect Your Asset Now</Link>
                  </Button>
                  <Link href="#contact" className="flex items-center gap-2 text-slate-500 hover:text-red-600 font-bold transition-colors text-xs lg:text-base">
                    <Info className="h-4 w-4 lg:h-5 lg:w-5" />
                    Learn about legal disposal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <section className="py-16 lg:py-28 bg-white dark:bg-[#0f172a]" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0ab99d] rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]"></div>
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-black mb-8 lg:mb-12 leading-[1.1] tracking-tighter italic uppercase">Ready to clear your driveway?</h2>
                <div className="flex flex-col items-center gap-6 lg:gap-10">
                  <Button size="lg" className="h-16 lg:h-24 px-10 lg:px-16 bg-white text-[#0ab99d] font-black rounded-2xl text-xl lg:text-3xl hover:scale-105 hover:text-black transition-all shadow-2xl" asChild>
                    <Link href="#hero-section">
                      Get Instant Value
                    </Link>
                  </Button>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 w-full">
                    <Button size="lg" variant="outline" className="flex-1 h-16 lg:h-24 px-6 lg:px-10 bg-slate-950/20 backdrop-blur-md border-white/30 text-white font-bold rounded-2xl text-lg lg:text-2xl hover:bg-white/10 transition-all" asChild>
                      <Link href="tel:+917701088001">Call +91-7701088001</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1 h-16 lg:h-24 px-6 lg:px-10 bg-slate-950/20 backdrop-blur-md border-white/30 text-white font-bold rounded-2xl text-lg lg:text-2xl hover:bg-white/10 transition-all" asChild>
                      <Link href="tel:+917701088002">Call +91-7701088002</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* City Office Location Section */}
        <section className="py-20 lg:py-32 bg-slate-50" id="city-office">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 mb-6">
                  <MapPin className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Main Hub</span>
                </div>
                <h2 className="text-3xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
                  City <span className="text-[#0ab99d]">Office</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4 p-6 bg-white rounded-3xl border-2 border-[#0ab99d]/20 shadow-xl shadow-slate-200/40 hover:border-[#0ab99d]/50 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 uppercase italic mb-1">Visit Us At</p>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        M 3/55, TRANSPORT NAGAR, PARKING NO. 6,<br />
                        Kishanbagh, Gwalior,<br />
                        Madhya Pradesh, 474010
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-white rounded-3xl border-2 border-[#0ab99d]/20 shadow-xl shadow-slate-200/40 hover:border-[#0ab99d]/50 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-[#0ab99d]/10 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-[#0ab99d]" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 uppercase italic mb-1">Office Hours</p>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        Monday - Sunday: 10:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#0ab99d]/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789.2439!2d78.13735627539958!3d26.23610778841496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c117136f1b13%3A0xf63976c643d7eb74!2sShivam%20Disposal!5e0!3m2!1sen!2sin!4v1740125000000!5m2!1sen!2sin&z=18"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shivam Disposal City Office"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0ab99d]/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            {/* Brand Column */}
            <div className="space-y-8">
              <Link href="/" className="flex items-center gap-3 group">
                <span className="text-2xl font-black text-white tracking-tighter uppercase italic">
                  Shivam <span className="text-[#0ab99d]">Disposal</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed font-medium max-w-xs">
                Gwalior's premier authorized vehicle recycling facility. We provide professional, eco-friendly disposal solutions for all types of end-of-life vehicles.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 italic">Quick Navigation</h4>
              <ul className="space-y-4 text-sm font-bold">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-[#0ab99d] transition-colors flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0ab99d]/40 group-hover:bg-[#0ab99d] transition-colors"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 italic">Contact Details</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0ab99d]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-[#0ab99d]" />
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-black uppercase italic mb-1">City Office</p>
                    <p className="font-medium text-slate-400">M 3/55, TRANSPORT NAGAR,<br />PARKING NO. 6, Gwalior,<br />Madhya Pradesh, 474010</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0ab99d]/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-[#0ab99d]" />
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-black uppercase italic mb-1">Call Support</p>
                    <div className="flex flex-col font-medium">
                      <Link href="tel:+917701088001" className="hover:text-[#0ab99d] transition-colors">+91-7701088001</Link>
                      <Link href="tel:+917701088002" className="hover:text-[#0ab99d] transition-colors">+91-7701088002</Link>
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0ab99d]/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-[#0ab99d]" />
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-black uppercase italic mb-1">Email Support</p>
                    <Link href="mailto:Shivamdisposalrvsf@gmail.com" className="font-medium text-slate-400 hover:text-[#0ab99d] transition-colors">
                      Shivamdisposalrvsf@gmail.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            {/* Trust & Accreditations */}
            <div className="bg-white/5 rounded-3xl p-8 border-2 border-[#0ab99d]/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0ab99d]/20 flex items-center justify-center">
                    <ShieldCheck className="h-7 w-7 text-[#0ab99d]" />
                  </div>
                  <p className="text-white font-black uppercase italic leading-tight tracking-tighter">Authorized<br />Facility</p>
                </div>
                <p className="text-xs leading-relaxed mb-6 font-medium text-slate-400">
                  Fully licensed by the Gwalior RTO and state environmental agencies for professional vehicle disposal.
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0ab99d]/20 text-[#0ab99d] border border-[#0ab99d]/20 text-[10px] font-black uppercase tracking-widest">
                <CheckCircle2 className="h-3 w-3" />
                100% Legal Scrappage
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-center">
            <p>© 2026 SHIVAM DISPOSAL.<br />LICENSED SCRAPPING FACILITY.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
