import React from 'react';
import { Users, Recycle, Award, Globe, BarChart as ChartBar, Target, Rocket, Shield } from 'lucide-react';

const AboutSection = ({ isArabic }) => {
  return (
    <div className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <h2 className="text-4xl font-bold text-center mb-8 text-emerald-900">
        {isArabic ? 'عن هيلكس' : 'About Helix'}
      </h2>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-lg text-center mb-8 text-emerald-800">
          {isArabic
            ? 'نحن في هيلكس نعمل على جعل مصر أفضل من خلال تقديم حلول شاملة لإدارة النفايات وإعادة التدوير. نهدف إلى تحقيق أهداف التنمية المستدامة ورؤية مصر 2030.'
            : 'At Helix, we are working to make Egypt better by providing comprehensive waste management and recycling solutions. We aim to achieve the Sustainable Development Goals and Egypt Vision 2030.'}
        </p>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Statistic 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Recycle className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-5xl font-bold text-emerald-600">95%</h3>
            <p className="text-lg text-emerald-800 mt-2">
              {isArabic ? 'نسبة النفايات المعاد تدويرها' : 'Waste Recycled'}
            </p>
          </div>

          {/* Statistic 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-5xl font-bold text-emerald-600">500+</h3>
            <p className="text-lg text-emerald-800 mt-2">
              {isArabic ? 'عميل راضي' : 'Satisfied Clients'}
            </p>
          </div>

          {/* Statistic 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-5xl font-bold text-emerald-600">10+</h3>
            <p className="text-lg text-emerald-800 mt-2">
              {isArabic ? 'سنوات من الخبرة' : 'Years of Experience'}
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h3 className="text-3xl font-bold text-center mb-8 text-emerald-900">
          {isArabic ? 'قيمنا' : 'Our Values'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'الاستدامة' : 'Sustainability'}
            </h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <ChartBar className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'الابتكار' : 'Innovation'}
            </h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Target className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'الجودة' : 'Quality'}
            </h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'الأمان' : 'Safety'}
            </h4>
          </div>
        </div>
      </div>

      {/* Egypt Map Animation */}
      <div className="relative w-full h-96 mt-12">
        <img
          src="https://i.postimg.cc/GtZMLDDN/arab-league-member-states-egypt-orthographic-projection-sml.webp"
          alt="Egypt Map"
          className="w-full h-full object-cover rounded-lg animate-pulse"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-2xl">
          {isArabic ? 'مصر' : 'Egypt'}
        </div>
      </div>

      {/* Future Plans */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="flex items-center justify-center mb-4">
          <Rocket className="w-12 h-12 text-emerald-600" />
        </div>
        <p className="text-lg text-center text-emerald-800">
          {isArabic
            ? 'في المستقبل القريب، سنكون موجودين في جميع الدول العربية!'
            : 'Soon, we will be present in all Arab countries!'}
        </p>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 mt-16 text-center">
        <h3 className="text-3xl font-bold text-emerald-900 mb-4">
          {isArabic ? 'انضم إلينا اليوم!' : 'Join Us Today!'}
        </h3>
        <p className="text-lg text-emerald-800 mb-8">
          {isArabic
            ? 'سجل الآن وكن جزءًا من ثورة إعادة التدوير في مصر.'
            : 'Sign up now and be part of the recycling revolution in Egypt.'}
        </p>
        <button className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors">
          {isArabic ? 'سجل الآن' : 'Sign Up Now'}
        </button>
      </div>
    </div>
  );
};

export default AboutSection;