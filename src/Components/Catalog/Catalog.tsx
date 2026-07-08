import "./style.css";
import { ImagePreloader } from "../ImagePreloader/ImagePreloader";
import { wardrobes } from "../../data/wardrobes";

export function Catalog() {
  return (
    <section className="catalog" id="catalog" aria-labelledby="catalog-title">
      <div className="container">
        <div className="catalog-top">
          <h2 className="catalog-title" id="catalog-title">
            Каталог
          </h2>
          <div className="line"></div>
        </div>

        <div className="catalog-cards">
          {wardrobes.map((wardrobe) => (
            <a
              href={`/productPage/${wardrobe.slug}`}
              className="catalog-card"
              key={wardrobe.id}
            >
              <ImagePreloader
                src={wardrobe.catalogImage}
                alt={wardrobe.title}
                className="catalog-card-img"
                loading="lazy"
                decoding="async"
                width={480}
                height={360}
                wrapperClassName="catalog-card-img-wrapper"
              />
              <div className="catalog-card-text-wrapper">
                <h3 className="catalog-card-text">{wardrobe.title}</h3>
                <p className="catalog-card-price">
                  від{" "}
                  <span style={{ color: "rgba(181, 123, 66, 1)" }}>
                    {wardrobe.price} грн
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
