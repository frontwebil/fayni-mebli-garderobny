import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { siteConfig } from "../../data/siteConfig";
import "./style.css";

export function Footer() {
  const { phones, messengers, socials, addresses, website } = siteConfig;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src="/logo.png" alt="Файні Меблі" loading="lazy" width="120" height="40" />
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            {addresses.map((addr) => (
              <a
                key={addr.city}
                target="_blank"
                rel="noopener noreferrer"
                href={addr.mapUrl}
                className="footer-bottom-text"
              >
                {addr.text}
              </a>
            ))}

            <a
              className="footer-bottom-text footer-bottom-link"
              href={phones[0].href}
            >
              {phones[0].number}
            </a>

            <div className="footer-bottom-phones">
              <a
                className="footer-bottom-text footer-bottom-link"
                href={phones[1].href}
              >
                {phones[1].number}
              </a>
              {phones[1].caption && (
                <span className="footer-bottom-caption">{phones[1].caption}</span>
              )}
            </div>

            <div className="footer-bottom-site">
              <a
                className="footer-bottom-text footer-bottom-link"
                href={website.url}
                target="_blank"
                rel="noreferrer"
              >
                {website.label}
              </a>
              <span className="footer-bottom-caption">Наш вебсайт</span>
            </div>

            <div className="footer-messenger-badges">
              <a
                href={messengers.viber.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-messenger-badge footer-messenger-badge--viber"
              >
                <img src={messengers.viber.footerIcon} alt={messengers.viber.label} />
                <span>{messengers.viber.label}</span>
              </a>
              <a
                href={messengers.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-messenger-badge footer-messenger-badge--telegram"
              >
                <img src={messengers.telegram.footerIcon} alt={messengers.telegram.label} />
                <span>{messengers.telegram.label}</span>
              </a>
            </div>

            <div className="footer-bottom-socials">
              <a
                href={socials.facebook.href}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={socials.instagram.href}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={socials.youtube.href}
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
