import { useState } from "preact/hooks";
export const HamburgerMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        type='button'
        onClick={() => setIsOpen((bool) => !bool)}
        className='flex flex-col gap-1 cursor-pointer relative'
      >
        {[...Array(3)].map((_, index) => (
          <span key={index} className='w-7 h-px bg-black block'></span>
        ))}
      </button>
      {isOpen && (
        <ul className='absolute w-screen inset-x-0 bg-orange-200 flex flex-col gap-2 top-20'>
          {links.map((link) => (
            <li>
              <a href={link.href} className='m-2 text-blue-700 hover:underline'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
