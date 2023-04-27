'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='px-36 py-4'>
      <nav className="w-full fixed top-0 left-0 right-0 z-20">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 items-center">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <img src='../Images/Logo.png' className='w-2/4 lg:w-96'/>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="../SVGs/close.svg" width={30} height={30} alt="logo" className='pb-6' />
                  ) : (
                    <Image
                      src="../SVGs/Hamburger_icon.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 bebas-font text-center ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex text-2xl gap-8 ">
                <li className="pb-6 py-2 md:px-6 border-b-2 md:border-b-0 lg:hover:underline">
                  <Link href="#techStack" onClick={() => setNavbar(!navbar)}>
                    Techstack
                  </Link>
                </li>
                <li className="pb-6 py-2 md:px-6 border-b-2 md:border-b-0 lg:hover:underline">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="pb-6 py-2 md:px-6 border-b-2 md:border-b-0 lg:hover:underline">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About me
                  </Link>
                </li>
                <li className="pb-6 py-2 md:px-6 border-b-2 md:border-b-0 lg:hover:underline">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;