import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./style.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src="/logo.png" alt="Файні Меблі" loading="lazy" width="120" height="40" />
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/axJffCrgH6MYBTKz7"
              className="footer-bottom-text"
            >
              м. Київ, вул. Святошинська, 1
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/ea9viwE81NzZeGyH6"
              className="footer-bottom-text"
            >
              м. Одеса, вул. Ярослава Мудрого, 29
            </a>
            <a
              className="footer-bottom-text footer-bottom-link"
              href="tel:+380974597557"
            >
              +38 (097) 459-75-57
            </a>
            <div className="footer-bottom-phones">
              <a
                className="footer-bottom-text footer-bottom-link"
                href="tel:0800337592"
              >
                0800 33 75 92
              </a>
              <span className="footer-bottom-caption">
                Безкоштовно з усіх телефонів
              </span>
            </div>
            <div className="footer-bottom-site">
              <a
                className="footer-bottom-text footer-bottom-link"
                href="https://fayni-mebli.com"
                target="_blank"
                rel="noreferrer"
              >
                www.fayni-mebli.com
              </a>
              <span className="footer-bottom-caption">Наш вебсайт</span>
            </div>
            <div className="footer-bottom-socials">
              <a
                href="http://facebook.com/faynimebli/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/fayni.mebli?igsh=cnRlcGhvbDloYmoy"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/user/faynimebli"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
