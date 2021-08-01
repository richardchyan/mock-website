import { AiOutlinePhone } from 'react-icons/ai';
import { FaFax } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { RiMailSendLine } from 'react-icons/ri';

const Contact = () => {
   return ( 
      <div id="contact" className="bg-gray-50 grid grid-cols-1 lg:grid-cols-3 p-20">
         {/* contact info, phone numbers, email */}
         <div className="flex flex-col">
            <h2 className="uppercase text-2xl bg-blue-100 border-2 border-gray-50 rounded-xl font-medium p-2 mb-10 md:mb-6">
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
               <p className="text-md mb-3 font-medium font-roboto">Email: info@markhameyecentre.com</p>
            </div>

         </div>
         {/* embedded map */}
         <div className="m-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5757.079817384668!2d-79.326928!3d43.823902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3877fe44031%3A0x361bcfd8742301db!2s30%20Gibson%20Dr%2C%20Markham%2C%20ON%20L3R%208B5!5e0!3m2!1sen!2sca!4v1627768976354!5m2!1sen!2sca" width="300" height="300" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
         </div>
         {/* hours and book button repeated */}
         <div className="mt-14">
            <h3 className="text-xl">Office Hours</h3>
            <p>Monday to Saturday: 11am to 6pm</p>
            <p>Sunday: 11am to 5pm</p>
            <button className="border-2 border-gray-50 rounded-3xl bg-yellow-100 uppercase font-semibold p-4 mt-4"> Book an Appointment</button>
         </div>
         
      </div>
    );
}
 
export default Contact;