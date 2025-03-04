import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

interface PrivacyPolicyProps {
  isArabic: boolean;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isArabic }) => {
  return (
    <div className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">
            {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>
          <p className="text-lg text-emerald-700">
            {isArabic
              ? 'نحن نأخذ خصوصيتك على محمل الجد'
              : 'We take your privacy seriously'}
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-emerald-900">
                {isArabic ? 'جمع المعلومات' : 'Information Collection'}
              </h2>
            </div>
            <p className="text-emerald-800 leading-relaxed">
              {isArabic
                ? 'نقوم بجمع المعلومات التي تقدمها لنا عند إنشاء حساب أو استخدام خدماتنا. قد تشمل هذه المعلومات اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وتفاصيل شركتك.'
                : 'We collect information that you provide to us when you create an account or use our services. This may include your name, email address, phone number, and company details.'}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-emerald-900">
                {isArabic ? 'استخدام المعلومات' : 'Information Usage'}
              </h2>
            </div>
            <p className="text-emerald-800 leading-relaxed">
              {isArabic
                ? 'نستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها، والتواصل معك بشأن حسابك، وإرسال تحديثات حول خدماتنا.'
                : 'We use the information we collect to provide and improve our services, communicate with you about your account, and send updates about our services.'}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-emerald-900">
                {isArabic ? 'حماية المعلومات' : 'Information Protection'}
              </h2>
            </div>
            <p className="text-emerald-800 leading-relaxed">
              {isArabic
                ? 'نتخذ تدابير أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به والكشف عنها.'
                : 'We take appropriate security measures to protect your information from unauthorized access and disclosure.'}
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-emerald-900 mb-4">
              {isArabic ? 'حقوقك' : 'Your Rights'}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-emerald-800">
              <li>
                {isArabic
                  ? 'الوصول إلى معلوماتك الشخصية'
                  : 'Access your personal information'}
              </li>
              <li>
                {isArabic
                  ? 'تصحيح معلوماتك غير الدقيقة'
                  : 'Correct your inaccurate information'}
              </li>
              <li>
                {isArabic
                  ? 'طلب حذف معلوماتك'
                  : 'Request deletion of your information'}
              </li>
              <li>
                {isArabic
                  ? 'الاعتراض على معالجة معلوماتك'
                  : 'Object to the processing of your information'}
              </li>
            </ul>
          </section>

          <section className="bg-emerald-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-emerald-900 mb-4">
              {isArabic ? 'اتصل بنا' : 'Contact Us'}
            </h2>
            <p className="text-emerald-800">
              {isArabic
                ? 'إذا كان لديك أي أسئلة حول سياسة الخصوصية الخاصة بنا، يرجى الاتصال بنا على:'
                : 'If you have any questions about our privacy policy, please contact us at:'}
            </p>
            <p className="text-emerald-600 mt-2">privacy@helix.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;