import { GoShieldCheck } from "react-icons/go";
import "./style.css";
import { IoCalendarOutline } from "react-icons/io5";

const advantages = [
  {
    icon: "/Advantages/1.svg",
    title: "Оцінка",
    description: (
      <>
        4.4 та 820+ відгуків
        <br />
        на Google Maps
      </>
    ),
  },
  {
    icon: "/Advantages/2.svg",
    title: "20 років",
    description: "на ринку",
  },
  {
    icon: "/Advantages/3.svg",
    title: "Встановлено",
    description: "більше 500 гардеробних",
  },
  {
    icon: "/Advantages/4.svg",
    title: "Найнижчі",
    description: "ціни на ринку",
  },
  {
    icon: "/Advantages/5.svg",
    title: "Під ключ",
    description: "заміри, дизайн, прорахунок, доставка та монтаж",
  },
  {
    icon: "/Advantages/6.svg",
    title: "Безумовна гарантія",
    description: "протягом 18 місяців",
  },
  {
    icon: "/Advantages/7.svg",
    title: "Безкоштовний виїзд",
    description: "замірника за адресою",
  },
  {
    icon: "/Advantages/8.svg",
    title: "Професійні продавці",
    description: "та монтажники",
  },
];

interface AdvantagesProps {
  onOpenContactForm: () => void;
}

export function Advantages({ onOpenContactForm }: AdvantagesProps) {
  return (
    <section
      className="advantages"
      id="advantages"
      aria-labelledby="advantages-title"
    >
      <div className="container">
        <div className="advantages-top">
          <h3 className="advantages-top-title" id="advantages-title">
            Файні меблі — компанія, що створює естетику, комфорт та затишок
          </h3>
          <div className="line"></div>
        </div>

        <div className="advantages-grid">
          {advantages.map((el) => (
            <div className="advantages-grid-card" key={el.title}>
              <div className="advantages-grid-card-img">
                <img src={el.icon} alt="" />
              </div>
              <h2 className="advantages-grid-card-title">{el.title}</h2>
              <p className="advantages-grid-card-description">
                {el.description}
              </p>
            </div>
          ))}
        </div>
        <button className="advantages-button" onClick={onOpenContactForm}>
          <IoCalendarOutline />
          <p>
            Замовити безкоштовний замір <br />
            та 3D візуалізацію
          </p>
        </button>
        <div className="advantages-underbutton-text">
          <GoShieldCheck />
          <p>Консультація та прорахунок безкоштовно.</p>
        </div>
      </div>
    </section>
  );
}
