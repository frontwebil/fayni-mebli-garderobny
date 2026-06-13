import "./style.css";

export function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-text-top-wrapper">
          <h2 className="gallery-text-top-wrapper-title">
            Реальні фото наших гардеробних
          </h2>
          <div className="line"></div>
          <p className="gallery-text-top-wrapper-text">
            Кожен проект створений з увагою до деталей та побажань клієнта. <br />
            Перегляньте реальні фото виконаних гардеробних.
          </p>
        </div>
        <div className="gallery-cards">
          {[...Array(6)].map((_, index) => (
            <div className="gallery-card" key={index}>
              <img
                src={`/Gallery/${index + 1}.webp`}
                alt={`Фото галереї ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button className="gallery-button">Переглянути більше робіт</button>
      </div>
    </section>
  );
}
