import "./style.css";
import { ImagePreloader } from "../ImagePreloader/ImagePreloader";

const CatalogData = [
  {
    id: 1,
    image: "/Catalog/1.webp",
    title: "Вбудована пряма гардеробна з підсвіткою",
    price: "33 000",
  },
  {
    id: 2,
    image: "/Catalog/2.webp",
    title: "Кутова фабрична гардеробна з підсвіткою",
    price: "65 900",
  },
  {
    id: 3,
    image: "/Catalog/3.webp",
    title: "Вбудована гардеробна в передпокій з підсвіткою",
    price: "38 900",
  },
  {
    id: 4,
    image: "/Catalog/4.webp",
    title: "Мінімалістична кутова гардеробна в світлому кольорі",
    price: "49 320",
  },
  {
    id: 5,
    image: "/Catalog/5.webp",
    title: "Класична біла гардеробна з золотою фурнітурою та дзеркалами",
    price: "190 000",
  },

];

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
          {CatalogData.map((wardrobe) => (
            <a
              href={`/productPage/${wardrobe.id}`}
              className="catalog-card"
              key={wardrobe.id}
            >
              <ImagePreloader
                src={wardrobe.image}
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

        <button className="catalog-see-more">Дивитись ще</button>
      </div>
    </section>
  );
}
