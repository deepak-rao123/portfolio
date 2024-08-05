import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { Bio } from "../constants";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
  
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-transparent py-2 px-5  mx-3'>
        Hi, I'm
        <span className='font-semibold mx-2  '>{Bio.name}</span>
        👋
        <br />
        A Font End Developer
      </h1>
      
    );

  if (currentStage === 2) {
    return (
       <div>
        <h1></h1>
        

        <Link to='/about' className='bg-transparent '>
          About me

          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
     </div> 
    );
  }

  if (currentStage === 3) {
    return (
      <div >
       

        <Link to='/projects' className=' font-medium text-center sm:text-xl'>
          Projects 
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div >
      

      <Link to='/contact' className='font-medium sm:text-xl text-center'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;