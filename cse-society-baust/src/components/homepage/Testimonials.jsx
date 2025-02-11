"use client";
import React from "react";
// import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TestimonialContainer from "./TestimonialContainer";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// register();
const Testimonials = () => {
  return (
    <section className="container">
      <h3 className="text-white text-[45px] text-center">Testimonials</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <TestimonialContainer />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialContainer />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialContainer />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialContainer />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
