import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { LiaPhoneSolid } from "react-icons/lia";
import "./style.css";

export function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const togglePopup = () => setIsPopupOpen((prev) => !prev);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header ref={headerRef} className={isPopupOpen ? "popup-open" : ""}>
      <div className="header-bar">
        <div className="header-container container">
          <a href="/" className="header-logo">
            <img
              src="/Header/logo.png"
              alt="Логотип Файні Меблі"
              width="194"
              height="50"
            />
          </a>

          <div className="header-right">
            <div className="header-social-icons">
              <a
                href="https://t.me/FainiMebli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <img
                  src="/Header/tg.svg"
                  alt=""
                  className="header-social-icon"
                />
              </a>
              <a
                href="https://msng.link/o?+380974597557=vi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Viber"
              >
                <img
                  src="/Header/viber.svg"
                  alt=""
                  className="header-social-icon"
                />
              </a>
              <a
                href="tel:0800337592"
                className="header-phone-text"
              >
                0800-33-75-92
              </a>
            </div>

            <button
              type="button"
              className={`header-call-button ${isPopupOpen ? "active" : ""}`}
              onClick={togglePopup}
              aria-expanded={isPopupOpen}
              aria-label="Контакти"
            >
              <LiaPhoneSolid />
            </button>
          </div>
        </div>
      </div>

      <div className={`header-popup ${isPopupOpen ? "open" : ""}`}>
        <div className="header-popup-content">
          <div className="header-popup-phones">
            <a href="tel:+380974597557">+38 (097) 459-75-57</a>
            <a href="tel:0800337592">0800 33 75 92</a>
          </div>

          <p className="header-popup-label">Тисніть на іконки:</p>
          <div className="header-popup-messengers">
            <a
              href="https://msng.link/o?+380974597557=vi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Viber"
            >
              <img src="/Header/viber.svg" alt="Viber" className="header-popup-icon" />
            </a>
            <a
              href="https://t.me/FainiMebli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <img src="/Header/tg.svg" alt="Telegram" className="header-popup-icon" />
            </a>
          </div>

          <div className="header-popup-addresses">
            <a
              href="https://maps.app.goo.gl/axJffCrgH6MYBTKz7"
              target="_blank"
              rel="noopener noreferrer"
            >
              м. Київ, вул. Святошинська, 1
            </a>
            <a
              href="https://maps.app.goo.gl/ea9viwE81NzZeGyH6"
              target="_blank"
              rel="noopener noreferrer"
            >
              м. Одеса, вул. Ярослава Мудрого, 29
            </a>
          </div>

          <div className="header-popup-socials">
            <a
              href="http://facebook.com/faynimebli/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/fayni.mebli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/user/faynimebli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
