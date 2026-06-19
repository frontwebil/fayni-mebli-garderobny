import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

import "./style.css";
import { useState } from "react";

const images = [
  "/wardrobesImages/1/1.webp",
  "/wardrobesImages/1/2.webp",
  "/wardrobesImages/1/3.webp",

  "/wardrobesImages/1/1.webp",
  "/wardrobesImages/1/2.webp",
  "/wardrobesImages/1/3.webp",

  "/wardrobesImages/1/1.webp",
  "/wardrobesImages/1/2.webp",
  "/wardrobesImages/1/3.webp",

  "/wardrobesImages/1/1.webp",
  "/wardrobesImages/1/2.webp",
  "/wardrobesImages/1/3.webp",

  "/wardrobesImages/1/1.webp",
  "/wardrobesImages/1/2.webp",
  "/wardrobesImages/1/3.webp",

  "/wardrobesImages/1/1.webp",
  "/wardrobesImages/1/2.webp",
  "/wardrobesImages/1/3.webp",
];

export function WardrobeHero() {
  const [currentImgId, setCurrentImgId] = useState(0);

  return (
    <section className="WardrobeHero">
      <div className="container">
        <div className="WardrobeHero-left">
          <div className="WardrobeHero-left-main-img">
            <img src={images[currentImgId]} alt="" />
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={7}
            freeMode={true}
            scrollbar={{
              draggable: true,
              hide: false,
            }}
            modules={[Scrollbar, FreeMode]}
            className="wardrobe-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Гардеробна ${index + 1}`}
                  onClick={() => setCurrentImgId(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
