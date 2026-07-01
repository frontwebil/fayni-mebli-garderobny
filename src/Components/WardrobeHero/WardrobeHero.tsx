import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

import "./style.css";
import { useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import type { Wardrobe, MediaItem } from "../../data/wardrobes";

export function WardrobeHero({
  wardrobe,
  openContactModal,
}: {
  wardrobe: Wardrobe;
  openContactModal: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentItem: MediaItem = wardrobe.media[currentIndex];

  const handleThumbClick = (index: number) => {
    setCurrentIndex(index);
  };

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
            {currentItem.type === "video" ? (
              <video
                ref={videoRef}
                src={currentItem.src}
                autoPlay
                controls
                playsInline
                muted
                className="WardrobeHero-main-video"
              />
            ) : (
              <img src={currentItem.src} alt={wardrobe.title} />
            )}
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
            {wardrobe.media.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`wardrobe-swiper-thumb ${index === currentIndex ? "active" : ""}`}
                  onClick={() => handleThumbClick(index)}
                >
                  <img
                    src={item.type === "video" ? item.thumb : item.src}
                    alt={`${wardrobe.title} ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="wardrobe-swiper-img"
                  />
                  {item.type === "video" && (
                    <div className="wardrobe-swiper-play-overlay">
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="wardrobe-play-icon"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="23"
                          fill="rgba(0,0,0,0.5)"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <path d="M19 14L35 24L19 34V14Z" fill="white" />
                      </svg>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="WardrobeHero-right">
          <h1 className="WardrobeHero-right-title">{wardrobe.title}</h1>
          <div className="WardrobeHero-right-mobile-flex">
            <h3 className="WardrobeHero-right-price">
              від <span>{wardrobe.price}</span> грн.
            </h3>
            <button
              className="WardrobeHero-right-button"
              onClick={() => openContactModal()}
            >
              Отримати прорахунок
            </button>
          </div>
          <p className="WardrobeHero-right-text-description">
            {wardrobe.description.split("\n\n").slice(0, 2).join("\n\n")}
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
