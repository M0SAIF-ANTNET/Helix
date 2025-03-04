import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSections = ({ isArabic }) => {
  return (
    <div className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Mail className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-emerald-900 mb-2">
              {isArabic ? 'البريد الإلكتروني' : 'Email'}
            </h3>
            <a
              href="mailto:contact@helix.com"
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              contact@helix.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Phone className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-emerald-900 mb-2">
              {isArabic ? 'الهاتف' : 'Phone'}
            </h3>
            <a
              href="tel:+201234567890"
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              +20 123 456 7890
            </a>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-emerald-900 mb-2">
              {isArabic ? 'العنوان' : 'Address'}
            </h3>
            <p className="text-emerald-600">
              {isArabic ? 'القاهرة، مصر' : 'Cairo, Egypt'}
            </p>
          </div>

          {/* Working Hours */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-emerald-900 mb-2">
              {isArabic ? 'ساعات العمل' : 'Working Hours'}
            </h3>
            <p className="text-emerald-600">
              {isArabic ? 'الأحد - الخميس' : 'Sun - Thu'}
              <br />
              9:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
            {isArabic ? 'اتصل بنا' : 'Get in Touch'}
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {isArabic ? 'الاسم' : 'Name'}
                </label>
                <input
                  type="text"
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
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {isArabic ? 'الموضوع' : 'Subject'}
              </label>
              <input
                type="text"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {isArabic ? 'الرسالة' : 'Message'}
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors"
            >
              {isArabic ? 'إرسال' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSections;