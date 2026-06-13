import "./style.css";

export function VideoSection() {
  return (
    <section
      className="VideoSection"
      id="video-section"
      aria-labelledby="video-section-title"
    >
      <div className="container">
        <div className="VideoSection-video"></div>
        <div className="VideoSection-text">
          <p className="VideoSection-subtitle">Відеозвернення</p>
          <h2 id="video-section-title" className="VideoSection-title">
            Дізнайтесь <br /> як швидко та економно замовити функціональну гардеробну
          </h2>
          <div className="line"></div>
          <p>Тисніть на двохвилинне відео</p>
        </div>
      </div>
    </section>
  );
}
