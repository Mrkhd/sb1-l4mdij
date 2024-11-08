import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'so';
}

const content = {
  en: {
    about: "Arji International Company is dedicated to providing diverse legal services and enhancing legal understanding within the Somali community. We established this company to deliver high-quality training to all legal professionals and provide legal consultation to anyone with legal needs. We are a company that conducts research and analysis on legal matters while embracing modern technological advancements.",
    mission: "Our mission is to make legal knowledge accessible to the Somali community, whether in rural or urban areas, ensuring they understand both their rights and obligations.",
    vision: "We envision a future where legal understanding reaches everyone, from individuals to legal professionals. Our goal is to become the leading law firm of the future, providing superior legal services and research. We aim to elevate legal awareness to a level where the Somali community can resolve any challenges, viewing law as their safeguard and applying it in their daily lives, from agreements to decision-making. We are committed to developing a clear strategy that will address the legal needs of the Somali community."
  },
  so: {
    about: "Arji International Company, Waa Shirkad ka shaqaysa Adeegyada Sharciga Ee Kala duwan, iyo Kor uqaadida Fahanka Sharciga ee bulshada Soomaaliyeed. Waxaanu Shirkaddaan u yagleelnay, inay Tababarro heerkoodu sarreeyo ay siiso, Dhammaan bahda Sharciga ee kala duwan, Waxaanu nahay Shirkad utaagan inay latalin Sharci siiso cidwalba oo baahi Sharciyeed qabta. Waxaanu nahay Shirkad baaritaan iyo gorfaynba ku samaysa Arrimaha sharciga iyadoo waliba raacaysa habka casriga ah ee Tiknoolajiyadda Horomartay.",
    mission: "Inaan bulshada Soomaaliyeed Sharciga fahansiinno, meelkasto oo ay joogaan miyyi iyo magaalaba, si ay u ogaadaan xuquuqda ay leeyihiin iyo Waajibaadka lagu leeyahay.",
    vision: "Waxaan hiigsanaynaa In fahanka bulshada ee sharcigu uu gaaro Qof iyo Qareen, Wuxuu yoolkeenu yahay inaan noqono Shirkadda Sharciga ugu wanaagsan mustaqbalka ee bixisa adeegyada Sharciga la xiriira iyo Cilmibaarista. Inaan gaarsiino sharciga heer ay bulshada soomaaliyeed ka dugsadaan wax walbo oo dhibaato ah, ayna u arkaan meesha kaliya ee ay ku badbaadayaan, kuna dabaqaan noloshooda maalinlaha ah, sida heshiisyada, iyo go'aanada ay gaarayaan, Waliba aynu la nimaano qorshe cad oo dabooli doona baahiyaha Sharciga ay u qabto Bulshada Soomaaliyeed."
  }
};

export function About({ language }: AboutProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <p className="text-lg leading-relaxed text-gray-600">
              {content[language].about}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold">
                  {language === 'en' ? 'Our Mission' : 'Hadafkeena'}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {content[language].mission}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold">
                  {language === 'en' ? 'Our Vision' : 'Aragtideena'}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {content[language].vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}