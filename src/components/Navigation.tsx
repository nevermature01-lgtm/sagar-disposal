
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Clock, 
  MapPin, 
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const logoImg = PlaceHolderImages.find(img => img.id === "logo") || PlaceHolderImages[0];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Process", href: "#our-route" },
    { name: "Why Us", href: "#why-us" },
    { name: "Our Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={cn(
        "hidden lg:block transition-all duration-300 overflow-hidden bg-slate-950/90 backdrop-blur-md border-b border-white/5",
        scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
      )}>
        <div className="max-w-7xl mx-auto px-6 h-10 flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
          <div className="flex items-center gap-6 text-slate-400">
            <span className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default">
              <Clock className="h-3 w-3 text-primary" />
              24/7 Priority Support
            </span>
            <span className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default">
              <MapPin className="h-3 w-3 text-primary" />
              Gwalior Wide Collection
            </span>
          </div>
          <div className="flex items-center gap-4 text-primary">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              Licensed Gwalior Madhya Pradesh Scrapper
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={cn(
          "w-full transition-all duration-500",
          scrolled 
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-lg py-3" 
            : "bg-transparent py-5 lg:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0 -ml-1 lg:-ml-2">
              <div className="relative group-hover:scale-110 transition-transform">
                <Image 
                  src={logoImg.imageUrl} 
                  alt="Shivam Disposal Logo" 
                  width={52} 
                  height={52} 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "text-xl lg:text-2xl font-black tracking-tighter uppercase transition-colors duration-300",
                  scrolled ? "text-slate-900 dark:text-white" : "text-white"
                )}>
                  Shivam Disposal
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={cn(
                    "px-4 py-2 text-[12px] font-black uppercase tracking-wider rounded-lg transition-all duration-300",
                    scrolled 
                      ? "text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/5" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Contact & CTA */}
            <div className="hidden md:flex items-center gap-5">
              <div className="flex flex-col items-end mr-2">
                <span className="text-[9px] font-black text-primary uppercase tracking-widest leading-none mb-1">Contact Us</span>
                <Link href="tel:+917701088001" className={cn(
                  "text-sm lg:text-base font-black transition-colors leading-none mb-1",
                  scrolled ? "text-slate-900 dark:text-white" : "text-white"
                )}>
                  +91-7701088001
                </Link>
                <Link href="tel:+917701088002" className={cn(
                  "text-sm lg:text-base font-black transition-colors leading-none",
                  scrolled ? "text-slate-900 dark:text-white" : "text-white"
                )}>
                  +91-7701088002
                </Link>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white font-black px-6 h-12 lg:h-14 rounded-xl shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-all" asChild>
                <Link href="#hero-section">
                  <Zap className="h-4 w-4 mr-2" />
                  GET QUOTE
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "h-11 w-11 rounded-xl border backdrop-blur-md",
                  scrolled 
                    ? "bg-primary/10 border-primary/20 text-primary" 
                    : "bg-white/10 border-white/20 text-white"
                )} 
                asChild
              >
                <Link href="tel:+917701088001">
                  <Phone className="h-5 w-5" />
                </Link>
              </Button>
              
              {mounted ? (
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className={cn(
                        "h-11 w-11 rounded-xl border backdrop-blur-md",
                        scrolled 
                          ? "bg-slate-900 border-slate-800 text-white" 
                          : "bg-white/10 border-white/20 text-white"
                      )}
                    >
                      <div className="relative w-5 h-4 flex flex-col justify-between">
                        <span className={cn("block h-0.5 bg-current rounded-full transition-all", isMobileMenuOpen ? "w-6 rotate-45 translate-y-1.5" : "w-5")}></span>
                        <span className={cn("block h-0.5 bg-current rounded-full transition-all", isMobileMenuOpen ? "opacity-0" : "opacity-100")}></span>
                        <span className={cn("block h-0.5 bg-current rounded-full transition-all", isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-1.5" : "w-5")}></span>
                      </div>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[280px] bg-white border-l-slate-200 p-0 flex flex-col">
                    <SheetHeader className="sr-only">
                      <SheetTitle>Navigation Menu</SheetTitle>
                      <SheetDescription>Mobile navigation links for Shivam Disposal services and info.</SheetDescription>
                    </SheetHeader>
                    <div className="px-6 py-10 border-b border-slate-100">
                      <div className="flex items-center gap-2.5 mb-10">
                        <div className="relative group-hover:scale-110 transition-transform">
                          <Image 
                            src={logoImg.imageUrl} 
                            alt="Shivam Disposal Logo" 
                            width={44} 
                            height={44} 
                            className="object-contain"
                          />
                        </div>
                        <span className="font-black text-xl text-slate-900 uppercase tracking-tighter">Shivam Disposal</span>
                      </div>
                      
                      <nav className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                          <Link 
                            key={link.name} 
                            href={link.href} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-between py-4 text-lg font-black text-slate-900 hover:text-primary transition-colors border-b border-slate-50"
                          >
                            <span className="uppercase tracking-tight">{link.name}</span>
                            <ChevronRight className="h-5 w-5 text-primary" />
                          </Link>
                        ))}
                      </nav>
                    </div>

                    <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white h-14 font-black text-base rounded-xl mb-6 shadow-lg shadow-primary/20" asChild>
                        <Link href="#hero-section" onClick={() => setIsMobileMenuOpen(false)}>
                          GET QUOTE NOW
                        </Link>
                      </Button>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary border border-slate-200 shadow-sm">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Call Our Team</p>
                          <Link href="tel:+917701088001" className="text-sm font-black text-slate-900 leading-tight">+91-7701088001</Link>
                          <Link href="tel:+917701088002" className="text-sm font-black text-slate-900 leading-tight">+91-7701088002</Link>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              ) : (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={cn(
                    "h-11 w-11 rounded-xl border backdrop-blur-md bg-white/10 border-white/20 text-white"
                  )}
                >
                  <div className="relative w-5 h-4 flex flex-col justify-between">
                    <span className="block h-0.5 bg-current rounded-full w-5"></span>
                    <span className="block h-0.5 bg-current rounded-full w-5"></span>
                    <span className="block h-0.5 bg-current rounded-full w-5"></span>
                  </div>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
