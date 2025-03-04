import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface QASectionProps {
  isArabic: boolean;
}

const faqs = [
  {
    question: 'How does Helix work?',
    questionAr: 'كيف يعمل هيلكس؟',
    answer: 'Helix connects industrial and agricultural waste producers with recyclers and buyers through our platform. Simply list your waste or browse available materials.',
    answerAr: 'يربط هيلكس منتجي النفايات الصناعية والزراعية مع شركات إعادة التدوير والمشترين من خلال منصتنا. ما عليك سوى إدراج نفاياتك أو تصفح المواد المتاحة.'
  },
  {
    question: 'What types of waste can I list?',
    questionAr: 'ما هي أنواع النفايات التي يمكنني إدراجها؟',
    answer: 'You can list various industrial and agricultural waste types including plastic, metal, textile, paper, glass, chemical, wood, electronic, and construction waste.',
    answerAr: 'يمكنك إدراج أنواع مختلفة من النفايات الصناعية والزراعية بما في ذلك البلاستيك والمعادن والمنسوجات والورق والزجاج والمواد الكيميائية والخشب والإلكترونيات ونفايات البناء.'
  },
  {
    question: 'Is the service free?',
    questionAr: 'هل الخدمة مجانية؟',
    answer: 'Yes, listing and browsing waste materials on Helix is completely free.',
    answerAr: 'نعم، إدراج وتصفح المواد على هيلكس مجاني تمامًا. ولا يوجد أي عمولة'
  },
  // Add more FAQs as needed
];

export const QASection: React.FC<QASectionProps> = ({ isArabic }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">
          {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-emerald-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-emerald-900">
                  {isArabic ? faq.questionAr : faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-emerald-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-emerald-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-emerald-50">
                  <p className="text-emerald-800">
                    {isArabic ? faq.answerAr : faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};