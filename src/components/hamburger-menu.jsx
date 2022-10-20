import { useState } from "preact/hooks";
import { css } from "goober";

export const HamburgerMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className={buttonStyle()}
        type='button'
        onClick={() => setIsOpen((bool) => !bool)}
      >
        {/* 省略 */}
        <span className={borderStyle()}></span>
        <span className={borderStyle()}></span>
        <span className={borderStyle()}></span>
      </button>
      {isOpen && (
        <ul className={menuStyle()}>
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

const buttonStyle = () => css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  position: relative;
`;

const borderStyle = () => css`
  width: 30px;
  height: 1px;
  background-color: black;
`;

const menuStyle = () => css`
  position: absolute;
  width: 100%;
  right: 0;
  left: 0;
  background-color: blanchedalmond;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  list-style: none;
`;
