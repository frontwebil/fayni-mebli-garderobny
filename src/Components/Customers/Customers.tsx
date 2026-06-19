import "./style.css";

export function Customers() {
  return (
    <section
      className="customers"
      id="customers"
      aria-labelledby="customers-title"
    >
      <div className="container">
        <div className="customers-top">
          <h3 className="customers-top-title" id="customers-title">
            Наші замовники
          </h3>
          <div className="line"></div>
        </div>
        <div className="customers-grid">
          {[...Array(20)].map((_, i) => (
            <div className="customer-card" key={i}>
              <img
                src={`/Customers/${i + 1}.png`}
                alt={`Замовник ${i + 1}`}
                loading="lazy"
                decoding="async"
                width="150"
                height="80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
