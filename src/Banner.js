import React from 'react';
import Info from './Info';

const Banner = () => {
   return ( 
      <React.Fragment>
         <div className="bg-banner1 bg-center h-full w-full m-auto">
            <div className="bg-black bg-opacity-60">
               <Info />
            </div>
         </div>     
      </React.Fragment>
    

      );
}
 
export default Banner;