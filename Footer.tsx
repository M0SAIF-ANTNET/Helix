import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Shield, Book, Heart } from 'lucide-react';

interface FooterProps {
  isArabic: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isArabic }) => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com/helixegypt' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/helixegypt' },
    { icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/helixegypt' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/company/helixegypt' },
    { icon: <Youtube className="w-5 h-5" />, url: 'https://youtube.com/helixegypt' }
  ];

  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Helix</h3>
            <p className="text-emerald-100 mb-6">
              {isArabic
                ? 'نحو مستقبل أكثر استدامة من خلال تبادل النفايات الصناعية'
                : 'Towards a more sustainable future through industrial waste exchange'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-emerald-100 hover:text-white transition-colors">
                  {isArabic ? 'عن هيلكس' : 'About Helix'}
                </a>
              </li>
              <li>
                <a href="/services" className="text-emerald-100 hover:text-white transition-colors">
                  {isArabic ? 'خدماتنا' : 'Our Services'}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-emerald-100 hover:text-white transition-colors">
                  {isArabic ? 'اتصل بنا' : 'Contact Us'}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              {isArabic ? 'قانوني' : 'Legal'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/PrivacyPolicy" className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2">
                  <Book className="w-4 h-4" />
                  {isArabic ? 'الشروط والأحكام' : 'Terms & Conditions'}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              {isArabic ? 'تواصل معنا' : 'Connect With Us'}
            </h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-800 p-2 rounded-full hover:bg-emerald-700 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <a href="mailto:contact@helix.com" className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contact@helix.com
              </a>
              <a href="tel:+201234567890" className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +20 123 456 7890
              </a>
              <p className="text-emerald-100 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Cairo, Egypt
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-100">
          <p className="flex items-center justify-center gap-2">
            <Heart className="w-4 h-4" />
            © 2025 Helix. {isArabic ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};