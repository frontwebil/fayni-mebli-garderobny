import { BiCheck } from "react-icons/bi";
import "./style.css";

export function WardrobeDescription() {
  return (
    <section className="WardrobeDescription">
      <div className="container">
        <h3 className="WardrobeDescription-subTitle">опис гардеробної</h3>
        <h3 className="WardrobeDescription-title">
          Світла гардеробна П-подібна
        </h3>
        <div className="line"></div>
        <p className="WardrobeDescription-creating">
          Ця гардеробна створена для тих, хто цінує порядок, естетику та комфорт
          у кожній деталі. П-подібне планування забезпечує максимальну місткість
          та зручний доступ до всіх речей.
        </p>
        <p className="WardrobeDescription-fasad">
          Світлі фасади, тепле дерево та LED-підсвітка формують вишукану
          атмосферу й візуально роблять простір просторішим. Ідеально підходить
          для сучасних інтер’єрів у стилі мінімалізм або неокласика.
        </p>
        <ul className="WardrobeDescription-list">
          <li className="WardrobeDescription-list-item">
            <div className="WardrobeDescription-list-item-img">
              <BiCheck />
            </div>
            <p>Індивідуальне планування під ваш простір</p>
          </li>
          <li className="WardrobeDescription-list-item">
            <div className="WardrobeDescription-list-item-img">
              <BiCheck />
            </div>
            <p>Практичні внутрішні полиці</p>
          </li>
          <li className="WardrobeDescription-list-item">
            <div className="WardrobeDescription-list-item-img">
              <BiCheck />
            </div>
            <p>Якісні матеріали EGGER</p>
          </li>
          <li className="WardrobeDescription-list-item">
            <div className="WardrobeDescription-list-item-img">
              <BiCheck />
            </div>
            <p>LED-підсвітка в кожній секції</p>
          </li>
          <li className="WardrobeDescription-list-item">
            <div className="WardrobeDescription-list-item-img">
              <BiCheck />
            </div>
            <p>Гарантія 24 місяці</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
