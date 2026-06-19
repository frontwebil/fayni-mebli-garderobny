import "./style.css";
import { ImagePreloader } from "../ImagePreloader/ImagePreloader";

const CatalogData = [
  {
    id: 1,
    image: "/Catalog/1.webp",
    title: "Сучасна гардеробна",
    price: "24 800",
  },
  {
    id: 2,
    image: "/Catalog/2.webp",
    title: "Класична гардеробна",
    price: "32 900",
  },
  {
    id: 3,
    image: "/Catalog/3.webp",
    title: "Преміум гардеробна П-подібна з островом",
    price: "58 500",
  },
  {
    id: 4,
    image: "/Catalog/4.webp",
    title: "Гардеробна на мансарду Кутова",
    price: "22 700",
  },
  {
    id: 5,
    image: "/Catalog/5.webp",
    title: "Світла гардеробна Паралельна",
    price: "28 400",
  },
  {
    id: 6,
    image: "/Catalog/6.webp",
    title: "Стильна гардеробна Кутова",
    price: "35 900",
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
