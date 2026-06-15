import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaViber,
  FaYoutube,
} from "react-icons/fa";
import "./style.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-bottom-text">м. Київ, вул. Святошинська, 1</p>
            <p className="footer-bottom-text">
              м. Одеса, вул. Ярослава Мудрого, 29
            </p>
            <a className="footer-bottom-text footer-bottom-link" href="tel:+380974597557">
              +38 (097) 459-75-57
            </a>
            <div className="footer-bottom-phones">
              <a className="footer-bottom-text footer-bottom-link" href="tel:0800337592">
                0800 33 75 92
              </a>
              <span className="footer-bottom-caption">
                Безкоштовно з усіх телефонів
              </span>
            </div>
            <div className="footer-bottom-site">
              <a
                className="footer-bottom-text footer-bottom-link"
                href="https://www.fayni-mebli.com.ua"
                target="_blank"
                rel="noreferrer"
              >
                www.fayni-mebli.com.ua
              </a>
              <span className="footer-bottom-caption">Наш вебсайт</span>
            </div>
            <div className="footer-bottom-socials">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Telegram">
                <FaTelegramPlane />
              </a>
              <a href="#" aria-label="Viber">
                <FaViber />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
