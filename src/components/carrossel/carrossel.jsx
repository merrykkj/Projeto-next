"use client";

import "./carrosel.css";


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Carrossel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
       <SwiperSlide>
  <div>
    <img src="/home/img3.png" alt="Risoto de Cogumelos" />
    <div className="slide-info">
      <h2>Risoto de Cogumelos</h2>
      <p>Arroz arbório cremoso com funghi porcini e um toque de parmesão.</p>
    </div>
  </div>
</SwiperSlide>
     <SwiperSlide>
  <div>
    <img src="/home/img3.png" alt="Lasanha da Nonna" />
    <div className="slide-info">
      <h2>Lasanha da Nonna</h2>
      <p>Receita tradicional com molho caseiro e muito amor.</p>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div>
    <img src="/home/img3.png" alt="Lasanha da Nonna" />
    <div className="slide-info">
      <h2>Lasanha da Nonna</h2>
      <p>Receita tradicional com molho caseiro e muito amor.</p>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div>
    <img src="/home/img3.png" alt="Lasanha da Nonna" />
    <div className="slide-info">
      <h2>Lasanha da Nonna</h2>
      <p>Receita tradicional com molho caseiro e muito amor.</p>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div>
    <img src="/home/img3.png" alt="Lasanha da Nonna" />
    <div className="slide-info">
      <h2>Lasanha da Nonna</h2>
      <p>Receita tradicional com molho caseiro e muito amor.</p>
    </div>
  </div>
</SwiperSlide>

      </Swiper>
    </div>
  );
}
