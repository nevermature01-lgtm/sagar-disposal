"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { faqChatbot } from "@/ai/flows/faq-chatbot";

type Message = {
  role: "user" | "ai";
  text: string;
};

export function FAQChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Hi! I'm the ScrapWise assistant. Ask me anything about scrapping your vehicle!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const response = await faqChatbot(userMsg);
      setMessages((prev) => [...prev, { role: "ai", text: response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", text: "Sorry, I'm having trouble connecting. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-primary/20 shadow-xl overflow-hidden flex flex-col h-[400px] lg:h-[500px] max-w-2xl mx-auto">
      <div className="bg-primary p-3 lg:p-4 text-white flex items-center gap-2 font-black text-sm lg:text-base">
        <MessageSquare className="h-4 w-4 lg:h-5 lg:w-5" />
        ScrapWise AI Assistant
      </div>
      
      <ScrollArea className="flex-1 p-3 lg:p-4" viewportRef={scrollRef}>
        <div className="space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-2 lg:gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === "ai" ? "bg-primary text-white" : "bg-slate-200 text-slate-600"}`}>
                {m.role === "ai" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </div>
              <div className={`p-2.5 lg:p-3 rounded-2xl max-w-[85%] text-xs lg:text-sm font-medium ${m.role === "ai" ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200" : "bg-primary text-white"}`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-2 lg:gap-3">
              <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="p-2.5 lg:p-3 rounded-2xl bg-slate-100 dark:bg-slate-800">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-3 lg:p-4 border-t border-primary/10 flex gap-2 bg-slate-50 dark:bg-slate-950">
        <Input 
          placeholder="Ask a question..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="border-primary/20 h-10 lg:h-11 text-xs lg:text-sm"
        />
        <Button size="icon" className="bg-primary hover:bg-primary/90 h-10 w-10 lg:h-11 lg:w-11" onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
