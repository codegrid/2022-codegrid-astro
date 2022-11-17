import { useState } from "preact/hooks";
export const HamburgerMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((bool) => !bool)}
        className="relative flex cursor-pointer flex-col gap-1"
        title="ハンバーガメニュー"
      >
        {[...Array(3)].map((_, index) => (
          <span key={index} className="block h-px w-7 bg-black"></span>
        ))}
      </button>
      {isOpen && (
        <ul className="absolute inset-x-0 top-20 flex w-screen flex-col gap-2 bg-orange-200">
          {links.map((link) => (
            <li>
              <a href={link.href} className="text-blue-700 hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
