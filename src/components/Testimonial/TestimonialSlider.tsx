import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import TestimonialCard from "./TestimonialCard";
import { testimonialsData as testimonials } from "../../data/data";

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        className="hidden md:flex items-center justify-center h-full w-[350px] md:w-full  "
        spaceBetween={50}
        slidesPerView={2}
        onSwiper={() => {}}
        onSlideChange={() => {}}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="flex md:hidden items-center justify-center h-full w-[350px] md:w-full  "
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={() => {}}
        onSlideChange={() => {}}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
