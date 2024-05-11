"use client";

import { BiSolidMoon } from "react-icons/bi";
import { GrSun } from "react-icons/gr";
import { useEffect, useState } from "react";
export const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    if(darkMode) {
        document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className="bg-white h-[16vh] flex items-center shadow px-24 text-black dark:bg-black dark:text-white">
      <nav className="w-full">
        <div className="w-full flex justify-between items-center">
          <a href="/home">
          {!darkMode ? <img className="w-[50px] h-[50px]" src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75" alt="Logo" width={40} height={40} /> : <img className="w-[50px] h-[50px]" src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=96&q=75" alt="Logo" width={40} height={40} />}
          </a>
          <ul className="flex gap-4 items-center text-md">
            <li>
              <a href="/makemyweb" className="hover:text-[#c2efe7]">
                MakeMyWeb
              </a>
            </li>
            <li>
              <a href="/home" className="hover:text-[#c2efe7]">
                Home
              </a>
            </li>
            <li>
              <a href="/company" className="hover:text-[#c2efe7]">
                Company
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-[#c2efe7]">
                Blog
              </a>
            </li>
            <li>
              <div onClick={toggleDarkMode}>
              {darkMode ? <GrSun className='text-yellow-300 cursor-pointer' size={24} /> : <BiSolidMoon className='cursor-pointer text-black' size={24} />}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
