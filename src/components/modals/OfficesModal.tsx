import React from 'react';
import { X, MapPin, Globe2, Phone } from 'lucide-react';

interface OfficesModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'so';
}

const content = {
  en: {
    title: "Our Office"
  },
  so: {
    title: "Xafiiskeena"
  }
};

const offices = {
  en: [
    {
      city: 'Mogadishu',
      address: 'Maka Al-Mukarama Road, Hodan District',
      phone: '+252 61 XXX XXXX',
      image: 'https://images.unsplash.com/photo-1635179205130-36c88d4eb253?auto=format&fit=crop&q=80&w=400'
    }
  ],
  so: [
    {
      city: 'Muqdisho',
      address: 'Wadada Maka Al-Mukarama, Degmada Hodan',
      phone: '+252 61 XXX XXXX',
      image: 'https://images.unsplash.com/photo-1635179205130-36c88d4eb253?auto=format&fit=crop&q=80&w=400'
    }
  ]
};

export function OfficesModal({ isOpen, onClose, language }: OfficesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="flex items-center gap-2 mb-8">
            <Globe2 className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">{content[language].title}</h2>
          </div>

          <div>
            {offices[language].map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={office.image}
                  alt={office.city}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 shrink-0 mt-1" />
                      {office.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      {office.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}