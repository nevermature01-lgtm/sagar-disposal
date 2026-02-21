"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What documents do I need to scrap my vehicle in Gwalior?",
    answer: "You primarily need the Registration Certificate (RC) of the vehicle. If the RC is missing, we require a copy of the FIR and an ownership affidavit. Our team will guide you through the specific requirements for Gwalior RTO."
  },
  {
    question: "How and when will I get paid for my scrap vehicle?",
    answer: "As per current regulations, we provide payments via instant bank transfer (IMPS/NEFT) at the time of vehicle collection. This ensures a transparent and secure transaction for both parties."
  },
  {
    question: "Do you collect vehicles that are not in running condition?",
    answer: "Yes, we specialize in collecting vehicles in any condition—whether they are accidental, non-starters, or have major mechanical failures. Our recovery trucks are equipped to handle any towing situation across Gwalior."
  },
  {
    question: "What is a Certificate of Deposit (CoD)?",
    answer: "A Certificate of Deposit (CoD) is an official document issued by our authorized facility when you hand over your vehicle. It is essential for claiming scrappage incentives and proves that you are no longer responsible for the vehicle."
  },
  {
    question: "Will you handle the RTO paperwork for registration cancellation?",
    answer: "Yes, we provide complete assistance in filing for the cancellation of your vehicle's registration at the RTO. We'll ensure all legal formalities are completed so you have full peace of mind."
  },
  {
    question: "Is the vehicle scrapping process environmentally friendly?",
    answer: "Absolutely. As a licensed facility, we follow strict environmental guidelines. We safely drain all hazardous fluids and ensure that over 95% of the vehicle's materials are recycled effectively."
  },
  {
    question: "Are there any hidden charges for vehicle pickup?",
    answer: "No, we offer free doorstep collection across Gwalior and surrounding regions. The price we quote is the final amount you receive, with no deductions for towing or documentation assistance."
  },
  {
    question: "Can I scrap a vehicle that still has an active loan (Hypothecation)?",
    answer: "To scrap a vehicle with an active loan, you must first obtain a No Objection Certificate (NOC) from your bank. Once the hypothecation is cleared, we can proceed with the legal scrapping process."
  }
];

export function FAQSection() {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-3 lg:space-y-4" defaultValue="item-0">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden px-2 shadow-sm">
            <AccordionTrigger className="p-4 lg:p-6 hover:no-underline font-black text-slate-900 dark:text-white text-left text-sm lg:text-base leading-snug">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 lg:px-6 pb-4 lg:pb-6 text-slate-600 dark:text-slate-400 text-xs lg:text-sm leading-relaxed pt-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
