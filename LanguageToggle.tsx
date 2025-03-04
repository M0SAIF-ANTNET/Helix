import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  isArabic: boolean;
  toggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ isArabic, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="language-toggle-fixed bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700 transition-colors shadow-lg"
      aria-label="Toggle Language"
    >
      <Languages className="w-6 h-6" />
    </button>
  );
};