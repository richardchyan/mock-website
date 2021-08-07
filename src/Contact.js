import { AiOutlinePhone } from 'react-icons/ai';
import { FaFax } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { RiMailSendLine } from 'react-icons/ri';

const Contact = () => {
   return ( 
      <div id="contact" className="grid grid-cols-1 lg:grid-cols-3 my-6 max-w-screen-xl m-auto">
         {/* contact info, phone numbers, email */}
         <div className="flex flex-col">
            <h2 className="uppercase text-2xl bg-blue-100 font-medium p-2 mb-8 md:mb-6">
               Contact
            </h2>
            <div>
               <ul>
                  <span className="inline-block">
                     <FiMapPin />
                  </span>
                  <li className="text-md mb-3 font-medium font-roboto inline-block">
                      7080 Warden Ave L3R 5Y2 Unit #5
                  </li>
                  <li className="text-md mb-3 font-medium font-roboto">Across the Markham Shopping Plaza</li>
               </ul>
            </div>
            <div>
               <span className="inline-block">
                  <AiOutlinePhone />
               </span>
               <p className="text-md mb-3 font-medium font-roboto">Phone: 905-800-2929</p>
               <span className="inline-block"> 
                  <FaFax />
               </span>
               <p className="text-md mb-3 font-medium font-roboto">Fax: 905-800-2111</p>
               <span className="inline-block">
                  <RiMailSendLine />
               </span>
               <p className="text-md mb-3 font-medium font-roboto">Email: info@markhameyecare.com</p>
            </div>

         </div>
         {/* embedded map */}
         <div className="m-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11505.6075401434!2d-79.2885564!3d43.8682243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x521289f6f3c71ec7!2sCF%20Markville!5e0!3m2!1sen!2sca!4v1628196207977!5m2!1sen!2sca" width="400" height="300" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
         </div>
         {/* hours and book button repeated */}
         <div className="mt-10">
            <h3 className="text-xl">Office Hours</h3>
            <p>Monday to Saturday: 11am to 6pm</p>
            <p>Sunday: 11am to 5pm</p>
            <button className="border-2 shadow-lg border-gray-200 rounded-lg bg-yellow-100 hover:bg-yellow-200 uppercase font-semibold p-4 mt-4"> 
               <a href="https://www.lenscrafters.ca/lc-ca/eye-exam?storeId=10852&catalogId=11652&langId=-1&fromHeader=true&latLong=&page=0&apptId=&reschedule=&productId=&locationEntry=markham" target="_blank"> Book Appointment</a>
            </button>
         </div>
         
      </div>
    );
}
 
export default Contact;