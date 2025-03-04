import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface ContactSectionProps {
  isArabic: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isArabic }) => {
  return (
    <section className="py-16 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {isArabic ? 'تواصل معنا' : 'Contact Us'}
          </h2>
          <p className="text-emerald-100 text-lg">
            {isArabic
              ? 'نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهداف الاستدامة'
              : 'We are here to answer your questions and help you achieve your sustainability goals'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href="mailto:8mohamed.hany8@gmail.com"
            className="flex items-center justify-center gap-4 bg-emerald-800 p-6 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            <Mail className="w-8 h-8" />
            <div className="text-left">
              <p className="text-sm text-emerald-200 mb-1">
                {isArabic ? 'راسلنا عبر البريد الإلكتروني' : 'Email Us'}
              </p>
              <p className="font-semibold">8mohamed.hany8@gmail.com</p>
            </div>
          </a>

          <a
            href="https://wa.me/201102891160"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-emerald-800 p-6 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            <Phone className="w-8 h-8" />
            <div className="text-left">
              <p className="text-sm text-emerald-200 mb-1">
                {isArabic ? 'تواصل معنا عبر واتساب' : 'WhatsApp'}
              </p>
              <p className="font-semibold">+201102891160</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};