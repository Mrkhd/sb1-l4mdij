import React from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Mail,
  Phone as PhoneIcon,
  MessageSquare,
} from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'so';
}

const content = {
  en: {
    title: 'Schedule a Consultation',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone',
    preferredDate: 'Preferred Date',
    preferredTime: 'Preferred Time',
    caseDetails: 'Case Details',
    submit: 'Schedule Consultation',
  },
  so: {
    title: 'Ballan Qabso',
    fullName: 'Magaca Oo Buuxa',
    email: 'Iimaylka',
    phone: 'Telefoonka',
    preferredDate: 'Taariikhda La Rabo',
    preferredTime: 'Waqtiga La Rabo',
    caseDetails: 'Faahfaahinta Kiiska',
    submit: 'Xaqiiji Ballanta',
  },
};

export function ScheduleModal({
  isOpen,
  onClose,
  language,
}: ScheduleModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold mb-6">{content[language].title}</h2>

        <form
  name="consultation"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/thank-you"
  className="space-y-4"
>
  <input type="hidden" name="form-name" value="consultation" />

  {/* Hidden honeypot field for bot protection */}
  <p className="hidden">
    <label>
      Don't fill this out if you're human: <input name="bot-field" />
    </label>
  </p>

  {/* Full Name Field */}
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      Full Name
    </label>
    <input
      type="text"
      name="fullName"
      required
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  {/* Email Field */}
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      Email
    </label>
    <input
      type="email"
      name="email"
      required
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  {/* Phone Field */}
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      Phone
    </label>
    <input
      type="tel"
      name="phone"
      required
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  {/* Preferred Date Field */}
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        Preferred Date
      </label>
      <input
        type="date"
        name="preferredDate"
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    {/* Preferred Time Field */}
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        Preferred Time
      </label>
      <input
        type="time"
        name="preferredTime"
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  </div>

  {/* Case Details Field */}
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      Case Details
    </label>
    <textarea
      name="caseDetails"
      rows={3}
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
  >
    Submit
  </button>
</form>
      </div>
    </div>
  );
}
