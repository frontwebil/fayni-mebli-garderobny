import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";
import { ImagePreloader } from "../ImagePreloader/ImagePreloader";
import type { Wardrobe } from "../../data/wardrobes";
import { wardrobes } from "../../data/wardrobes";

export function RelatedProducts({
  currentWardrobe,
}: {
  currentWardrobe: Wardrobe;
}) {
  const related = wardrobes.filter((w) => w.id !== currentWardrobe.id);

  return (
    <section className="related-products">
      <div className="container">
        <p className="related-products-label">НАШІ ТОВАРИ</p>
        <h2 className="related-products-title">
          Вам також можуть сподобатись
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="related-products-swiper"
        >
          {related.map((wardrobe) => (
            <SwiperSlide key={wardrobe.id}>
              <a
                href={`/productPage/${wardrobe.slug}`}
                className="related-products-card"
              >
                <ImagePreloader
                  src={wardrobe.catalogImage}
                  alt={wardrobe.title}
                  className="related-products-card-img"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="related-products-card-title">
                  {wardrobe.title}
                </h3>
                <p className="related-products-card-price">
                  {wardrobe.price} грн.
                </p>
                <span className="related-products-card-btn">Детальніше</span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
