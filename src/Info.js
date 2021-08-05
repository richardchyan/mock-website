import { IoGlassesOutline } from 'react-icons/io5';
import { RiBookletFill } from 'react-icons/ri';
import { AiOutlineForm } from 'react-icons/ai';

const Info = () => {
   return ( 

      <div className="font-roboto flex flex-col">
         <div className="font-roboto flex flex-col">
            <h1 className="font-roboto text-5xl lg:text-8xl text-white bg-opacity-50 rounded mt-36 p-4 w-4/5 m-auto"> Welcome to Markham Eye Care</h1>
            <button className="uppercase bg-blue-100 text-md lg:text-xl  text-black p-3 rounded-3xl m-auto mt-3 hover:bg-blue-300"> 
               <a href="https://www.lenscrafters.ca/lc-ca/eye-exam?storeId=10852&catalogId=11652&langId=-1&fromHeader=true&latLong=&page=0&apptId=&reschedule=&productId=&locationEntry=markham" target="_blank"> Book Appointment</a>
            </button>
         </div>

         <div className="font-roboto mt-20 pb-4 m-auto w-4/5 grid grid-cols-1 md:grid-cols-3 gap-10 text-xl text-white" >
            <div className="font-roboto text-xl text-white">
               <div className="flex justify-evenly items-center mb-2">
                  <span className="text-3xl xl:text-7xl"><RiBookletFill /></span>
                  <h2 className="font-roboto text-3xl text-white uppercase"> Book Now!
                 </h2>
               </div>
               <p className="font-roboto text-base lg:text-xl text-white">New Patients are Always Welcome. Schedule an appointment today!</p>
               <button className="uppercase my-4 bg-yellow-100 text-md lg:text-xl text-black p-3 rounded-3xl hover:bg-yellow-200">
                  <a href="https://www.lenscrafters.ca/lc-ca/eye-exam?storeId=10852&catalogId=11652&langId=-1&fromHeader=true&latLong=&page=0&apptId=&reschedule=&productId=&locationEntry=markham" target="_blank"> Book Now</a>
               </button>
            </div>
            <div className="font-roboto text-xl text-white">
               <div className="flex justify-evenly items-center mb-2">
                  <span className="text-3xl xl:text-7xl"><IoGlassesOutline/></span>
                  <h2 className="font-roboto text-3xl text-white uppercase"> 
                  Services</h2>
               </div>
               <p className="font-roboto text-base lg:text-xl text-white">We strive to provide complete care for our patients. Learn more about all the services we provide below</p>
               <button className="uppercase my-4 bg-yellow-100 text-md lg:text-xl text-black p-3 rounded-3xl hover:bg-yellow-200">
                  <a href="#services">View Below</a>
               </button>
            </div>
            <div className="font-roboto text-xl text-white">
               <div className="flex justify-evenly items-center mb-2">
                  <span className="text-3xl xl:text-7xl"><AiOutlineForm /></span>
                  <h2 className="font-roboto text-3xl text-white uppercase">Online Forms</h2>
               </div>
               <p className="font-roboto text-base lg:text-xl text-white">Our patient forms are available online so they can be completed in the convenience of your own home or office</p>
               <button className="uppercase my-4 bg-yellow-100 text-md lg:text-xl  text-black p-3 rounded-3xl hover:bg-yellow-200"> 
                  <a href="https://www.lenscrafters.ca/lc-ca/eye-exam?storeId=10852&catalogId=11652&langId=-1&fromHeader=true&latLong=&page=0&apptId=&reschedule=&productId=&locationEntry=markham" target="_blank">Show Forms</a>
               </button>
            </div>
         </div>
      </div>
    );
}
 
export default Info;