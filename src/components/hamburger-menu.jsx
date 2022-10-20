import { useState } from "preact/hooks";

export const HamburgerMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        style={styles.button}
        type='button'
        onClick={() => setIsOpen((bool) => !bool)}
      >
        <span style={styles.border}></span>
        <span style={styles.border}></span>
        <span style={styles.border}></span>
      </button>
      {isOpen && (
        <ul style={styles.menu}>
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

const styles = {
  button: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    position: "relative",
  },
  border: {
    width: "30px",
    height: "1px",
    backgroundColor: "black",
  },
  menu: {
    position: "absolute",
    width: "100%",
    right: 0,
    left: 0,
    backgroundColor: "blanchedalmond",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    boxSizing: "border-box",
    listStyle: "none",
  },
};
