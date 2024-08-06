// import React from 'react'
// import { motion } from "framer-motion";

// function Projects({projects}) {
//   return (
//     <motion.div 
//     initial={{ opacity:0 }}
//     whileInView={{ opacity:1 }}
//     transition={{ duration:1.5 }}
//     className ="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
//     >
//     <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
//       Projects
//       </h3>
//       <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0A]/80'>
//       {projects?.map((project,i)=>(
//         <div className='w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
//           <motion.img 
//           initial={{
//             y: -300,
//             opacity:0,
//           }}
//           transition={{ duration:1.2 }}
//           whileInView={{ opacity:1,y:0 }}
//           viewport={{ once:true }}
//           src={urlFor(project.image).url()}
//           alt=""
//           />
//           <div></div>
//         </div>
//       ))}
//       </div>
//     </motion.div>
//   )
// }

// export default Projects

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <motion.div 
      //  initial={{ opacity:0 }}
      //  whileInView={{ opacity:1 }}
      //   transition={{ duration:1.5 }} 
      initial={{
                    y: -300,
                    opacity:0,
                  }}
                  transition={{ duration:1.5 }}
                  whileInView={{ opacity:1,y:0 }}
                  viewport={{ once:true }}
      className='flex flex-wrap my-20 gap-16 '>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={projects.icon}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <hr className='border-slate-200' />

      {/* <CTA /> */}
    </section>
  );
};

export default Projects;