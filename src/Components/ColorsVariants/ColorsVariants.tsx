import "./style.css";

const COLORS = [
  "Кашемір",
  "аляска",
  "анатрацит",
  "білий",
  "венге магія",
  "горіх лісовий",
  "дуб бароко бурштиновий",
  "дуб бароко золотий",
  "дуб бароко рістрето",
  "дуб евок прибережний",
  "дуб крафт білий",
  "дуб крафт золотий",
  "дуб крафт табако",
  "дуб молочний",
  "дуб сонома трюфель",
  "дуб сонома",
  "симфонія",
  "сірий графіт",
  "сірий",
  "індастріал",
];

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function ColorsVariants() {
  return (
    <section className="ColorsVariants" id="colors">
      <div className="container">
        <h3 className="ColorsVariants-subTitle">ВАРІАНТИ КОЛЬОРІВ</h3>
        <h2 className="ColorsVariants-title">
          Оберіть ідеальне поєднання для вашого інтер'єру
        </h2>
        <div className="line"></div>

        <div className="ColorsVariants-cards">
          {COLORS.map((name) => (
            <div className="ColorsVariants-card" key={name}>
              <div className="ColorsVariants-card-color">
                <img
                  src={`/WardrobeColors/${encodeURIComponent(name)}.webp`}
                  alt={capitalize(name)}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="ColorsVariants-card-title">{capitalize(name)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
