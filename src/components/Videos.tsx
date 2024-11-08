import React from 'react';
import { Youtube } from 'lucide-react';

interface VideosProps {
  language: 'en' | 'so';
}

const content = {
  en: { title: "Latest Insights", placeholder: "YouTube Video" },
  so: { title: "Aragtiyo Cusub", placeholder: "Muuqaalka YouTube" }
};

const videos = [
  "https://www.youtube.com/embed/example1",
  "https://www.youtube.com/embed/example2",
  "https://www.youtube.com/embed/example3"
];

export function Videos({ language }: VideosProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Youtube className="w-8 h-8 text-red-600" />
          <h2 className="text-4xl font-bold">{content[language].title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((url, index) => (
            <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">{content[language].placeholder} {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}