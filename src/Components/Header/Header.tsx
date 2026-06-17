import { IoMdArrowDropright } from "react-icons/io";
import "./style.css";
import { LiaPhoneSolid } from "react-icons/lia";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const closeMenu = () => {
    setIsOpenBurgerMenu(false);
    setIsOpenMenu(false);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <header
      ref={menuRef}
      className={scrolled || isOpenBurgerMenu ? "scrolled" : ""}
    >
      <div className="container">
        <a href="/" className="header-logo">
          <img src="/Header/logo.png" alt="Логотип Файні Меблі" />
        </a>
        {windowWidth >= 900 && (
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
        )}

        <div className="header-right-side">
          {windowWidth <= 900 && (
            <div
              id="nav-icon3"
              className={`${isOpenBurgerMenu && "open"}`}
              onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <a href="tel:0800337592" className="header-call-button">
            <LiaPhoneSolid />
          </a>
        </div>
      </div>
      <div className={`header-menu ${isOpenBurgerMenu && "open"}`}>
        <div className="burger-container">
          <div className="header-menu-contacts">
            <a href="tel:+380974597557">+38 (097) 459-75-57</a>
            <a href="tel:0800337592">0800 33 75 92</a>
          </div>
          <a href="#catalog" onClick={closeMenu}>
            Каталог
          </a>

          <a href="#gallery" onClick={closeMenu}>
            Галерея
          </a>

          <a href="#testimonials" onClick={closeMenu}>
            Відгуки
          </a>

          <a href="#calculating" onClick={closeMenu}>
            Розрахунок вартості
          </a>

          <a href="#advantages" onClick={closeMenu}>
            Наші переваги
          </a>

          <a href="#about" onClick={closeMenu}>
            Про нас
          </a>

          <a href="#customers" onClick={closeMenu}>
            Наші замовники
          </a>

          <a href="#video-section" onClick={closeMenu}>
            Відеозвернення
          </a>

          <div className="header-menu-adresses">
            <a target="_blank" href="https://maps.app.goo.gl/axJffCrgH6MYBTKz7">
              м. Київ, вул. Святошинська, 1
            </a>
            <a target="_blank" href="https://maps.app.goo.gl/ea9viwE81NzZeGyH6">
              м. Одеса, вул. Ярослава Мудрого, 29
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
