import React, { useState } from 'react';
import logo from './images/markham-eye-logo-final.png';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

   const [navbar, setNavbar] = useState(false);

   const changeBackground = () => {

      console.log(window.scrollY);
      if(window.scrollY >= 110 ) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }

   }

   // navbar offset at sm and md is 192 px
   // at lg and above it's 120px

   window.addEventListener('scroll', changeBackground);

   return ( 
      <React.Fragment>
         {/* xs to medium */}
         <nav class={navbar ? 'flex lg:hidden items-center px-4 bg-gray-500 fixed w-full m-auto' : 'flex lg:hidden items-center px-4 bg-transparent fixed w-full m-auto'}>
            <a href="#" className="">
               <img src={logo} alt="Markham Eye Care" className="w-3/5" />
            </a>
            <span className="text-4xl text-white">
               <AiOutlineMenu />
            </span>
         </nav>

         {/* large and up */}
         <nav className={navbar ? 'hidden lg:flex bg-gray-700 justify-around items-center fixed p-1 max-w-screen-xl' : "hidden lg:flex bg-transparent justify-around items-center fixed p-1 max-w-screen-xl"}>
            <a href="#">
               <img src={logo} alt="Markham Eye Care" className="w-7/12" />
            </a>
            <ul className="flex flex-row justify-between">
               <li className="cursor-pointer uppercase text-xl text-white px-4">
                  <a href="#about">About</a>
               </li>
               <li className="cursor-pointer uppercase text-xl text-white px-4">
                  <a href="#services">Services</a>   
               </li>
               <li className="cursor-pointer uppercase text-xl text-white px-4">
                  <a href="#team">Team</a>
               </li>
               <li className="cursor-pointer uppercase text-xl text-white px-4">
                  <a href="#contact">Contact</a>
               </li>
            </ul>

         </nav>
      </React.Fragment>
    );
}
 
export default Navbar;