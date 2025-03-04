import React from 'react';
import { Book, FileText, AlertCircle, CheckCircle } from 'lucide-react';

interface TermsConditionsProps {
  isArabic: boolean;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ isArabic }) => {
  return (
    <div className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Book className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">
            {isArabic ? 'الشروط والأحكام' : 'Terms & Conditions'}
          </h1>
          <p className="text-lg text-emerald-700">
            {isArabic
              ? 'يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا'
              : 'Please read these terms and conditions carefully before using our services'}
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-emerald-900">
                {isArabic ? 'نطاق الخدمة' : 'Service Scope'}
              </h2>
            </div>
            <p className="text-emerald-800 leading-relaxed">
              {isArabic
                ? 'نحن نوفر منصة لتبادل النفايات الصناعية والزراعية. نحن لا نشارك في عملية التبادل نفسها ولا نتحمل المسؤولية عن أي معاملات تتم بين المستخدمين.'
                : 'We provide a platform for industrial and agricultural waste exchange. We do not participate in the exchange process itself and are not responsible for any transactions between users.'}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-emerald-900">
                {isArabic ? 'المسؤولية' : 'Liability'}
              </h2>
            </div>
            <p className="text-emerald-800 leading-relaxed">
              {isArabic
                ? 'لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة تنتج عن استخدام منصتنا. يتحمل المستخدمون المسؤولية الكاملة عن التحقق من صحة المعلومات وجودة النفايات.'
                : 'We are not liable for any direct or indirect damages resulting from the use of our platform. Users are fully responsible for verifying information accuracy and waste quality.'}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-emerald-900">
                {isArabic ? 'التزامات المستخدم' : 'User Obligations'}
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-emerald-800">
                {isArabic ? 'يجب على المستخدمين:' : 'Users must:'}
              </p>
              <ul className="list-disc list-inside space-y-2 text-emerald-800">
                <li>
                  {isArabic
                    ? 'تقديم معلومات دقيقة وصحيحة'
                    : 'Provide accurate and truthful information'}
                </li>
                <li>
                  {isArabic
                    ? 'الامتثال للقوانين واللوائح المحلية'
                    : 'Comply with local laws and regulations'}
                </li>
                <li>
                  {isArabic
                    ? 'عدم إساءة استخدام المنصة'
                    : 'Not misuse the platform'}
                </li>
                <li>
                  {isArabic
                    ? 'احترام حقوق المستخدمين الآخرين'
                    : 'Respect other users\' rights'}
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-emerald-900 mb-4">
              {isArabic ? 'التعديلات' : 'Modifications'}
            </h2>
            <p className="text-emerald-800">
              {isArabic
                ? 'نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية.'
                : 'We reserve the right to modify these terms and conditions at any time. Users will be notified of any significant changes.'}
            </p>
          </section>

          <section className="bg-emerald-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-emerald-900 mb-4">
              {isArabic ? 'القانون المطبق' : 'Governing Law'}
            </h2>
            <p className="text-emerald-800">
              {isArabic
                ? 'تخضع هذه الشروط والأحكام لقوانين جمهورية مصر العربية.'
                : 'These terms and conditions are governed by the laws of the Arab Republic of Egypt.'}
            </p>
          </section>

          <section className="mt-8 text-center">
            <p className="text-emerald-600">
              {isArabic
                ? 'آخر تحديث: مارس 2025'
                : 'Last updated: March 2025'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;