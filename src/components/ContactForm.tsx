
"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  return (
    <div className="space-y-6">
      <form action="https://formsubmit.co/Shivamdisposalrvsf@gmail.com" method="POST" className="space-y-4">
        {/* FormSubmit Configuration */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New Contact Message" />
        <input type="hidden" name="_next" value="https://shivam-disposal.web.app/" />

        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-black uppercase tracking-wider">Full Name</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="h-12 border-slate-200 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-black uppercase tracking-wider">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="h-12 border-slate-200 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-black uppercase tracking-wider">Message</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="How can we help you?"
            className="min-h-[150px] border-slate-200 focus:ring-primary resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black text-lg uppercase tracking-widest shadow-xl shadow-primary/20 transition-all"
        >
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </Button>
      </form>
    </div>
  );
}
