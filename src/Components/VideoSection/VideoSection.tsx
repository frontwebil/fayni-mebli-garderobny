import { useState } from "react";
import "./style.css";

export function VideoSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  const videoId = "oYytYK4gGQY";
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <section
      className="VideoSection"
      id="video-section"
      aria-labelledby="video-section-title"
    >
      <div className="container">
        <div className="VideoSection-video">
          {isLoaded ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?si=MYUL5hNaUWnKecfN&autoplay=1`}
              title="Відеозвернення Файні Меблі"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <button
              type="button"
              className="VideoSection-placeholder"
              onClick={() => setIsLoaded(true)}
              aria-label="Відтворити відео"
            >
              <img
                src={thumbnailUrl}
                alt="Відеозвернення Файні Меблі"
                loading="lazy"
                decoding="async"
              />
              <div className="VideoSection-play-btn">
                <svg viewBox="0 0 68 48" width="68" height="48">
                  <path
                    d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                    fill="red"
                  />
                  <path d="M45 24 27 14v20" fill="white" />
                </svg>
              </div>
            </button>
          )}
        </div>
        <div className="VideoSection-text">
          <p className="VideoSection-subtitle">Відеозвернення</p>
          <h2 id="video-section-title" className="VideoSection-title">
            Дізнайтесь <br /> як швидко та економно замовити функціональну
            гардеробну
          </h2>
          <div className="line"></div>
          <p>Тисніть на двохвилинне відео</p>
        </div>
      </div>
    </section>
  );
}
