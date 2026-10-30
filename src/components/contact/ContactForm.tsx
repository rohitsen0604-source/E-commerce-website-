'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include details for your message';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Question',
        message: '',
      });
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-[#34312B] bg-[#161514] p-8 sm:p-12 text-center text-[#F5F0E8] animate-fade-in-up">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#C6A76A] bg-[#101010] text-[#C6A76A]">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-[#F5F0E8]">
          Message Sent Successfully
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#A69F93] max-w-md mx-auto leading-relaxed font-light">
          Thank you for reaching out! Our customer care team will review your message and reply within 24 hours.
        </p>
        <div className="mt-6">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            size="sm"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#34312B] bg-[#161514] p-5 sm:p-10 text-[#F5F0E8] space-y-6"
    >
      <div>
        <h3 className="font-serif text-xl sm:text-2xl font-light tracking-wide text-[#F5F0E8]">
          Send Us a Message
        </h3>
        <p className="mt-1 text-xs text-[#A69F93]">
          Fill out the details below, and our team will get back to you promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Name *"
          placeholder="e.g. Rahul Sharma"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
        />
        <Input
          label="Email Address *"
          type="email"
          placeholder="rahul@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone Number (Optional)"
          type="tel"
          placeholder="+91 98765 43210"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <Select
          label="Subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          options={[
            { value: 'General Question', label: 'General Question' },
            { value: 'Order Details', label: 'Order Details & Delivery' },
            { value: 'Customization', label: 'Customization & Engraving' },
            { value: 'Warranty & Support', label: 'Warranty & Support' },
          ]}
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-medium uppercase tracking-wider text-[#A69F93]">
          Your Message *
        </label>
        <textarea
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we assist you today?"
          className={`w-full rounded-xl border bg-[#101010] p-4 text-xs font-light text-[#F5F0E8] placeholder:text-[#6E6659] focus:outline-hidden transition-all duration-300 resize-none ${
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
        className="w-full sm:w-auto min-h-[44px]"
      >
        Send Message
      </Button>
    </form>
  );
}
