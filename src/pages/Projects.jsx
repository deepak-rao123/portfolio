
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Cta from  "../components/Cta";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text font-["Neue_Montreal"] uppercase'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold  '>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed font-["Neue_Montreal"]'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <motion.div 
     
      initial={{
                    y: -300,
                    opacity:0,
                  }}
                  transition={{ duration:1.5 }}
                  whileInView={{ opacity:1,y:0 }}
                  viewport={{ once:true }}
      className='flex flex-wrap my-20 gap-16 font-["Neue_Montreal"] '>
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

      <Cta/>
    </section>
  );
};

export default Projects;