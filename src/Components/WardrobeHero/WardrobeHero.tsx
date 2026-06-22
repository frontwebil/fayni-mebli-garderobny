import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

import "./style.css";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

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

export function WardrobeHero({
  openContactModal,
}: {
  openContactModal: () => void;
}) {
  const [currentImgId, setCurrentImgId] = useState(0);

  return (
    <section className="WardrobeHero">
      <div className="container">
        <a href="/" className="WardrobeHero-back">
          <BiArrowBack />
          <p>На головну</p>
        </a>
      </div>
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
                  className={`wardrobe-swiper-img ${index == currentImgId && "active"}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="WardrobeHero-right">
          <h1 className="WardrobeHero-right-title">
            Світла гардеробна П-подібна
          </h1>
          <div className="WardrobeHero-right-mobile-flex">
            <h3 className="WardrobeHero-right-price">
              від <span>28 400</span> грн.
            </h3>
            <button
              className="WardrobeHero-right-button"
              onClick={() => openContactModal()}
            >
              Отримати прорахунок
            </button>
          </div>
          <p className="WardrobeHero-right-text-description">
            Світло гардеробне у сучасному стилі з м’яким окресом, LED-підсвіткою
            та продуманим естетичним об’ємом. <br />
            <br />
            Ідеальне рішення для тих, хто цінує порядок, естетику та комфорт у
            кожній деталі. Місія полиць, функцій та витончена економність зручно
            розмістити весь гардероб і аксесуари.
          </p>
          <div className="WardrobeHero-right-advantages">
            <div className="WardrobeHero-right-advantage">
              <img src="/Wardrobe/1.svg" alt="" />
              <p>Безкоштовний замір</p>
            </div>
            <div className="WardrobeHero-right-advantage">
              <img src="/Wardrobe/2.svg" alt="" />
              <p>3D-візуалізація</p>
            </div>
            <div className="WardrobeHero-right-advantage">
              <img src="/Wardrobe/3.svg" alt="" />
              <p>Доставка та монтаж</p>
            </div>
            <div className="WardrobeHero-right-advantage">
              <img src="/Wardrobe/4.svg" alt="" />
              <p>Гарантія на всі послуги</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
