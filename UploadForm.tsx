import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface UploadFormProps {
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

export const UploadForm: React.FC<UploadFormProps> = ({ isArabic }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    titleAr: '',
    description: '',
    descriptionAr: '',
    type: '',
    quantity: '',
    location: '',
    companyName: '',
    companyNameAr: '',
    contactPerson: '',
    email: '',
    phone: ''
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setPreview(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('titleAr', formData.titleAr);
    data.append('description', formData.description);
    data.append('descriptionAr', formData.descriptionAr);
    data.append('type', formData.type);
    data.append('quantity', formData.quantity);
    data.append('location', formData.location);
    data.append('companyName', formData.companyName);
    data.append('companyNameAr', formData.companyNameAr);
    data.append('contactPerson', formData.contactPerson);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    if (preview) {
      const blob = await fetch(preview).then(res => res.blob());
      data.append('image', blob, 'image.png');
    }

    const response = await fetch('http://localhost:5000/waste', {
      method: 'POST',
      body: data,
    });
    const result = await response.json();
    console.log(result);
    alert(isArabic ? 'تمت إضافة النفايات بنجاح!' : 'Waste added successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={`w-full max-w-2xl mx-auto p-6 ${isArabic ? 'rtl' : 'ltr'}`}>
      <h2 className="text-2xl font-bold mb-6 text-emerald-800">
        {isArabic ? 'إضافة نفايات للتبادل' : 'Add Waste for Exchange'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div {...getRootProps()} className="border-2 border-dashed border-emerald-300 rounded-lg p-8 text-center cursor-pointer hover:border-emerald-500 transition-colors">
          <input {...getInputProps()} />
          {preview ? (
            <img src={preview} alt="Preview" className="max-h-48 mx-auto" />
          ) : (
            <div className="flex flex-col items-center">
              <Upload className="w-12 h-12 text-emerald-500 mb-2" />
              <p>{isArabic ? 'اسحب الصورة هنا أو انقر للاختيار' : 'Drag and drop image here or click to select'}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isArabic ? 'العنوان (بالعربية)' : 'Title (Arabic)'}
            </label>
            <input
              type="text"
              name="titleAr"
              value={formData.titleAr}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isArabic ? 'العنوان (بالإنجليزية)' : 'Title (English)'}
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isArabic ? 'الوصف (بالعربية)' : 'Description (Arabic)'}
            </label>
            <textarea
              name="descriptionAr"
              value={formData.descriptionAr}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isArabic ? 'الوصف (بالإنجليزية)' : 'Description (English)'}
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isArabic ? 'النوع' : 'Type'}
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            >
              <option value="">{isArabic ? 'اختر النوع' : 'Select Type'}</option>
              {wasteTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isArabic ? 'الكمية' : 'Quantity'}
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder={isArabic ? 'مثال: 500 كجم' : 'e.g., 500 kg'}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isArabic ? 'الموقع' : 'Location'}
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            >
              <option value="">{isArabic ? 'اختر الموقع' : 'Select Location'}</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isArabic ? 'اسم الشركة (بالعربية)' : 'Company Name (Arabic)'}
            </label>
            <input
              type="text"
              name="companyNameAr"
              value={formData.companyNameAr}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isArabic ? 'اسم الشركة (بالإنجليزية)' : 'Company Name (English)'}
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isArabic ? 'جهة الاتصال' : 'Contact Person'}
            </label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isArabic ? 'البريد الإلكتروني' : 'Email'}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isArabic ? 'رقم الهاتف' : 'Phone'}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 px-4 rounded-md hover:bg-emerald-700 transition-colors font-semibold"
        >
          {isArabic ? 'نشر النفايات' : 'Post Waste'}
        </button>
      </form>
    </div>
  );
};