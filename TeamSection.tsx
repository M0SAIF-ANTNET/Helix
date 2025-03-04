import React from 'react';
import { Linkedin, Download } from 'lucide-react';

interface TeamSectionProps {
  isArabic: boolean;
}

const teamMembers = [
  {
    id: '1',
    name: 'Mohamed Abdelsamea',
    nameAr: 'محمد عبدالسميع',
    role: 'Co-Founder & CTO',
    roleAr: 'المؤسس والرئيس التقني',
    bio: 'Software Engineer and Data Scientist specializing in Machine Learning.',
    bioAr: 'مهندس برمجيات وعالم بيانات متخصص في تعلم الالة',
    image: 'https://i.postimg.cc/BbbTvJ01/personal.png',
    linkedin: 'https://www.linkedin.com/in/saifelnasrrr/',
    cv: '/path/to/cv1.pdf'
  },
  {
    id: '2',
    name: 'Abanoub Attia',
    nameAr: 'أبانوب عطية',
    role: 'Co-Founder & CEO',
    roleAr: 'المؤسس والرئيس التنفيذي',
    bio: 'Chemical Engineer Specializing in Environmental Sciences.',
    bioAr: 'مهندس كيميائي متخصص في العلوم البيئية',
    image: 'https://i.postimg.cc/VLFcvHJF/Whats-App-Image-2025-02-15-at-7-04-33-PM.jpg',
    linkedin: 'https://www.linkedin.com/in/abanoubattya/',
    cv: '/path/to/cv2.pdf'
  },
  {
    id: '3',
    name: 'Mohamed Hany',
    nameAr: 'محمد هاني',
    role: 'Co-Founder & COO',
    roleAr: 'المؤسس ورئيس العمليات',
    bio: 'Data Analyst & Business Intelligence Engineer.',
    bioAr: 'محلل بيانات ومهندس استخبارات الأعمال',
    image: 'https://i.postimg.cc/hPhsD1D3/11111111111111.png',
    linkedin: 'https://www.linkedin.com/in/mohamed-hany-521773328/',
    cv: '/path/to/cv3.pdf'
  }
];

export const TeamSection: React.FC<TeamSectionProps> = ({ isArabic }) => {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            {isArabic ? 'فريقنا' : 'Our Team'}
          </h2>
          <p className="text-lg text-emerald-700">
            {isArabic
              ? 'خبراء متخصصون في مجال إدارة النفايات والاستدامة'
              : 'Experts specialized in waste management and sustainability'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img
                src={member.image}
                alt={isArabic ? member.nameAr : member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-1">
                  {isArabic ? member.nameAr : member.name}
                </h3>
                <p className="text-emerald-600 mb-4">
                  {isArabic ? member.roleAr : member.role}
                </p>
                <p className="text-gray-600 mb-6">
                  {isArabic ? member.bioAr : member.bio}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>{isArabic ? 'لينكد إن' : 'LinkedIn'}</span>
                  </a>
                  <a
                    href={member.cv}
                    download
                    className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full hover:bg-emerald-200 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isArabic ? 'السيرة الذاتية' : 'CV'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};