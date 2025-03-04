import React, { useState } from 'react';
import { Search, Heart, Phone, Mail, AlertCircle } from 'lucide-react';

interface StoreProps {
  isArabic: boolean;
}

const wasteTypes = [
  'Plastic',
  'Metal',
  'Textile',
  'Paper',
  'Glass',
  'Chemical',
  'Wood',
  'Electronic',
  'Construction',
  'Agricultural'
];

const locations = [
  'Cairo',
  'Alexandria',
  'Giza',
  'Port Said',
  'Suez',
  'Aswan',
  '6th of October',
  'Mansoura',
  'El-Mahalla',
  'Tanta',
  '10th of Ramadan'
];

// Sample waste data
const sampleWastes = [
  {
    id: '1',
    title: 'Industrial Plastic Waste',
    titleAr: 'نفايات بلاستيكية صناعية',
    description: 'High-quality recyclable plastic waste from manufacturing process. Suitable for recycling and reuse in various industries.',
    descriptionAr: 'نفايات بلاستيكية قابلة لإعادة التدوير عالية الجودة من عملية التصنيع. مناسبة لإعادة التدوير وإعادة الاستخدام في مختلف الصناعات.',
    type: 'Plastic',
    quantity: '500 kg',
    location: 'Cairo',
    companyName: 'EcoPlast Industries',
    companyNameAr: 'إيكو بلاست للصناعات',
    contactPerson: 'Ahmed Hassan',
    email: 'contact@ecoplast.com',
    phone: '+201234567890',
    image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=800',
    createdAt: '2025-03-01'
  },
  {
    id: '2',
    title: 'Scrap Metal Collection',
    titleAr: 'مجموعة خردة معدنية',
    description: 'Mixed metal scrap including steel, aluminum, and copper. Perfect for metal recycling facilities.',
    descriptionAr: 'خردة معدنية مختلطة تشمل الصلب والألومنيوم والنحاس. مثالية لمنشآت إعادة تدوير المعادن.',
    type: 'Metal',
    quantity: '2000 kg',
    location: 'Alexandria',
    companyName: 'MetalTech Egypt',
    companyNameAr: 'ميتال تك مصر',
    contactPerson: 'Mohamed Ali',
    email: 'info@metaltech.eg',
    phone: '+201234567891',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    createdAt: '2025-03-02'
  },
  {
    id: '3',
    title: 'Textile Waste Bulk',
    titleAr: 'نفايات نسيجية بالجملة',
    description: 'Clean textile waste from garment manufacturing. Includes cotton, polyester, and mixed fabrics.',
    descriptionAr: 'نفايات نسيجية نظيفة من تصنيع الملابس. تشمل القطن والبوليستر والأقمشة المختلطة.',
    type: 'Textile',
    quantity: '1000 kg',
    location: 'Port Said',
    companyName: 'FabricCycle',
    companyNameAr: 'فابريك سايكل',
    contactPerson: 'Fatima Kamal',
    email: 'contact@fabriccycle.com',
    phone: '+201234567892',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    createdAt: '2025-03-03'
  },
  {
    id: '4',
    title: 'Electronic Components',
    titleAr: 'مكونات إلكترونية',
    description: 'Used electronic components and circuit boards from IT equipment. Valuable for precious metal recovery.',
    descriptionAr: 'مكونات إلكترونية مستعملة ولوحات دوائر من معدات تكنولوجيا المعلومات. قيمة لاستعادة المعادن الثمينة.',
    type: 'Electronic',
    quantity: '300 kg',
    location: 'Giza',
    companyName: 'TechRecycle',
    companyNameAr: 'تك ريسايكل',
    contactPerson: 'Yasser Ibrahim',
    email: 'info@techrecycle.eg',
    phone: '+201234567893',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    createdAt: '2025-03-04'
  }
];

export const Store: React.FC<StoreProps> = ({ isArabic }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const filteredItems = sampleWastes.filter(item => {
    const matchesSearch = (item.title + item.titleAr + item.description + item.descriptionAr)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || item.type === selectedType;
    const matchesLocation = !selectedLocation || item.location === selectedLocation;
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder={isArabic ? 'ابحث عن النفايات...' : 'Search waste...'}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex gap-4">
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">{isArabic ? 'كل الأنواع' : 'All Types'}</option>
            {wasteTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">{isArabic ? 'كل المواقع' : 'All Locations'}</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Waste Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative">
              <img
                src={item.image}
                alt={isArabic ? item.titleAr : item.title}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => toggleFavorite(item.id)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <Heart className={`w-5 h-5 ${favorites.includes(item.id) ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">
                {isArabic ? item.titleAr : item.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {isArabic ? item.descriptionAr : item.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{item.type}</span>
                <span>{item.quantity}</span>
                <span>{item.location}</span>
              </div>
              <button
                onClick={() => setSelectedItem(item)}
                className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors"
              >
                {isArabic ? 'عرض التفاصيل' : 'View Details'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-h-[90vh] overflow-y-auto w-full max-w-3xl">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold text-emerald-900">
                {isArabic ? selectedItem.titleAr : selectedItem.title}
              </h2>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <img
                src={selectedItem.image}
                alt={isArabic ? selectedItem.titleAr : selectedItem.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {isArabic ? 'تفاصيل النفايات' : 'Waste Details'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {isArabic ? selectedItem.descriptionAr : selectedItem.description}
                  </p>
                  <div className="space-y-2">
                    <p><strong>{isArabic ? 'النوع:' : 'Type:'}</strong> {selectedItem.type}</p>
                    <p><strong>{isArabic ? 'الكمية:' : 'Quantity:'}</strong> {selectedItem.quantity}</p>
                    <p><strong>{isArabic ? 'الموقع:' : 'Location:'}</strong> {selectedItem.location}</p>
                    <p><strong>{isArabic ? 'تاريخ النشر:' : 'Posted:'}</strong> {selectedItem.createdAt}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {isArabic ? 'تفاصيل الشركة' : 'Company Details'}
                  </h3>
                  <div className="space-y-2">
                    <p><strong>{isArabic ? 'الشركة:' : 'Company:'}</strong> {isArabic ? selectedItem.companyNameAr : selectedItem.companyName}</p>
                    <p><strong>{isArabic ? 'جهة الاتصال:' : 'Contact Person:'}</strong> {selectedItem.contactPerson}</p>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${selectedItem.email}`} className="text-emerald-600 hover:text-emerald-700">
                        {selectedItem.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${selectedItem.phone}`} className="text-emerald-600 hover:text-emerald-700">
                        {selectedItem.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};