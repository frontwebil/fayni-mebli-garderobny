import "./style.css";

export function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us-img"></div>
        <div className="about-us-text">
          <h2 className="about-us-text-title">Про нас- честно і без прикрас</h2>
          <div className="line"></div>
          <div className="about-us-text-content">
            <div className="about-us-text-content-row">
              <h3 className="about-us-text-content-row-count">01</h3>
              <p className="about-us-text-content-row-text">
                Компанія Файні Меблі вже понад 20 років створюємо гардеробні під
                замовлення по всій Україні.
              </p>
            </div>
            <div className="about-us-text-content-row">
              <h3 className="about-us-text-content-row-count">02</h3>
              <p className="about-us-text-content-row-text">
                Наша мета - зробити якісну та стильну гардеробну доступною
                кожній родині.
              </p>
            </div>
            <div className="about-us-text-content-row">
              <h3 className="about-us-text-content-row-count">03</h3>
              <p className="about-us-text-content-row-text">
                Ми не продаємо обіцянки. Ми продаємо результат.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
