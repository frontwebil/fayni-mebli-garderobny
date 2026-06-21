import { useEffect, useMemo, useState } from "react";
import "./style.css";
import { ImagePreloader } from "../ImagePreloader/ImagePreloader";

export function Testimonials() {
  const testimonials = useMemo(
    () =>
      [...Array(8)].map((_, index) => ({
        src: `/Testimonials/${index + 1}.webp`,
        alt: `Відгук ${index + 1}`,
      })),
    [],
  );

  const [activeReview, setActiveReview] = useState<number | null>(null);

  const closeModal = () => {
    setActiveReview(null);
  };

  useEffect(() => {
    if (activeReview === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeReview]);

  return (
    <section
      className="testimonials"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <div className="testimonials-top">
          <h4 className="testimonials-top-subtitle">відгуків</h4>
          <h2 className="testimonials-top-title" id="testimonials-title">
            820+ відгуків на Google картах <br />з оцінкою 4,4 - Наша головна
            нагорода
          </h2>
          <div className="line"></div>
        </div>
        <div className="testimonials-tablet">
          <ImagePreloader
            src="/Testimonials/tablet.webp"
            alt="820+ відгуків на Google картах з оцінкою 4,4 - Наша головна нагорода"
            loading="lazy"
          />
        </div>
        <div className="testimonials-cards">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              className="testimonials-card"
              key={testimonial.src}
              onClick={() => setActiveReview(index)}
              aria-label={`Відкрити ${testimonial.alt}`}
            >
              <ImagePreloader
                src={testimonial.src}
                alt={testimonial.alt}
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>

      {activeReview !== null && (
        <div className="testimonials-modal" onClick={closeModal}>
          <div
            className="testimonials-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="testimonials-modal-close"
              onClick={closeModal}
              aria-label="Закрити відгук"
            >
              ×
            </button>

            <img
              className="testimonials-modal-image"
              src={testimonials[activeReview].src}
              alt={testimonials[activeReview].alt}
              decoding="async"
            />
          </div>
        </div>
      )}
    </section>
  );
}
