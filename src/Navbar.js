import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

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

      <div>
         <nav className={navbar ? 'bg-gray-800 flex justify-evenly items-center fixed w-full p-6' : "bg-transparent flex justify-evenly items-center fixed w-full p-6"}>
            <div className="text-7xl text-white">Logo here</div>
            <ul className="flex flex-row justify-between">
               <li className="cursor-pointer uppercase text-xl text-white px-4">
                  <Link activeClass="active" to="about" spy={true} smooth={true} duration={700}>
                     About
                  </Link>
               </li>
               <li className="cursor-pointer uppercase text-xl text-white px-4">
                  <Link activeClass="active" to="services" spy={true} smooth={true} duration={700}>
                     Services
                  </Link>
               </li>
               <li className="cursor-pointer uppercase text-xl text-white px-4">
                  <Link activeClass="active" to="team" spy={true} smooth={true} duration={700}>
                     Team
                  </Link>
               </li>
               <li className="cursor-pointer uppercase text-xl text-white px-4">
                  <Link activeClass="active" to="contact" spy={true} smooth={true} duration={700}>
                     Contact
                  </Link>
               </li>
            </ul>
         </nav>
      </div>
    );
}
 
export default Navbar;