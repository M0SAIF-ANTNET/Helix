import React from 'react';
import { Recycle, Leaf, Factory, TrendingUp } from 'lucide-react';

interface WhySectionProps {
  isArabic: boolean;
}

export const WhySection: React.FC<WhySectionProps> = ({ isArabic }) => {
  const reasons = [
    {
      icon: <Recycle className="w-12 h-12 text-emerald-600" />,
      title: isArabic ? 'تعزيز الاقتصاد الدائري' : 'Promoting Circular Economy',
      titleAr: 'تعزيز الاقتصاد الدائري',
      description: 'Transform waste into valuable resources, reducing environmental impact and creating new economic opportunities.',
      descriptionAr: 'تحويل النفايات إلى موارد قيمة، مما يقلل من الأثر البيئي ويخلق فرصًا اقتصادية جديدة.'
    },
    {
      icon: <Leaf className="w-12 h-12 text-emerald-600" />,
      title: isArabic ? 'حماية البيئة المصرية' : 'Protecting Egyptian Environment',
      titleAr: 'حماية البيئة المصرية',
      description: 'Reduce landfill waste and minimize industrial pollution through efficient waste management.',
      descriptionAr: 'تقليل نفايات المدافن وتقليل التلوث الصناعي من خلال الإدارة الفعالة للنفايات.'
    },
    {
      icon: <Factory className="w-12 h-12 text-emerald-600" />,
      title: isArabic ? 'دعم الصناعة المحلية' : 'Supporting Local Industry',
      titleAr: 'دعم الصناعة المحلية',
      description: 'Connect Egyptian factories to create a sustainable industrial ecosystem and reduce waste management costs.',
      descriptionAr: 'ربط المصانع المصرية لخلق نظام صناعي مستدام وتقليل تكاليف إدارة النفايات.'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-emerald-600" />,
      title: isArabic ? 'تحقيق النمو المستدام' : 'Achieving Sustainable Growth',
      titleAr: 'تحقيق النمو المستدام',
      description: 'Support Egypt\'s vision for sustainable development and environmental protection.',
      descriptionAr: 'دعم رؤية مصر للتنمية المستدامة وحماية البيئة.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            {isArabic ? 'لماذا هيلكس؟' : 'Why Helix?'}
          </h2>
          <p className="text-lg text-emerald-700 max-w-3xl mx-auto">
            {isArabic
              ? 'نحن نقود التحول نحو اقتصاد دائري في مصر من خلال ربط المصانع وتسهيل تبادل النفايات الصناعية'
              : 'We are leading the transformation towards a circular economy in Egypt by connecting factories and facilitating industrial waste exchange'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">
                {isArabic ? reason.titleAr : reason.title}
              </h3>
              <p className="text-emerald-700">
                {isArabic ? reason.descriptionAr : reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};