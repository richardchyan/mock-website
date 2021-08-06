import React, { useState } from 'react';
import logo from './images/markham-eye-logo-final.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';

const Navbar = () => {

   const [navbar, setNavbar] = useState(false);
   const [navOpen, setNavOpen] = useState(false);
   
   const changeBackground = () => {

      if(window.scrollY >= 110 ) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }
   }

   window.addEventListener('scroll', changeBackground);
   // navbar offset at sm and md is 192 px
   // at lg and above it's 120px

   const handleToggle = () => {
      setNavOpen(prev => !prev);
   }
   
   const closeMenu = () => {
      setNavOpen(false);
   }

   if(navOpen){
      document.querySelector('html').style.overflow = 'hidden';
   } else {
      document.querySelector('html').style.overflow = 'scroll';
   }
  
   return ( 
      <React.Fragment>
         {/* xs to medium */}
         {/* top bar */}
         <nav class={navbar ? 'flex lg:hidden items-center justify-between px-4 bg-gray-700 fixed w-full m-auto' : 'flex lg:hidden items-center justify-between px-4 bg-transparent fixed w-full m-auto'}>
            <a href="#" >
               <img src={logo} alt="Markham Eye Care" className="w-4/5 md:w-2/5 md:mt-2" />
            </a>
            <button onClick={handleToggle} className="nav-open text-4xl text-white text-center">
               {navOpen ? <CgClose /> : <AiOutlineMenu />} 
            </button>
         </nav>

         {/* popout sidebar nav */}
         <div className={navOpen ? "lg:hidden bg-blue-900 text-white w-10/12 h-screen fixed z-10 top-0 left-0 transform translate-x-100 transition ease-in-out duration-700" : "bg-blue-900 text-white w-10/12 h-screen fixed z-10 top-0 left-0 transform -translate-x-full transition ease-in-out duration-700"}>
            <nav className="py-8">
               <a href="#" onClick={closeMenu}>
                  <img src={logo} alt="Markham Eye Care" className="m-auto w-8/12" />
               </a>
               <ul className="pt-5 space-y-6">
                  <li >
                     <a onClick={closeMenu}className="pb-1 text-xl text-white px-4 rounded-md hover:bg-blue-300 transition duration-200" href="#about">About</a>
                  </li>
                  <li >
                     <a onClick={closeMenu}className="pb-1 text-xl text-white px-4 rounded-md hover:bg-blue-300 transition duration-200" href="#services">Services</a>   
                  </li>
                  <li >
                     <a onClick={closeMenu}className="pb-1 text-xl text-white px-4 rounded-md hover:bg-blue-300 transition duration-200" href="#team">Team</a>
                  </li>
                  <li >
                     <a onClick={closeMenu}className="pb-1 text-xl text-white px-4 rounded-md hover:bg-blue-300 transition duration-200" href="#contact">Contact</a>
                  </li>
               </ul>
            </nav>
         </div>


         {/* large and up */}
         <nav className={navbar ? 'hidden lg:flex bg-gray-700 justify-around items-center fixed p-1 max-w-screen-xl' : "hidden lg:flex bg-transparent justify-around items-center fixed p-1 max-w-screen-xl"}>
            <a href="#" className="w-1/4 ">
               <img src={logo} alt="Markham Eye Care" />
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