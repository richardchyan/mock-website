import stockpor1 from './images/stockpor1.jpeg';
import stockpor2 from './images/stockpor2.jpeg';
import stockpor3 from './images/stockpor3.jpg';

const Team = () => {

   // const stockpor1 = stockpor1;


   return ( 
      <div>
         <h2 className="uppercase text-4xl font-roboto mt-10 md:mt-4 bg-blue-200 py-8">Our Team</h2>
         <div className="w-80w m-auto mt-8 md:mt-10">
            {/* single portrait div */}
            {/* portrait 1 */}
            <div className="flex space-between items-center">
               <img src={stockpor1} alt="Dr.Jones" 
               className="h-50h w-20w object-contain mr-10" />
               <div className="flex flex-col items-start">
                  <h2 className="text-3xl uppercase">Optometrist</h2>
                  <h3 className="text-lg">Dr. Rachel Jones</h3>
                  <p className="font-roboto mt-5 text-justify">Dr. Rachel Jones grew up in Markham, Ontario. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ducimus praesentium! Ipsam similique suscipit architecto deserunt rem magnam vel. Reiciendis, praesentium? Provident accusantium quibusdam fuga error hic dolorum veniam quas reprehenderit voluptatibus. Laboriosam officia tempore et est, eveniet quos laudantium perferendis harum ad quisquam architecto corrupti, earum vero exercitationem a!</p>
               </div>
            </div>
            {/* portrait 2 */}
            <div className="flex space-evenly items-center">
               <img src={stockpor2} alt="Dr.Lee"
               className="h-50h w-20w object-cover mr-10" />
               <div className="flex flex-col items-start">
                  <h2 className="text-3xl uppercase">Optometrist</h2>
                  <h3 className="text-lg">Dr. John Lee</h3>
                  <p className="font-roboto mt-5 text-justify">Dr. Rachel Jones grew up in Toronto, Ontario. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ducimus praesentium! Ipsam similique suscipit architecto deserunt rem magnam vel. Reiciendis, praesentium? Provident accusantium quibusdam fuga error hic dolorum veniam quas reprehenderit voluptatibus. Laboriosam officia tempore et est, eveniet quos laudantium perferendis harum ad quisquam architecto corrupti, earum vero exercitationem a!</p>
               </div>
            </div>
            {/* portrait 3 */}
            <div className="flex space-evenly items-center">
               <img src={stockpor3} alt="Dr.Smith" 
               className="h-50h w-20w object-scale-down mr-10"/>
               <div className="flex flex-col items-start">
                  <h2 className="text-3xl uppercase">Optometrist</h2>
                  <h3 className="text-lg">Dr. Jane Smith</h3>
                  <p className="font-roboto mt-5 text-justify">Dr. Jane Smith grew up in Markham, Ontario. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ducimus praesentium! Ipsam similique suscipit architecto deserunt rem magnam vel. Reiciendis, praesentium? Provident accusantium quibusdam fuga error hic dolorum veniam quas reprehenderit voluptatibus. Laboriosam officia tempore et est, eveniet quos laudantium perferendis harum ad quisquam architecto corrupti, earum vero exercitationem a!</p>
               </div>
            </div>
         </div>
      </div>
    );
}
 
export default Team;