import "./style.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text-wrapper">
          <h1 className="hero-text-wrapper-title">
            Гардеробна,де кожна річ має своє місце
          </h1>
          <div className="line"></div>
          <p className="hero-text-wrapper-text">
            Проектуємо та виготовляємо гардеробні під ваш простір та бюджет
          </p>
        </div>
        <div className="hero-advantages-row">
          <div className="hero-advantage">
            <img
              src="/Hero/advantage-1.svg"
              alt="icon"
              className="hero-advantage-img"
            />
            <p className="hero-advantage-text">
              Індивідуальний проект під ваш простір
            </p>
          </div>
          <div className="hero-advantages-line"></div>
          <div className="hero-advantage">
            <img
              src="/Hero/advantage-2.svg"
              alt="icon"
              className="hero-advantage-img"
            />
            <p className="hero-advantage-text">
              Виготовлення під будь-який бюджет
            </p>
          </div>
          <div className="hero-advantages-line"></div>
          <div className="hero-advantage">
            <img
              src="/Hero/advantage-3.svg"
              alt="icon"
              className="hero-advantage-img"
            />
            <p className="hero-advantage-text">
              Заміри, проект, доставка, монтаж
            </p>
          </div>
        </div>
        <button className="hero-button">
          <img
            src="/Hero/calculator.svg"
            alt="calculator"
            className="hero-button-icon"
          />
          <p>Розрахувати вартість</p>
        </button>
        <div className="header-examples-wardrobe">
          <div className="header-wardrobe">
            <img src="/Hero/examples/1.webp" alt="Сучасні Гардеробні" />
            <p>
              Сучасні
              <br />
              від <span style={{ color: "#D29851" }}>24 800 грн</span>
            </p>
          </div>
          <div className="header-wardrobe">
            <img src="/Hero/examples/2.webp" alt="Класичні Гардеробні" />
            <p>
              Класичні
              <br />
              від <span style={{ color: "#D29851" }}>28 900 грн</span>
            </p>
          </div>
          <div className="header-wardrobe">
            <img src="/Hero/examples/3.webp" alt="Преміум Гардеробні" />
            <p>
              Преміум
              <br />
              від <span style={{ color: "#D29851" }}>36 500 грн</span>
            </p>
          </div>
          <div className="header-wardrobe">
            <img src="/Hero/examples/4.webp" alt="На мансарду Гардеробні" />
            <p>
              На мансарду
              <br />
              від <span style={{ color: "#D29851" }}>22 700 грн</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
