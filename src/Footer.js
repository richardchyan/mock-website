import { CgArrowUpO } from 'react-icons/cg';

const Footer = () => {
   return ( 
      <div className="font-beezee bg-blue-100 py-8 lg:py-14 flex justify-evenly  ">
         <h1>
            Copyright 2021 &copy; Markham Eye Care
         </h1>
         <button>
            <a href="#">
               <CgArrowUpO />
            </a>
         </button>
     </div>
    );
}
 
export default Footer;