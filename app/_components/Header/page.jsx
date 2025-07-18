"use client"

import React, { useState } from "react";
import MenuIttem from "./_component/MenuIttem";
import LoginButton from "../LoginButton/LoginButton";
import { setting } from "@/lib/setting";



export default function Header () {

    const [menuView, setMenuView] = useState(false)

    return (
        <div>
            

<nav className="bg-white dark:bg-blue-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">

      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className="text-red-600">Полтава</span><span className="text-sky-800">Dent</span></span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      
      
      <button data-collapse-toggle="navbar-sticky" 
      type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
      aria-controls="navbar-sticky" 
      aria-expanded={menuView?"true":"false"} 
      onClick={()=> setMenuView(!menuView)}
      
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={`items-center justify-between ${menuView ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
    <ul className="flex flex-col gap-1 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-full">
      
      
      <MenuIttem name="Головна" href="/"   />
      <MenuIttem name="Послуги" href="/categories/likuvannya-korenevikh-kanaliv"  />
      <MenuIttem name="Лікарі" href="/doctors/vasylyaka-serhiy"  />
      <MenuIttem name="Ціни" href="/prices"  />
      <MenuIttem name="Контакти" href="/about"  />
      
      
      
      
    </ul>
  </div>
  </div>
</nav>

        </div>
    );
}