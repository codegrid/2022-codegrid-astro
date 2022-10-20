import { useState } from "preact/hooks";
import Styles from "./hamburger-menu.module.css";

export const HamburgerMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className={Styles.button}
        type='button'
        onClick={() => setIsOpen((bool) => !bool)}
      >
        <span className={Styles.border}></span>
        <span className={Styles.border}></span>
        <span className={Styles.border}></span>
      </button>
      {isOpen && (
        <ul className={Styles.menu}>
          {links.map((link) => (
            <li>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
