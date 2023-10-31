import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import TestimonialCard from "./TestimonialCard";
import { testimonialsData as testimonials } from "../../data/data";

const TestimonialSlider = () => {
  const slidesPerView = window.innerWidth <= 768 ? 1 : 2;
  return (
    <Swiper
      className="flex items-center justify-center w-full h-full "
      spaceBetween={50}
      slidesPerView={slidesPerView}
      onSwiper={() => {}}
      onSlideChange={() => {}}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
