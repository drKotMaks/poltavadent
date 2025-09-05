import React from 'react';
import { useRouter } from 'next/navigation';

const MenuIttem = ({ name, href, onNavigate }) => {
  const router = useRouter();

  const handleClick = async (e) => {
    // ensure navigation happens programmatically first
    e.preventDefault();
    try {
      await router.push(href);
    } finally {
      if (typeof onNavigate === 'function') onNavigate();
    }
  };

  return (
    <li>
      <a href={href} onClick={handleClick} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-900 md:p-0 md:dark:text-green-500" aria-current="page">
        {name}
      </a>
    </li>
  );
};

export default MenuIttem;