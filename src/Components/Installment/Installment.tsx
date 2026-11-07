import { FiCalendar, FiCreditCard, FiMonitor, FiPercent } from "react-icons/fi";
import "./style.css";

const benefits = [
  {
    icon: FiCalendar,
    title: "Термін",
    description: "від 3 до 10 платежів",
  },
  {
    icon: FiPercent,
    title: "0% комісії",
    description: "та страхування",
  },
  {
    icon: FiMonitor,
    title: "Дистанційне оформлення",
    description: "за кілька хвилин",
  },
  {
    icon: FiCreditCard,
    title: "Без довідки про доходи",
    description: "",
  },
];

const banks = [
  { name: "ПриватБанк", src: "/installment/banks/privatbank.png" },
  { name: "monobank", src: "/installment/banks/monobank.svg" },
  { name: "Укрсиббанк", src: "/installment/banks/ukrsibbank.svg" },
  { name: "IdeaBank", src: "/installment/banks/ideabank.svg" },
  { name: "Плати пізніше", src: "/installment/banks/plati.png" },
  { name: "ПУМБ", src: "/installment/banks/pumb.webp" },
];

export function Installment() {
  return (
    <section
      className="installment"
      id="installment"
      aria-labelledby="installment-title"
    >
      <div className="container installment-top">
        <div className="installment-intro">
          <h2 className="installment-title" id="installment-title">
            Гардеробна у розстрочку чи кредит
          </h2>
          <div className="line" />
          <p className="installment-description">
            Створіть зручний простір для речей уже зараз, а сплачуйте частинами
            на вигідних умовах.
          </p>
        </div>

        <div className="installment-benefits">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article className="installment-benefit" key={title}>
              <div className="installment-benefit-icon" aria-hidden="true">
                <Icon />
              </div>
              <h3 className="installment-benefit-title">{title}</h3>
              {description && (
                <p className="installment-benefit-description">{description}</p>
              )}
            </article>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="installment-banks">
          <div className="installment-banks-heading">
            <h2 className="installment-banks-title">
              Оформлюйте в зручному банку
            </h2>
            <div className="line" />
          </div>
          <div className="installment-bank-list">
            {banks.map((bank) => (
              <div className="installment-bank" key={bank.name}>
                <img src={bank.src} alt={bank.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
