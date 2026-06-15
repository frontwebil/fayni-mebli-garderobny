import { IoMdArrowDropright } from "react-icons/io";
import "./style.css";
import { LiaPhoneSolid } from "react-icons/lia";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const closeMenu = () => setIsOpenMenu(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={menuRef} className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <a href="/" className="header-logo">
          <img src="/Header/logo.png" alt="Логотип Файні Меблі" />
        </a>
        <nav className="header-nav">
          <a href="#catalog" className="header-nav-link" onClick={closeMenu}>
            Каталог
          </a>
          <a href="#gallery" className="header-nav-link" onClick={closeMenu}>
            Галерея
          </a>
          <a
            href="#testimonials"
            className="header-nav-link"
            onClick={closeMenu}
          >
            Відгуки
          </a>
          <a
            href="#calculating"
            className="header-nav-link"
            onClick={closeMenu}
          >
            Розрахунок вартості
          </a>
          <div className="header-nav-button-menu-wrapper">
            <button
              type="button"
              className={`header-nav-button ${isOpenMenu ? "active" : ""}`}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              aria-expanded={isOpenMenu}
              aria-controls="header-company-menu"
            >
              <p>Про компанію</p>
              <IoMdArrowDropright />
            </button>
            <div
              id="header-company-menu"
              className={`header-nav-under-menu ${isOpenMenu ? "visible" : ""}`}
            >
              <a
                href="#advantages"
                className="header-nav-link"
                onClick={closeMenu}
              >
                Наші переваги
              </a>
              <a
                href="#about"
                className="header-nav-link"
                onClick={closeMenu}
              >
                Про нас
              </a>
              <a
                href="#customers"
                className="header-nav-link"
                onClick={closeMenu}
              >
                Наші замовники
              </a>
              <a
                href="#video-section"
                className="header-nav-link"
                onClick={closeMenu}
              >
                Відеозвернення
              </a>
            </div>
          </div>
        </nav>
        <div className="header-right-side">
          <div className="header-call-button">
            <LiaPhoneSolid />
          </div>
        </div>
      </div>
    </header>
  );
}
