import React from 'react';
import { Recycle, Link, Brain, Truck, LineChart, Database, Shield, Users, Leaf, Factory, BarChart as ChartBar, Award } from 'lucide-react';

const ServicesSection = ({ isArabic }) => {
  return (
    <div className="py-16 bg-gradient-to-br from-teal-50 to-emerald-50">
      <h2 className="text-4xl font-bold text-center mb-8 text-emerald-900">
        {isArabic ? 'خدماتنا' : 'Our Services'}
      </h2>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-lg text-center mb-8 text-emerald-800">
          {isArabic
            ? 'نقدم خدمات مجانية مثل ربط الشركات بالنفايات المتوفرة، بالإضافة إلى خدمات مدفوعة مثل نقل النفايات والاستشارات.'
            : 'We offer free services such as connecting companies with available waste, as well as paid services like waste transportation and consulting.'}
        </p>
      </div>

      {/* Free Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center mb-8 text-emerald-900">
          {isArabic ? 'الخدمات المجانية' : 'Free Services'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Link className="w-12 h-12 text-emerald-600" />
            </div>
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'ربط الشركات' : 'Company Connections'}
            </h4>
            <p className="text-emerald-600">
              {isArabic
                ? 'ربط الشركات بالنفايات المتوفرة مجانًا.'
                : 'Connect companies with available waste for free.'}
            </p>
          </div>

          {/* Free Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Brain className="w-12 h-12 text-emerald-600" />
            </div>
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'توصيات مخصصة' : 'Custom Recommendations'}
            </h4>
            <p className="text-emerald-600">
              {isArabic
                ? 'توصيات مخصصة بناءً على احتياجاتك.'
                : 'Custom recommendations based on your needs.'}
            </p>
          </div>

          {/* Free Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-emerald-600" />
            </div>
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'توعية مجتمعية' : 'Community Awareness'}
            </h4>
            <p className="text-emerald-600">
              {isArabic
                ? 'ورش عمل وتوعية حول إعادة التدوير.'
                : 'Workshops and awareness about recycling.'}
            </p>
          </div>
        </div>
      </div>

      {/* Paid Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h3 className="text-3xl font-bold text-center mb-8 text-emerald-900">
          {isArabic ? 'الخدمات المدفوعة' : 'Paid Services'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paid Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Truck className="w-12 h-12 text-emerald-600" />
            </div>
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'نقل النفايات' : 'Waste Transportation'}
            </h4>
            <p className="text-emerald-600">
              {isArabic
                ? 'خدمات نقل النفايات بأسعار تنافسية.'
                : 'Waste transportation services at competitive prices.'}
            </p>
          </div>

          {/* Paid Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <LineChart className="w-12 h-12 text-emerald-600" />
            </div>
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'الاستشارات البيئية' : 'Environmental Consulting'}
            </h4>
            <p className="text-emerald-600">
              {isArabic
                ? 'استشارات متخصصة في إدارة النفايات.'
                : 'Specialized consulting in waste management.'}
            </p>
          </div>

          {/* Paid Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Database className="w-12 h-12 text-emerald-600" />
            </div>
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'تحليل البيانات' : 'Data Analysis'}
            </h4>
            <p className="text-emerald-600">
              {isArabic
                ? 'تحليل بيانات النفايات لتقديم رؤى قابلة للتنفيذ.'
                : 'Waste data analysis to provide actionable insights.'}
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h3 className="text-3xl font-bold text-center mb-8 text-emerald-900">
          {isArabic ? 'مميزات العمل معنا' : 'Benefits of Working With Us'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'صديق للبيئة' : 'Eco-Friendly'}
            </h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Factory className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'حلول صناعية' : 'Industrial Solutions'}
            </h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <ChartBar className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'تحسين الأداء' : 'Performance Boost'}
            </h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-emerald-800 mb-2">
              {isArabic ? 'خدمة متميزة' : 'Premium Service'}
            </h4>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 mt-16 text-center">
        <h3 className="text-3xl font-bold text-emerald-900 mb-4">
          {isArabic ? 'ابدأ معنا اليوم!' : 'Get Started Today!'}
        </h3>
        <p className="text-lg text-emerald-800 mb-8">
          {isArabic
            ? 'سجل الآن واستفد من خدماتنا المميزة.'
            : 'Sign up now and benefit from our premium services.'}
        </p>
        <button className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors">
          {isArabic ? 'سجل الآن' : 'Sign Up Now'}
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;