import Link from 'next/link';
import React from 'react';

const MenuIttem = ({name, href}) => {
  return (
    <li>
        <Link href={`${href}`} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-900 md:p-0 md:dark:text-green-500" aria-current="page">{name}</Link>
    </li>
  );
};

export default MenuIttem;