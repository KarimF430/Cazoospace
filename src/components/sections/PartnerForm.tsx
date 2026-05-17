"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "b2b-sales",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", type: "b2b-sales", details: "" });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(
        error.message || "Failed to submit form. Please check your connection and try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-black/5 rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-12 shadow-xl shadow-black/5 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-6 animate-bounce">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="font-display text-[#1A1A1A] text-[28px] mb-4 uppercase tracking-tight font-bold">Briefing Requested!</h3>
        <p className="font-body text-[#555] text-[15px] leading-relaxed max-w-sm mb-8">
          Thank you for initiating contact with Cazoo Space. One of our execution directors will review your project details and get in touch within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-body text-[14px] font-bold text-[#C8102E] border border-[#C8102E]/20 px-6 py-2.5 rounded-xl hover:bg-[#C8102E]/5 transition-all cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-black/5 rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-12 shadow-xl shadow-black/5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
        
        {/* Error Alert Box */}
        {status === "error" && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-[13px] font-body">
            <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
            <p>{errorMessage}</p>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-[11px] text-[#555] tracking-wider uppercase pl-1">Full Name & Company</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            disabled={status === "loading"}
            className="bg-[#F9F9F9] border border-black/10 rounded-xl px-4 md:px-5 py-3 md:py-4 font-body text-[15px] text-[#1A1A1A] placeholder:text-[#999] focus:outline-none focus:border-[#C8102E] focus:bg-white focus:ring-1 focus:ring-[#C8102E] transition-all disabled:opacity-50" 
            placeholder="Jane Doe, Acme Corp" 
            required 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-[11px] text-[#555] tracking-wider uppercase pl-1">Work Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            disabled={status === "loading"}
            className="bg-[#F9F9F9] border border-black/10 rounded-xl px-4 md:px-5 py-3 md:py-4 font-body text-[15px] text-[#1A1A1A] placeholder:text-[#999] focus:outline-none focus:border-[#C8102E] focus:bg-white focus:ring-1 focus:ring-[#C8102E] transition-all disabled:opacity-50" 
            placeholder="jane@acmecorp.com" 
            required 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="type" className="font-mono text-[11px] text-[#555] tracking-wider uppercase pl-1">Primary Goal / Engagement Type</label>
          <div className="relative">
            <select 
              id="type" 
              name="type" 
              value={formData.type}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full bg-[#F9F9F9] border border-black/10 rounded-xl px-4 md:px-5 py-3 md:py-4 font-body text-[15px] text-[#1A1A1A] focus:outline-none focus:border-[#C8102E] focus:bg-white focus:ring-1 focus:ring-[#C8102E] transition-all appearance-none cursor-pointer disabled:opacity-50"
            >
              <option value="b2b-sales">B2B Sales Acceleration</option>
              <option value="event-marketing">Event Marketing / Activation</option>
              <option value="branding">Corporate Branding</option>
              <option value="digital">Digital Advertising / Social</option>
              <option value="other">Other Inquiry</option>
            </select>
            <div className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#555]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="details" className="font-mono text-[11px] text-[#555] tracking-wider uppercase pl-1">Tell us about your project goals...</label>
          <textarea 
            id="details" 
            name="details" 
            value={formData.details}
            onChange={handleChange}
            disabled={status === "loading"}
            rows={5} 
            className="bg-[#F9F9F9] border border-black/10 rounded-xl px-4 md:px-5 py-3 md:py-4 font-body text-[15px] text-[#1A1A1A] placeholder:text-[#999] focus:outline-none focus:border-[#C8102E] focus:bg-white focus:ring-1 focus:ring-[#C8102E] transition-all resize-none disabled:opacity-50" 
            placeholder="What are you looking to achieve? E.g., App downloads, B2B pipeline, brand awareness..." 
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === "loading"}
          className="mt-2 md:mt-4 w-full group relative inline-flex items-center justify-center font-body text-[15px] md:text-[16px] font-bold text-white bg-[#C8102E] px-8 py-4 md:py-5 rounded-xl hover:bg-[#A00D24] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
        >
          <span>{status === "loading" ? "Submitting Request..." : "Request Briefing"}</span>
          {status !== "loading" && (
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          )}
        </button>
        
        <p className="text-center font-body text-[12px] text-[#999] mt-2">
          By submitting, you agree to our <a href="/privacy" className="underline hover:text-[#555] transition-colors">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}
