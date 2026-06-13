import { IoMdArrowDropright } from "react-icons/io";
import "./style.css";
import { LiaPhoneSolid } from "react-icons/lia";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);

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

  return (
    <header ref={menuRef}>
      <div className="container">
        <div className="header-logo">
          <img src="/Header/logo.png" alt="Файні Меблі" />
        </div>
        <nav className="header-nav">
          <a href="#" className="header-nav-link">
            Каталог
          </a>
          <a href="#" className="header-nav-link">
            Галерея
          </a>
          <a href="#" className="header-nav-link">
            Відгуки
          </a>
          <a href="#" className="header-nav-link">
            Розрахунок вартості
          </a>
          <div className="header-nav-button-menu-wrapper">
            <button
              className={`header-nav-button ${isOpenMenu ? "active" : ""}`}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <p>Про компанію</p>
              <IoMdArrowDropright />
            </button>
            <div className={`header-nav-under-menu ${isOpenMenu && "visible"}`}>
              <a
                href="#"
                className="header-nav-link"
                onClick={() => setIsOpenMenu(false)}
              >
                Про нас
              </a>
              <a
                href="#"
                className="header-nav-link"
                onClick={() => setIsOpenMenu(false)}
              >
                Наші замовники
              </a>
              <a
                href="#"
                className="header-nav-link"
                onClick={() => setIsOpenMenu(false)}
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
