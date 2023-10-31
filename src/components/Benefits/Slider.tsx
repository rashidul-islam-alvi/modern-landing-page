import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import SlideCard from "./SlideCard";

const Slider = () => {
  const slideCount = 3;

  const slideElements = Array.from({ length: slideCount }, (_, index) => (
    <SwiperSlide key={index}>
      <SlideCard />
    </SwiperSlide>
  ));

  return (
    <section className=" md:w-[75%] w-full bg-white rounded-3xl h-[400px] md:h-[90%] px-5 py-5 text-black">
      <Swiper
        className="pb-10 md:pb-10"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, type: "bullets" }}
        onSwiper={() => {}}
        onSlideChange={() => {}}
      >
        {slideElements}
      </Swiper>
    </section>
  );
};

export default Slider;
