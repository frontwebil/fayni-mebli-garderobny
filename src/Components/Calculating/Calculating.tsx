import { useState } from "react";
import "./style.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

export function Calculating() {
  const [currentStep, setCurrentStep] = useState(0);
  const [quizData, setQuizData] = useState({
    type: "",
    style: "",
    room: "",
    size: "",
    budget: "",
  });

  console.log(quizData);
  return (
    <section className="calculating">
      <div className="container">
        <div className="calculating-top">
          <h4 className="calculating-top-subtitle">розрахунок вартості</h4>
          <h3 className="calculating-top-title">
            Дізнайтесь вартість вашої гардеробної
          </h3>
          <div className="line"></div>
        </div>

        <div className="calculating-wrapper">
          <div
            className="calculating-wrapper-left"
            onClick={() => {
              if (currentStep === 0) {
                return;
              }
              setCurrentStep(currentStep - 1);
            }}
          >
            <IoChevronBack />
          </div>
          <div className="calculating-wrapper-content">
            <div className="progress-line">
              <div
                className="progress-line-progress"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
            {currentStep === 0 && (
              <>
                <p className="calculating-wrapper-content-text">
                  Який тип гардеробної вас цікавить?
                </p>
                <div className="calculating-wrapper-grid">
                  <div
                    className="calculating-wrapper-grid-card"
                    onClick={() => {
                      setCurrentStep(currentStep + 1);
                      setQuizData({ ...quizData, type: "Пряма" });
                    }}
                  >
                    <img
                      src="/Calculating/1.webp"
                      alt="Пряма гардеробна"
                      className="calculating-wrapper-grid-card-img"
                    />
                    <p className="calculating-wrapper-grid-card-text">Пряма</p>
                  </div>
                  <div
                    className="calculating-wrapper-grid-card"
                    onClick={() => {
                      setCurrentStep(currentStep + 1);
                      setQuizData({ ...quizData, type: "Кутова" });
                    }}
                  >
                    <img
                      src="/Calculating/2.webp"
                      alt="Кутова гардеробна"
                      className="calculating-wrapper-grid-card-img"
                    />
                    <p className="calculating-wrapper-grid-card-text">Кутова</p>
                  </div>
                  <div
                    className="calculating-wrapper-grid-card"
                    onClick={() => {
                      setCurrentStep(currentStep + 1);
                      setQuizData({ ...quizData, type: "П-подібна" });
                    }}
                  >
                    <img
                      src="/Calculating/3.webp"
                      alt="П-подібна гардеробна"
                      className="calculating-wrapper-grid-card-img"
                    />
                    <p className="calculating-wrapper-grid-card-text">
                      П-подібна
                    </p>
                  </div>
                  <div
                    className="calculating-wrapper-grid-card"
                    onClick={() => {
                      setCurrentStep(currentStep + 1);
                      setQuizData({ ...quizData, type: "Ще не знаю" });
                    }}
                  >
                    <img
                      src="/Calculating/4.webp"
                      alt="Ще не знаю"
                      className="calculating-wrapper-grid-card-img"
                    />
                    <p className="calculating-wrapper-grid-card-text">
                      Ще не знаю
                    </p>
                  </div>
                </div>
              </>
            )}
            {currentStep === 1 && (
              <>
                <p className="calculating-wrapper-content-text">
                  Який стиль вам ближчий?
                </p>
                <div className="calculating-wrapper-column">
                  <button className="calculating-wrapper-column-button">
                    <p>01 Warm Scandinavian</p>
                    {quizData.style === "Warm Scandinavian" && (
                      <div className="calculating-wrapper-column-button-choosed">
                        <FaCheck />
                      </div>
                    )}
                  </button>
                  <button className="calculating-wrapper-column-button">
                    <p>02 Світлий мінімалізм</p>
                    {quizData.style === "Світлий мінімалізм" && (
                      <div className="calculating-wrapper-column-button-choosed">
                        <FaCheck />
                      </div>
                    )}
                  </button>
                  <button className="calculating-wrapper-column-button">
                    <p>03 Темна преміум</p>
                    {quizData.style === "Темна преміум" && (
                      <div className="calculating-wrapper-column-button-choosed">
                        <FaCheck />
                      </div>
                    )}
                  </button>
                  <button className="calculating-wrapper-column-button">
                    <p>04 Класика</p>
                    {quizData.style === "Класика" && (
                      <div className="calculating-wrapper-column-button-choosed">
                        <FaCheck />
                      </div>
                    )}
                  </button>
                  <button className="calculating-wrapper-column-button">
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
          </div>
          <div className="calculating-wrapper-right">
            <IoChevronForward />
          </div>
        </div>
      </div>
    </section>
  );
}
