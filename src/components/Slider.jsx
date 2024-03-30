import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
export default function Slider() {
  return (
    <Swiper
    style={{ width: "1245px", borderRadius: "20px", marginTop: "-50px", position: "relative"}}
    className=" w-[1245px]"
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      effect="fade"
      loop={true}
      
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}   
    >
      <SwiperSlide>
        <img
          src="https://escuela.fundacioncontadorteam.com/wp-content/uploads/slide-01-2048x1050.jpg"
          alt=""
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://escuela.fundacioncontadorteam.com/wp-content/uploads/slide-02-2048x1050.jpg"
          alt=""
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://escuela.fundacioncontadorteam.com/wp-content/uploads/slide-01-2048x1050.jpg"
          alt=""
          loading="lazy"
        />
      </SwiperSlide>
    </Swiper>
  );
}
