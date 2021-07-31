import { IoGlassesOutline } from 'react-icons/io5';
import { RiBookletFill } from 'react-icons/ri';
import { AiOutlineForm } from 'react-icons/ai';

const Info = () => {
   return ( 

      <div className="font-roboto flex flex-col">
         <div className="font-roboto flex flex-col">
            <h1 className="font-roboto text-7xl text-white bg-opacity-50 rounded mt-48 p-4 w-80w m-auto"> Welcome to Markham Eye Care</h1>
            <button className="uppercase bg-yellow-100 text-xl  text-black p-3 rounded-3xl m-auto mt-3"> Book Appointment</button>
         </div>
         <div className="font-roboto mt-20 pb-4 m-auto w-80w grid grid-cols-3 gap-4 text-xl text-white" >
            <div className="font-roboto text-xl text-white">
               <h2 className="font-roboto text-3xl text-white uppercase">
                  <span><RiBookletFill /></span>
               Book Now!</h2>
               <p className="font-roboto text-xl text-white">New Patients are Always Welcome. Schedule an appointment today!</p>
               <button className="uppercase my-4 bg-yellow-100 text-xl  text-black p-3 rounded-3xl">Book Now</button>
            </div>
            <div className="font-roboto text-xl text-white">
               <h2 className="font-roboto text-3xl text-white uppercase"> 
                  <span><IoGlassesOutline/></span>
               Services</h2>
               <p className="font-roboto text-xl text-white">We strive to provide complete care for our patients. Learn more about all the services we provide below</p>
               <button className="uppercase my-4 bg-yellow-100 text-xl  text-black p-3 rounded-3xl">View Below</button>
            </div>
            <div className="font-roboto text-xl text-white">
               <h2 className="font-roboto text-3xl text-white uppercase">
                  <span><AiOutlineForm /></span>Online
               Forms</h2>
               <p className="font-roboto text-xl text-white">Our patient forms are available online so they can be completed in the convenience of your own home or office</p>
               <button className="uppercase my-4 bg-yellow-100 text-xl  text-black p-3 rounded-3xl"> Show Forms</button>
            </div>
         </div>
      </div>
    );
}
 
export default Info;