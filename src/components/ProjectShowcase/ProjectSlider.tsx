// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";

const ProjectSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={() => {}}
      onSlideChange={() => {}}
    >
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>

      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>

      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>

      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProjectSlider;
