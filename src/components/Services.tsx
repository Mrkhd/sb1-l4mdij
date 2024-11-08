import React from 'react';
import { BookOpen, Users, Gavel, FileText, Scale, Users2, Megaphone, UserPlus, MessagesSquare, Languages, BellRing, HelpCircle } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: {
    en: string;
    so: string;
  };
  description: {
    en: string;
    so: string;
  };
}

const services: Service[] = [
  {
    icon: BookOpen,
    title: {
      en: "Research",
      so: "Cilmibaaris"
    },
    description: {
      en: "We focus on research in national and international law, conducting high-level research on the role each law can play in the country's development.",
      so: "Daraasaadka Cilmibaarista waxaanu xooga kusaaraynaa, arrimaha shuruucda dalka iyo kuwa caalamiga ah, waxaan Cilmibaaris heerkeedu sareeyo ku sameyn doonaa Doorka sharci kasto uu ka qaadan karo hormarka dalka."
    }
  },
  {
    icon: Users,
    title: {
      en: "Training",
      so: "Tababaro"
    },
    description: {
      en: "We provide high-quality training programs to ensure legal practitioners can effectively apply their knowledge in real-world situations.",
      so: "Tababarada aynu qabanayno waa kuwo tayadoodu sarayso, waxaanu rabnaa Sharciqaan waxa uuyaqaanno si dhaba ugu shaqeyn kara, si taa loo helo taas ayaanu Tababaro la mahdiyo diyarinayay."
    }
  },
  {
    icon: Gavel,
    title: {
      en: "Court Simulation",
      so: "Malataad Maxakameed"
    },
    description: {
      en: "Practice court sessions before real cases, training in advocacy, prosecution, and judicial roles.",
      so: "Waa Maxakmad lagu baraatikaynayo Sharcgii la soo bartay intaan Maxkamada caadiga ah la tagin, si qofka doodaha iyo diyaarinta dacwadaha loo sii baro."
    }
  },
  {
    icon: FileText,
    title: {
      en: "Legal Documentation",
      so: "Docomentari-yo Sharci ah"
    },
    description: {
      en: "Comprehensive collection and archiving of national laws and legal precedents.",
      so: "Waa Keyd Sooyaal kaas oo lagu ururinayo dhamaan shuruucda dalka ee kala duwan, iyo Shakhsiyaadka waqti dheer sharcigu ku dhex jiray."
    }
  },
  {
    icon: Scale,
    title: {
      en: "Legal Analysis",
      so: "Gorfeynta shuruucda"
    },
    description: {
      en: "In-depth analysis and interpretation of laws to make them accessible to the public.",
      so: "Waa falanqaynta, gorfeynta iyo faaqidaada shuruucda, si bulshadu ufahmaan sharuucida dalkooda."
    }
  },
  {
    icon: Users2,
    title: {
      en: "Legal Conferences",
      so: "Shirarka Sharciga"
    },
    description: {
      en: "Forums for discussing legal matters, challenges, and advancements in the field.",
      so: "Waa shirar laga arrinsanayo, arimaha sharciga iyadoo la eegaya galdalooladiisa iyo sarayta sharcigaba."
    }
  },
  {
    icon: Megaphone,
    title: {
      en: "Legal Awareness",
      so: "Wacyigalinta Sharciga"
    },
    description: {
      en: "Bringing legal education to people at their workplaces and homes.",
      so: "Waa barnaamij utaagan in qofkasto goobtiisa shaqo ama gurigisa sharciga loogu geeyo lana baro."
    }
  },
  {
    icon: UserPlus,
    title: {
      en: "Legal Meetings",
      so: "Kulamada Sharciga"
    },
    description: {
      en: "Networking events for legal professionals to discuss trends and future of law.",
      so: "Waa kulamo ay isku arkayaan bahda sharciga ee kala duwan iyagoon iska xog waraysanaya Halka uu marayo hanaan socodka sharciga."
    }
  },
  {
    icon: MessagesSquare,
    title: {
      en: "Legal Interviews",
      so: "Waraysiyada Sharciga"
    },
    description: {
      en: "Interviews with experts in national and international law.",
      so: "Wa barnaamij lagu waraysanayo xogna looga qaadayo, khubaro kala duwan kuwaas oo xeel dheeraayaal ku ah arrimaha Sharciga."
    }
  },
  {
    icon: Languages,
    title: {
      en: "Legal Translation",
      so: "Turjumaada sharciga"
    },
    description: {
      en: "Translation of legal documents, articles, and books for the Somali community.",
      so: "Waa barnaamij lagu Turjumayo shuruucdeena asalkeeda ama luuqadihii hore ee lagu qoray."
    }
  },
  {
    icon: BellRing,
    title: {
      en: "Legal Campaign",
      so: "Ololaba Sharciga"
    },
    description: {
      en: "Nationwide campaign to educate people about their legal rights and responsibilities.",
      so: "Waa barnaamij dhig ama dhigo, oo macnaheedu yahay ama sharciga dadka bar ama baro, kaas oo Oo gobolada dalka oo dhan laga sameyn doono."
    }
  },
  {
    icon: HelpCircle,
    title: {
      en: "Legal Consultation",
      so: "Latalinta Sharciga"
    },
    description: {
      en: "Professional legal advice for every situation to prevent legal issues.",
      so: "Sida dhaqtarka loogu baahan yahay si ka daran ayaa xaalad walba loogu baahan yahay sharciga, In qofku falkasto oo uu sameynayo uu eego muxuu sharcigu ka qabaa?"
    }
  }
];

interface ServicesProps {
  language: 'en' | 'so';
}

export function Services({ language }: ServicesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          {language === 'en' ? 'Our Services' : 'ADEEGYADEENNA'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <service.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title[language]}</h3>
              <p className="text-gray-600">{service.description[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}