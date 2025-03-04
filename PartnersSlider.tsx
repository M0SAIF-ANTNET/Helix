import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface PartnersSliderProps {
  isArabic: boolean;
}

const partners = [
  {
    name: 'EcoTech Solutions',
    logo: 'https://i.postimg.cc/762QJXN9/png-transparent-coming-soon-text-logo-banner.png'
  },
  {
    name: 'Green Industries',
    logo: 'https://i.postimg.cc/762QJXN9/png-transparent-coming-soon-text-logo-banner.png'
  },
  {
    name: 'Sustainable Future',
    logo: 'https://i.postimg.cc/762QJXN9/png-transparent-coming-soon-text-logo-banner.png'
  },
  {
    name: 'Eco Solutions',
    logo: 'https://i.postimg.cc/762QJXN9/png-transparent-coming-soon-text-logo-banner.png'
  },
  {
    name: 'Green Tech',
    logo: 'https://i.postimg.cc/762QJXN9/png-transparent-coming-soon-text-logo-banner.png'
  },
  {
    name: 'Clean Energy',
    logo: 'https://i.postimg.cc/762QJXN9/png-transparent-coming-soon-text-logo-banner.png'
  }
];

export const PartnersSlider: React.FC<PartnersSliderProps> = ({ isArabic }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-emerald-900 mb-12">
          {isArabic ? 'شركاؤنا في النجاح' : 'Our Success Partners'}
        </h2>
        <div className="relative">
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={40}
            slidesPerView={5}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 40 },
            }}
            className="partners-swiper"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="partner-slide p-4 transform transition-all duration-300 hover:scale-110">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 w-auto mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};