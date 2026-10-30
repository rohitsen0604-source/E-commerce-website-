'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/shared/Button';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide inquiry details';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Emulate static form submission handling (Phase 1 client-only showcase)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 700);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-[#C6A76A]/40 bg-[#161514] p-8 sm:p-12 text-center text-[#F5F0E8] animate-scale-up">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#C6A76A] bg-[#101010] text-[#C6A76A]">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="font-serif text-2xl font-light text-[#F5F0E8]">
          Inquiry Successfully Transmitted
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#A69F93] max-w-md mx-auto leading-relaxed font-light">
          Thank you for reaching out to our advisory team. A dedicated concierge consultant will review your specifications and reply within 24 business hours.
        </p>
        <div className="mt-6">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            size="sm"
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#34312B] bg-[#161514] p-8 sm:p-10 text-[#F5F0E8] space-y-6"
    >
      <div>
        <h3 className="font-serif text-2xl font-light tracking-wide text-[#F5F0E8]">
          Send an Inquiry
        </h3>
        <p className="mt-1 text-xs text-[#A69F93]">
          Fill out the details below, and our client advisory team will respond promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Full Name"
          placeholder="e.g. Alexander Wright"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="e.g. alexander@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone / Mobile (Optional)"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <Input
          label="Subject of Inquiry"
          placeholder="e.g. Product Sizing or Availability"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-medium uppercase tracking-wider text-[#D8D2C7]">
          Message & Requirements
        </label>
        <textarea
          rows={5}
          placeholder="Please describe the artifacts you are inquiring about or any customization preferences..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full rounded-lg border bg-[#161514] p-3.5 text-xs text-[#F5F0E8] placeholder-[#736E65] transition-colors focus:outline-hidden focus:ring-1 focus:ring-[#C6A76A] ${
            errors.message
              ? 'border-rose-400 focus:border-rose-400'
              : 'border-[#34312B] focus:border-[#C6A76A]'
          }`}
        />
        {errors.message && <p className="text-xs text-rose-400">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        variant="accent"
        size="md"
        isLoading={isSubmitting}
        rightIcon={<Send className="h-4 w-4" />}
        className="w-full sm:w-auto"
      >
        Transmit Message
      </Button>
    </form>
  );
}
