import { AiOutlinePhone } from 'react-icons/ai';
import { FaFax } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { RiMailSendLine } from 'react-icons/ri';

const Contact = () => {
   return ( 
      <div id="contact" className="grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl m-auto justify-between bg-gray-700">
         {/* contact info, phone numbers, email */}
         <div className="flex flex-col m-auto">
            <h2 className="text-3xl text-left text-white font-medium p-2 mb-8 md:mb-6">
               Contact
            </h2>
            
            <p className="text-lg text-white mb-3 font-roboto text-left"> 
               5000 Hwy 7, Markham, ON L3R 4M9 </p>
            <p className="text-sm text-white mb-3 font-roboto text-left">Across the Markham Shopping Plaza</p>
            
            <p className="text-md text-white mb-3 font-roboto text-left">
               <span className="font-bold">Phone: </span> (905)-800-2929
            </p>
            
            <p className="text-md text-white mb-3 font-roboto text-left"> 
               <span className="font-bold">Fax: </span> (905)-800-2111
            </p>
            
            <p className="text-md text-white mb-3 font-roboto text-left">
               <span className="font-bold">E-mail: </span> info@markhameyecare.com
            </p>
         </div>
         {/* embedded map */}
         <div className="m-auto mt-1">
            <iframe className="rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11505.6075401434!2d-79.2885564!3d43.8682243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x521289f6f3c71ec7!2sCF%20Markville!5e0!3m2!1sen!2sca!4v1628196207977!5m2!1sen!2sca" width="300 lg:300" height="300" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
         </div>
         {/* hours and book button repeated */}
         <div className="mt-10 text-left m-auto">
            <h3 className="text-xl text-white font-roboto">Office Hours</h3>
            <p className="text-white font-roboto">Monday to Saturday: 11am to 6pm</p>
            <p className="text-white font-roboto">Sunday: 11am to 5pm</p>
            <button className="border-2 shadow-lg border-gray-200 rounded-lg bg-yellow-100 hover:bg-yellow-200 uppercase font-semibold p-4 mt-4"> 
               <a href="https://www.lenscrafters.ca/lc-ca/eye-exam?storeId=10852&catalogId=11652&langId=-1&fromHeader=true&latLong=&page=0&apptId=&reschedule=&productId=&locationEntry=markham" target="_blank"> Book Appointment</a>
            </button>
         </div>
         
      </div>
    );
}
 
export default Contact;