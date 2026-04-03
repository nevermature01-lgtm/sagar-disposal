"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Rahul Sharma",
    vehicle: "Maruti Swift (2021)",
    text: "Extremely professional service. They gave a very fair valuation for my car and the pickup was arranged within a few hours. Highly recommended!",
    initials: "RS"
  },
  {
    name: "Mohd. Faisal",
    vehicle: "Hyundai Creta (2022)",
    text: "Bohot badhiya experience raha. Gadi ghar se pick ho gayi aur payment bhi instant transfer kar di. No jhik-jhik at all!",
    initials: "MF"
  },
  {
    name: "Priya Patel",
    vehicle: "Honda Activa (2020)",
    text: "I was looking to scrap my old scooter and Shivam Disposal made it so simple. The documentation part was handled very smoothly by their team.",
    initials: "PP"
  },
  {
    name: "Amit Verma",
    vehicle: "Tata Nexon (2023)",
    text: "Excellent service in Gwalior. They are licensed and provided the official disposal proof immediately. Trustworthy and fast.",
    initials: "AV"
  },
  {
    name: "Sameer Khan",
    vehicle: "Royal Enfield (2021)",
    text: "Best price mili meri bike ki. Team bohot helpful thi aur process ekdum transparent tha. Gwalior mein inse best koi nahi hai.",
    initials: "SK"
  },
  {
    name: "Sneha Reddy",
    vehicle: "Kia Seltos (2022)",
    text: "Very impressed with the efficiency. The team arrived on time and the entire process, including the bank transfer, was completed in 30 minutes.",
    initials: "SR"
  },
  {
    name: "Vikram Singh",
    vehicle: "Toyota Fortuner (2021)",
    text: "I had a damaged vehicle and was worried about the disposal. Shivam Disposal provided a professional solution and great value. Very satisfied.",
    initials: "VS"
  },
  {
    name: "Aisha Begum",
    vehicle: "Honda City (2023)",
    text: "The paperwork for RC cancellation was my biggest concern, but they handled everything perfectly. A truly hassle-free experience.",
    initials: "AB"
  },
  {
    name: "Deepak Gupta",
    vehicle: "Mahindra Thar (2022)",
    text: "Mera accident damaged vehicle tha, inhone bohot accha rate diya. Pure Gwalior mein sabse fast service hai inki. Paisa turant bank mein!",
    initials: "DG"
  },
  {
    name: "Anjali Mishra",
    vehicle: "Suzuki Gixxer (2021)",
    text: "Seamless process from start to finish. They are the most reliable scrap dealers in the city. Professional and polite staff.",
    initials: "AM"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-background" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight uppercase italic">Happy Customers</h2>
          <p className="text-slate-500 font-medium">Join over 10,000 satisfied sellers across the country.</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 lg:-ml-6">
            {reviews.map((rev, i) => (
              <CarouselItem key={i} className="pl-4 lg:pl-6 md:basis-1/2 lg:basis-1/3">
                <TestimonialCard rev={rev} />
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
  );
}

function TestimonialCard({ rev }: { rev: typeof reviews[0] }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border-2 border-[#0ab99d]/20 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-[#0ab99d]/50 transition-all duration-300 h-full flex flex-col">
      <div className="flex text-primary mb-6">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="h-4 w-4 fill-primary" />
        ))}
      </div>
      <p className="text-slate-600 dark:text-slate-400 italic mb-8 leading-relaxed font-medium flex-grow text-left">
        "{rev.text}"
      </p>
      <div className="flex items-center gap-4 pt-6 border-t border-slate-50 dark:border-slate-800">
        <Avatar className="h-12 w-12 border-2 border-[#0ab99d]/20">
          <AvatarFallback className="bg-[#0ab99d]/10 text-[#0ab99d] font-black text-sm">
            {rev.initials}
          </AvatarFallback>
        </Avatar>
        <div className="text-left">
          <h5 className="font-black text-slate-900 dark:text-white uppercase tracking-tight italic">
            {rev.name}
          </h5>
          <p className="text-[10px] font-bold text-[#0ab99d] uppercase tracking-wider">
            Sold: {rev.vehicle}
          </p>
        </div>
      </div>
    </div>
  );
}
