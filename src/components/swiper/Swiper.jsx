import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function App() {
  const swpiperdata = [
    {
      Image:
        'https://www.royalenfield.com/content/dam/royal-enfield/finance-offers/united-kingdom/finance_options_db-banner.jpg',
    },
    {
      Image:
        'https://www.royalenfield.com/content/dam/royal-enfield/qatar/home/motorcycles/desktop/interceptor-homepage.jpg',
    },
    {
      Image:
        'https://www.royalenfield.com/content/dam/royal-enfield/classic-350/landing/desktop/l1.jpg',
    },
    {
      Image:
        'https://www.royalenfield.com/content/dam/royal-enfield/shotgun-650/landing/desktop/shotgun-650-motorcycle.jpg',
    },
  ];

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className="w-full h-[80vh]"
    >
      {swpiperdata.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item.Image}
            alt=""
            className="w-full h-[80vh] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}