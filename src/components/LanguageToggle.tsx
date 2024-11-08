import React from 'react';
import { Globe2 } from 'lucide-react';

interface LanguageToggleProps {
  language: 'en' | 'so';
  setLanguage: (lang: 'en' | 'so') => void;
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setLanguage(language === 'en' ? 'so' : 'en')}
        className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 hover:bg-gray-50 transition-colors"
      >
        <Globe2 className="w-4 h-4" />
        <span className="font-medium">{language === 'en' ? 'Somali' : 'English'}</span>
      </button>
    </div>
  );
}