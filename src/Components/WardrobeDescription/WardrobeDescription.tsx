import { BiCheck } from "react-icons/bi";
import "./style.css";
import type { Wardrobe } from "../../data/wardrobes";

export function WardrobeDescription({ wardrobe }: { wardrobe: Wardrobe }) {
  return (
    <section className="WardrobeDescription">
      <div className="container">
        <h3 className="WardrobeDescription-subTitle">опис гардеробної</h3>
        <h3 className="WardrobeDescription-title">{wardrobe.title}</h3>
        <div className="line"></div>
        <div className="WardrobeDescription-text">
          {wardrobe.description.split("\n\n").map((paragraph, index) => (
            <p key={index} className="WardrobeDescription-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="WardrobeDescription-size">
          <strong>Розмір:</strong> {wardrobe.size}
        </p>
        <ul className="WardrobeDescription-list">
          {wardrobe.features.map((feature, index) => (
            <li key={index} className="WardrobeDescription-list-item">
              <div className="WardrobeDescription-list-item-img">
                <BiCheck />
              </div>
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
