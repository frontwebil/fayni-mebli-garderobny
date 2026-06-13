import { useEffect, useMemo, useState } from "react";
import "./style.css";

export function Gallery() {
  const images = useMemo(
    () =>
      [...Array(6)].map((_, index) => ({
        src: `/Gallery/${index + 1}.webp`,
        alt: `Фото галереї ${index + 1}`,
      })),
    []
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const isModalOpen = activeIndex !== null;

  const openModal = (index: number) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
    setTouchStartX(null);
  };

  const showPrevImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrevImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, activeIndex]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        showNextImage();
      } else {
        showPrevImage();
      }
    }

    setTouchStartX(null);
  };

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
          {images.map((image, index) => (
            <button
              type="button"
              className="gallery-card"
              key={image.src}
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
              />
            </button>
          ))}
        </div>
        <button className="gallery-button">Переглянути більше робіт</button>
      </div>

      {isModalOpen && activeIndex !== null && (
        <div className="gallery-modal" onClick={closeModal}>
          <div
            className="gallery-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-modal-close"
              onClick={closeModal}
              aria-label="Закрити галерею"
            >
              ×
            </button>

            <button
              type="button"
              className="gallery-modal-nav gallery-modal-nav-prev"
              onClick={showPrevImage}
              aria-label="Попереднє фото"
            >
              ‹
            </button>

            <div
              className="gallery-modal-image-wrapper"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                className="gallery-modal-image"
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
              />
            </div>

            <button
              type="button"
              className="gallery-modal-nav gallery-modal-nav-next"
              onClick={showNextImage}
              aria-label="Наступне фото"
            >
              ›
            </button>

            <div className="gallery-modal-footer">
              {/* <p className="gallery-modal-counter">
                {activeIndex + 1} / {images.length}
              </p> */}
              <div className="gallery-modal-dots">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={image.src}
                    className={`gallery-modal-dot ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Відкрити фото ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
