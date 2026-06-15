import "./style.css";

export function VideoSection() {
  return (
    <section
      className="VideoSection"
      id="video-section"
      aria-labelledby="video-section-title"
    >
      <div className="container">
        <div className="VideoSection-video">
          <iframe
            src="https://www.youtube.com/embed/oYytYK4gGQY?si=MYUL5hNaUWnKecfN"
            title="Відеозвернення Файні Меблі"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
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
