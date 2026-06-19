import { useState, type FormEvent } from "react";
import "./style.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { ImagePreloader } from "../ImagePreloader/ImagePreloader";


const TOTAL_STEPS = 6 as const;
const STEP_KEYS = [
  "type",
  "style",
  "room",
  "size",
  "budget",
  "contact",
] as const;
type QuizKey = (typeof STEP_KEYS)[number];

export function Calculating() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [quizData, setQuizData] = useState({
    type: "",
    style: "",
    room: "",
    size: "",
    budget: "",
    name: "",
    phone: "+380 ",
  });

  const getPhoneDigits = (value: string) => {
    const digits = value.replace(/\D/g, "");

    if (!digits) return "";

    if (digits.startsWith("380")) {
      return digits.slice(3, 12);
    }

    if (digits.startsWith("0")) {
      return digits.slice(1, 10);
    }

    return digits.slice(0, 9);
  };

  const currentKey = STEP_KEYS[currentStep] as QuizKey;
  const currentAnswer =
    currentKey === "contact"
      ? ""
      : quizData[currentKey as keyof typeof quizData];
  const phoneDigits = getPhoneDigits(quizData.phone);
  const isContactStepValid =
    quizData.name.trim().length > 1 && phoneDigits.length === 9;
  const isCurrentAnswered =
    currentKey === "contact"
      ? isContactStepValid
      : currentAnswer.trim().length > 0;

  const isPrevDisabled = currentStep <= 0;
  const isNextDisabled = currentStep >= TOTAL_STEPS - 1 || !isCurrentAnswered;

  const goPrev = () => {
    if (isPrevDisabled) return;
    setCurrentStep((s) => Math.max(0, s - 1));
  };

  const goNext = () => {
    if (isNextDisabled) return;
    setCurrentStep((s) => Math.min(TOTAL_STEPS - 1, s + 1));
  };

  const selectAndNext = (key: QuizKey, value: string) => {
    setQuizData((prev) => ({ ...prev, [key]: value }));
    setCurrentStep((s) => Math.min(TOTAL_STEPS - 1, s + 1));
  };

  const formatPhone = (value: string) => {
    const digits = getPhoneDigits(value);

    if (!digits) return "+380 ";

    return `+380 ${digits}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isContactStepValid || isLoading) return;

    setIsLoading(true);

    try {
      await fetch(
        "https://kuhni-back.vercel.app/api/sendMessageToTelegramGarderobny",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: quizData.name,
            phone: quizData.phone.slice(4, quizData.phone.length).trim(),
            quizResaults: quizData,
          }),
        },
      );

      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="calculating"
      id="calculating"
      aria-labelledby="calculating-title"
    >
      <div className="container">
        <div className="calculating-top">
          <h4 className="calculating-top-subtitle">розрахунок вартості</h4>
          <h3 className="calculating-top-title" id="calculating-title">
            Дізнайтесь вартість вашої гардеробної
          </h3>
          <div className="line"></div>
        </div>

        <div className="calculating-wrapper">
          {!submitted && (
            <button
              type="button"
              className={`calculating-wrapper-left ${
                isPrevDisabled ? "" : "active"
              }`}
              onClick={goPrev}
              disabled={isPrevDisabled}
              aria-label="Назад"
            >
              <IoChevronBack />
            </button>
          )}
          <div className="calculating-wrapper-content">
            {submitted ? (
              <div className="calculating-success">
                <div className="calculating-success-icon">✓</div>
                <h3 className="calculating-success-title">Дякуємо!</h3>
                <p className="calculating-success-subtitle">
                  Вашу заявку відправлено. Ми зв'яжемося з вами найближчим часом
                </p>
              </div>
            ) : (
              <>
                <div className="progress-line">
                  <div
                    className="progress-line-progress"
                    style={{
                      width: `${((currentStep + 1) / TOTAL_STEPS) * 100}%`,
                    }}
                  ></div>
                </div>
                {currentStep === 0 && (
                  <>
                    <p className="calculating-wrapper-content-text">
                      Який тип гардеробної вас цікавить?
                    </p>
                    <div className="calculating-wrapper-grid">
                      <button
                        type="button"
                        className={`calculating-wrapper-grid-card ${
                          quizData.type === "Пряма" ? "selected" : ""
                        }`}
                        onClick={() => {
                          selectAndNext("type", "Пряма");
                        }}
                      >
                        <ImagePreloader
                          src="/Calculating/1.webp"
                          alt="Пряма гардеробна"
                          className="calculating-wrapper-grid-card-img"
                          loading="lazy"
                          decoding="async"
                        />
                        {quizData.type === "Пряма" && (
                          <div className="calculating-wrapper-grid-card-choosed">
                            <FaCheck />
                          </div>
                        )}
                        <p className="calculating-wrapper-grid-card-text">
                          Пряма
                        </p>
                      </button>
                      <button
                        type="button"
                        className={`calculating-wrapper-grid-card ${
                          quizData.type === "Кутова" ? "selected" : ""
                        }`}
                        onClick={() => {
                          selectAndNext("type", "Кутова");
                        }}
                      >
                        <ImagePreloader
                          src="/Calculating/2.webp"
                          alt="Кутова гардеробна"
                          className="calculating-wrapper-grid-card-img"
                          loading="lazy"
                          decoding="async"
                        />
                        {quizData.type === "Кутова" && (
                          <div className="calculating-wrapper-grid-card-choosed">
                            <FaCheck />
                          </div>
                        )}
                        <p className="calculating-wrapper-grid-card-text">
                          Кутова
                        </p>
                      </button>
                      <button
                        type="button"
                        className={`calculating-wrapper-grid-card ${
                          quizData.type === "П-подібна" ? "selected" : ""
                        }`}
                        onClick={() => {
                          selectAndNext("type", "П-подібна");
                        }}
                      >
                        <ImagePreloader
                          src="/Calculating/3.webp"
                          alt="П-подібна гардеробна"
                          className="calculating-wrapper-grid-card-img"
                          loading="lazy"
                          decoding="async"
                        />
                        {quizData.type === "П-подібна" && (
                          <div className="calculating-wrapper-grid-card-choosed">
                            <FaCheck />
                          </div>
                        )}
                        <p className="calculating-wrapper-grid-card-text">
                          П-подібна
                        </p>
                      </button>
                      <button
                        type="button"
                        className={`calculating-wrapper-grid-card ${
                          quizData.type === "Ще не знаю" ? "selected" : ""
                        }`}
                        onClick={() => {
                          selectAndNext("type", "Ще не знаю");
                        }}
                      >
                        <ImagePreloader
                          src="/Calculating/4.webp"
                          alt="Ще не знаю"
                          className="calculating-wrapper-grid-card-img"
                          loading="lazy"
                          decoding="async"
                        />
                        {quizData.type === "Ще не знаю" && (
                          <div className="calculating-wrapper-grid-card-choosed">
                            <FaCheck />
                          </div>
                        )}
                        <p className="calculating-wrapper-grid-card-text">
                          Ще не знаю
                        </p>
                      </button>
                    </div>
                  </>
                )}
                {currentStep === 1 && (
                  <>
                    <p className="calculating-wrapper-content-text">
                      Який стиль вам ближчий?
                    </p>
                    <div className="calculating-wrapper-column">
                      <button
                        type="button"
                        className={`calculating-wrapper-column-button ${
                          quizData.style === "Warm Scandinavian"
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          selectAndNext("style", "Warm Scandinavian")
                        }
                      >
                        <p>01 Warm Scandinavian</p>
                        {quizData.style === "Warm Scandinavian" && (
                          <div className="calculating-wrapper-column-button-choosed">
                            <FaCheck />
                          </div>
                        )}
                      </button>
                      <button
                        type="button"
                        className={`calculating-wrapper-column-button ${
                          quizData.style === "Світлий мінімалізм"
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          selectAndNext("style", "Світлий мінімалізм")
                        }
                      >
                        <p>02 Світлий мінімалізм</p>
                        {quizData.style === "Світлий мінімалізм" && (
                          <div className="calculating-wrapper-column-button-choosed">
                            <FaCheck />
                          </div>
                        )}
                      </button>
                      <button
                        type="button"
                        className={`calculating-wrapper-column-button ${
                          quizData.style === "Темна преміум" ? "selected" : ""
                        }`}
                        onClick={() =>
                          selectAndNext("style", "Темна преміум")
                        }
                      >
                        <p>03 Темна преміум</p>
                        {quizData.style === "Темна преміум" && (
                          <div className="calculating-wrapper-column-button-choosed">
                            <FaCheck />
                          </div>
                        )}
                      </button>
                      <button
                        type="button"
                        className={`calculating-wrapper-column-button ${
                          quizData.style === "Класика" ? "selected" : ""
                        }`}
                        onClick={() => selectAndNext("style", "Класика")}
                      >
                        <p>04 Класика</p>
                        {quizData.style === "Класика" && (
                          <div className="calculating-wrapper-column-button-choosed">
                            <FaCheck />
                          </div>
                        )}
                      </button>
                      <button
                        type="button"
                        className={`calculating-wrapper-column-button ${
                          quizData.style === "Сучасний luxury" ? "selected" : ""
                        }`}
                        onClick={() =>
                          selectAndNext("style", "Сучасний luxury")
                        }
                      >
                        <p>05 Сучасний luxury</p>
                        {quizData.style === "Сучасний luxury" && (
                          <div className="calculating-wrapper-column-button-choosed">
                            <FaCheck />
                          </div>
                        )}
                      </button>
                    </div>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <p className="calculating-wrapper-content-text">
                      Для якого приміщення?
                    </p>
                    <div className="calculating-wrapper-column">
                      {[
                        ["01 Окрема кімната", "Окрема кімната"],
                        ["02 Спальня", "Спальня"],
                        ["03 Мансарда", "Мансарда"],
                        ["04 Ніша", "Ніша"],
                        ["05 Інше", "Інше"],
                      ].map(([label, value]) => (
                        <button
                          key={value}
                          type="button"
                          className={`calculating-wrapper-column-button ${
                            quizData.room === value ? "selected" : ""
                          }`}
                          onClick={() => selectAndNext("room", String(value))}
                        >
                          <p>{label}</p>
                          {quizData.room === value && (
                            <div className="calculating-wrapper-column-button-choosed">
                              <FaCheck />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <p className="calculating-wrapper-content-text">
                      Приблизний розмір?
                    </p>
                    <div className="calculating-wrapper-column">
                      {[
                        ["до 4м2", "до 4м2"],
                        ["4-6м2", "4-6м2"],
                        ["6-10м2", "6-10м2"],
                        ["10+м2", "10+м2"],
                        ["Не знаю", "Не знаю"],
                      ].map(([label, value]) => (
                        <button
                          key={value}
                          type="button"
                          className={`calculating-wrapper-column-button ${
                            quizData.size === value ? "selected" : ""
                          }`}
                          onClick={() => selectAndNext("size", String(value))}
                        >
                          <p>{label}</p>
                          {quizData.size === value && (
                            <div className="calculating-wrapper-column-button-choosed">
                              <FaCheck />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <p className="calculating-wrapper-content-text">
                      Який бюджет розглядаєте?
                    </p>
                    <div className="calculating-wrapper-column">
                      {[
                        ["До 30000 грн", "До 30000 грн"],
                        ["30-60 тис.", "30-60 тис."],
                        ["60-100 тис.", "60-100 тис."],
                        ["100+ тис.", "100+ тис."],
                        ["Потрібна консультація", "Потрібна консультація"],
                      ].map(([label, value]) => (
                        <button
                          key={value}
                          type="button"
                          className={`calculating-wrapper-column-button ${
                            quizData.budget === value ? "selected" : ""
                          }`}
                          onClick={() => {
                            selectAndNext("budget", String(value));
                          }}
                        >
                          <p>{label}</p>
                          {quizData.budget === value && (
                            <div className="calculating-wrapper-column-button-choosed">
                              <FaCheck />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {currentStep === 5 && (
                  <>
                    <p className="calculating-wrapper-content-text calculating-wrapper-content-text-last">
                      Ми вже підготували для вас кілька рішень <br />
                      Як з Вами зв'язатись?
                    </p>
                    <form
                      className="calculating-wrapper-content-text-form-wrapper"
                      onSubmit={handleSubmit}
                    >
                      <div className="calculating-wrapper-content-text-form">
                        <input
                          type="text"
                          placeholder="Ваше ім'я"
                          value={quizData.name}
                          onChange={(e) =>
                            setQuizData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                        />
                        <input
                          type="tel"
                          placeholder="+380 500000000"
                          inputMode="numeric"
                          maxLength={14}
                          value={quizData.phone}
                          onChange={(e) =>
                            setQuizData((prev) => ({
                              ...prev,
                              phone: formatPhone(e.target.value),
                            }))
                          }
                        />
                      </div>
                      <button
                        type="submit"
                        className="calculating-wrapper-content-text-form-button"
                        disabled={!isContactStepValid || isLoading}
                      >
                        {isLoading && <span className="spinner"></span>}
                        {isLoading ? "Відправляємо..." : "Отримати прорахунок"}
                      </button>
                    </form>
                  </>
                )}
              </>
            )}
          </div>
          {!submitted && (
            <button
              type="button"
              className={`calculating-wrapper-right ${
                isNextDisabled ? "" : "active"
              }`}
              onClick={goNext}
              disabled={isNextDisabled}
              aria-label="Вперед"
            >
              <IoChevronForward />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
