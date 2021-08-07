import stockpor1 from './images/stockpor1.jpg';
import stockpor2 from './images/stockpor2.jpg';
import stockpor3 from './images/stockpor3.jpg';

const Team = () => {

   return ( 
      <div className="mb-4">
         <h2 id="team" className="uppercase text-4xl font-roboto md:mt-4 bg-blue-200 py-8">Our Team</h2>
         <div className="w-11/12 m-auto mt-8 md:mt-10 space-y-16 max-w-screen-xl">
            {/* single portrait div */}
            {/* portrait 1 */}
            <div className="sm:flex sm:space-x-10 justify-evenly">
               <img src={stockpor1} alt="Dr.Jones" 
               className="mb-2 sm:w-1/3 object-cover"/>
                <div className="md:w-1/2 text-left">
                  <h2 className="text-3xl uppercase">Optometrist</h2>
                  <h3 className="text-lg">Dr. Rachel Jones</h3>
                  <p className="font-roboto mt-5">Dr. Rachel Jones grew up in Markham, Ontario. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ducimus praesentium! Ipsam similique suscipit architecto deserunt rem magnam vel. Reiciendis, praesentium? Provident accusantium quibusdam fuga error hic dolorum veniam quas reprehenderit voluptatibus. Laboriosam officia tempore et est, eveniet quos laudantium perferendis harum ad quisquam architecto corrupti, earum vero exercitationem a! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo esse quisquam suscipit necessitatibus sit, obcaecati tempore corrupti vel quasi repellendus natus nostrum ad earum a. Pariatur eveniet praesentium veniam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatibus.</p>
                  </div>
               </div>
              
            {/* portrait 2 */}
            <div className="sm:flex sm:space-x-10 justify-evenly">
               <img src={stockpor2} alt="Dr.Lee"
               className="mb-2 sm:w-1/3 object-cover" />
               <div className="md:w-1/2 text-left">
                  <h2 className="text-3xl uppercase">Optometrist</h2>
                  <h3 className="text-lg">Dr. John Lee</h3>
                  <p className="font-roboto mt-5">Dr. Rachel Jones grew up in Toronto, Ontario. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ducimus praesentium! Ipsam similique suscipit architecto deserunt rem magnam vel. Reiciendis, praesentium? Provident accusantium quibusdam fuga error hic dolorum veniam quas reprehenderit voluptatibus. Laboriosam officia tempore et est, eveniet quos laudantium perferendis harum ad quisquam architecto corrupti, earum vero exercitationem a! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo esse quisquam suscipit necessitatibus sit, obcaecati tempore corrupti vel quasi repellendus natus nostrum ad earum a. Pariatur eveniet praesentium veniam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatibus.</p>      
               </div>
            </div>
            {/* portrait 3 */}
            <div className="sm:flex sm:space-x-10 justify-evenly">
               <img src={stockpor3} alt="Dr.Smith" 
               className="mb-2 sm:w-1/3 object-cover"/>
               <div className="md:w-1/2 text-left">
                  <h2 className="text-3xl uppercase">Optometrist</h2>
                  <h3 className="text-lg">Dr. Jane Smith</h3>
                  <p className="font-roboto mt-5">Dr. Jane Smith grew up in Markham, Ontario. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ducimus praesentium! Ipsam similique suscipit architecto deserunt rem magnam vel. Reiciendis, praesentium? Provident accusantium quibusdam fuga error hic dolorum veniam quas reprehenderit voluptatibus. Laboriosam officia tempore et est, eveniet quos laudantium perferendis harum ad quisquam architecto corrupti, earum vero exercitationem a! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo esse quisquam suscipit necessitatibus sit, obcaecati tempore corrupti vel quasi repellendus natus nostrum ad earum a. Pariatur eveniet praesentium veniam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatibus.</p>
               </div>
            </div>
         </div>
      </div>
    );
}
 
export default Team;