import React from 'react';
import { Trophy } from 'lucide-react';
import { TopCompany } from '../types';

interface TopCompaniesProps {
  isArabic: boolean;
}

const topCompanies: TopCompany[] = [
  {
    id: '1',
    name: 'EcoPlast Industries',
    nameAr: 'إيكو بلاست للصناعات',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=600',
    wasteCount: 45,
    description: 'Leading plastic recycling company with innovative waste management solutions.',
    descriptionAr: 'شركة رائدة في إعادة تدوير البلاستيك مع حلول مبتكرة لإدارة النفايات.'
  },
  {
    id: '2',
    name: 'MetalTech Egypt',
    nameAr: 'ميتال تك مصر',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    wasteCount: 38,
    description: 'Specialized in metal waste recycling and sustainable manufacturing practices.',
    descriptionAr: 'متخصصون في إعادة تدوير النفايات المعدنية وممارسات التصنيع المستدامة.'
  },
  {
    id: '3',
    name: 'Green Solutions Co.',
    nameAr: 'شركة الحلول الخضراء',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    wasteCount: 32,
    description: 'Comprehensive environmental solutions provider focusing on waste reduction.',
    descriptionAr: 'مزود حلول بيئية شاملة يركز على تقليل النفايات.'
  }
];

export const TopCompanies: React.FC<TopCompaniesProps> = ({ isArabic }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Trophy className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            {isArabic ? 'أفضل الشركات هذا الشهر' : 'Top Companies This Month'}
          </h2>
          <p className="text-lg text-emerald-700">
            {isArabic
              ? 'تكريم الشركات الأكثر نشاطاً في تبادل النفايات'
              : 'Recognizing the most active companies in waste exchange'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topCompanies.map((company, index) => (
            <div key={company.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform">
              <div className="relative">
                <img
                  src={company.logo}
                  alt={isArabic ? company.nameAr : company.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  #{index + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-2">
                  {isArabic ? company.nameAr : company.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isArabic ? company.descriptionAr : company.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-emerald-600 font-semibold">
                    {isArabic ? 'عدد النفايات المشاركة:' : 'Waste Contributions:'}
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                    {company.wasteCount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};