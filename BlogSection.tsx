import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogSectionProps {
  isArabic: boolean;
}

const blogPosts = [
  {
    id: '1',
    title: 'The Future of Waste Management in Egypt',
    titleAr: 'مستقبل إدارة النفايات في مصر',
    excerpt: 'Exploring innovative solutions and technologies that are shaping the future of waste management in Egypt.',
    excerptAr: 'استكشاف الحلول والتقنيات المبتكرة التي تشكل مستقبل إدارة النفايات في مصر.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
    author: 'Dr. Ahmed Hassan',
    authorAr: 'د. أحمد حسن',
    date: '2025-03-01',
    category: 'Innovation',
    categoryAr: 'الابتكار'
  },
  {
    id: '2',
    title: 'Sustainable Practices in Industrial Waste Management',
    titleAr: 'الممارسات المستدامة في إدارة النفايات الصناعية',
    excerpt: 'Best practices and case studies from Egyptian industries leading the way in sustainable waste management.',
    excerptAr: 'أفضل الممارسات ودراسات الحالة من الصناعات المصرية الرائدة في إدارة النفايات المستدامة.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
    author: 'Eng. Sarah Mohamed',
    authorAr: 'م. سارة محمد',
    date: '2025-02-28',
    category: 'Sustainability',
    categoryAr: 'الاستدامة'
  },
  {
    id: '3',
    title: 'Circular Economy: A New Era for Egyptian Industry',
    titleAr: 'الاقتصاد الدائري: عصر جديد للصناعة المصرية',
    excerpt: 'How circular economy principles are transforming industrial practices and creating new opportunities.',
    excerptAr: 'كيف تعمل مبادئ الاقتصاد الدائري على تحويل الممارسات الصناعية وخلق فرص جديدة.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
    author: 'Dr. Mohamed Ali',
    authorAr: 'د. محمد علي',
    date: '2025-02-25',
    category: 'Economy',
    categoryAr: 'الاقتصاد'
  }
];

export const BlogSection: React.FC<BlogSectionProps> = ({ isArabic }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            {isArabic ? 'آخر الأخبار' : 'Latest News'}
          </h2>
          <p className="text-lg text-emerald-700">
            {isArabic
              ? 'اكتشف أحدث التطورات والأفكار في مجال إدارة النفايات والاستدامة'
              : 'Discover the latest developments and insights in waste management and sustainability'}
          </p>
        </div>

        {/* News Ticker */}
        <div className="bg-emerald-900 text-white p-4 rounded-lg mb-12 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {blogPosts.map((post, index) => (
              <span key={post.id} className="inline-block mx-8">
                {isArabic ? post.titleAr : post.title}
                {index < blogPosts.length - 1 && <span className="mx-4">•</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={post.image}
                alt={isArabic ? post.titleAr : post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-emerald-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US')}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {isArabic ? post.authorAr : post.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">
                  {isArabic ? post.titleAr : post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isArabic ? post.excerptAr : post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-emerald-600">
                    {isArabic ? post.categoryAr : post.category}
                  </span>
                  <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors">
                    {isArabic ? 'اقرأ المزيد' : 'Read More'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};