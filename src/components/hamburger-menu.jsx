import { useState } from "preact/hooks";
import "./hamburger-menu.css";

export const HamburgerMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className='button'
        type='button'
        onClick={() => setIsOpen((bool) => !bool)}
      >
        <span className='border'></span>
        <span className='border'></span>
        <span className='border'></span>
      </button>
      {isOpen && (
        <ul className='menu'>
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
