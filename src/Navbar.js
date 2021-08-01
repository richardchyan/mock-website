import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

   const [navbar, setNavbar] = useState(false);

   const changeBackground = () => {

      console.log(window.scrollY);
      if(window.scrollY >= 120 ) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }

   }

   // navbar offset at sm and md is 192 px
   // at lg and above it's 120px

   window.addEventListener('scroll', changeBackground);

   return ( 

      <div>
         <nav className={navbar ? 'bg-gray-700 flex justify-evenly items-center fixed w-full p-6' : "bg-transparent flex justify-evenly items-center fixed w-full p-6"}>
            <div className="text-7xl text-white">Logo here</div>
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
      </div>
    );
}
 
export default Navbar;