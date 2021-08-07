import { ImEye } from 'react-icons/im';
import { AiOutlineCamera } from 'react-icons/ai';
import { FaBookMedical, FaNotesMedical } from 'react-icons/fa';
import { GiLotusFlower } from 'react-icons/gi';
import { ImClipboard } from 'react-icons/im';
import { GiGlassBall } from 'react-icons/gi';

const About = () => {
   return ( 
      <> 
      <div id="about" className="grid grid-cols-1 md:grid-cols-2 w-11/12 gap-20 my-6 md:my-16 m-auto max-w-screen-xl">
         {/* info block */}
         <div className="w-full">
            <h2 className="uppercase font-beezee text-3xl mb-8">Foresight Saves Eyesight</h2>
            <p className="text-left">Proper eye care is important for people of all ages and regular eye exam are encouraged for everyone, but especially for those already wearing glasses or contact lenses. Your vision plays a vital role in your life each and every day, which is why it is so important to take the right steps to maintain good eye health. At Markham Optometry, our eye doctors provide a variety of services, from pediatric eye exams, routine comprehensive eye exams, diabetic eye exams to corrective laser surgery consultations. If you have any questions about our services or procedures, please call us today or schedule an appointment with our doctor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero assumenda iure cum officia labore delectus commodi nesciunt dignissimos asperiores error. lorem50</p>
         </div>
         {/* office hours */} 
         <div className="bg-blue-200 flex flex-col justify-evenly p-8 md:p-14 rounded-xl">
            <h2 className="uppercase font-beezee text-5xl">Office Hours</h2>
            <div className="flex flex-col">
               <p className="text-2xl"> Monday to Saturday: 11am to 6pm</p>
               <p className="text-2xl"> Sunday: 11am to 5pm</p>
            </div>
         </div>
      </div>
      <div id="services">
         {/* services */}
         <h2 className="text-4xl uppercase bg-blue-200 py-8">Our Services</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 m-auto mt-10">
            <div className="flex flex-col p-6">
               <span className="text-7xl text-green-500 border-2 border-blue-300 rounded-2xl m-auto p-3 mb-7">
                  <FaBookMedical />
               </span>
               <h3 className="text-gray-600">
                  Comprehensive Eye Exam
               </h3>
            </div>
            <div className="flex flex-col p-6">
               <span className="text-7xl text-green-500 border-2 border-blue-300 rounded-2xl m-auto p-3 mb-7">
                  <GiGlassBall />
               </span>
               <h3 className="text-gray-600">
                  Soft Contact Lens Fitting
               </h3>
            </div>
            <div className="flex flex-col p-6">
               <span className="text-7xl text-green-500 border-2 border-blue-300 rounded-2xl m-auto p-3 mb-7">
                  <ImEye />
               </span>
               <h3 className="text-gray-600">
                  LASIK Consultation
               </h3>
            </div>
            <div className="flex flex-col p-6">
               <span className="text-7xl text-green-500 border-2 border-blue-300 rounded-2xl m-auto p-3 mb-7">
                  <AiOutlineCamera />
               </span>
               <h3 className="text-gray-600">
                  Advanced Retinal Imaging
               </h3>
            </div>
            <div className="flex flex-col p-6">
               <span className="text-7xl text-green-500 border-2 border-blue-300 rounded-2xl m-auto p-3 mb-7">
                  <GiLotusFlower />
               </span>
               <h3 className="text-gray-600">
                  OHIP Coverage
               </h3>
            </div>
            <div className="flex flex-col p-6">
               <span className="text-7xl text-green-500 border-2 border-blue-300 rounded-2xl m-auto p-3 mb-7">
                  <ImClipboard />
               </span>
               <h3 className="text-gray-600">
                  Direct Insurance Billing
               </h3>
            </div>
         </div>
      </div>
      </>
      
    );
}
 
export default About;