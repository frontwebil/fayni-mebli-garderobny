import "./style.css";

export function Customers() {
  return (
    <section className="customers">
      <div className="container">
        <div className="customers-top">
          <h3 className="customers-top-title">Наші замовники</h3>
          <div className="line"></div>
        </div>
        <div className="customers-grid">
          {[...Array(20)].map((_ , i) => (
            <div className="customer-card">
              <img src={`/Customers/${i + 1}.png`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
