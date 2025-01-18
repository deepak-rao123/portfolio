import React from "react"
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { Tilt } from "react-tilt";
import  Cta from "../components/Cta";
import { Bio, skills, education } from "../constants"



const About = () => {
  return (
 <section className="max-container w-full  ">
  <h1 className="head-text font-['Neue_Montreal'] ">
    Hello, I'm  <br /><span className="blue-gradient_text font-semibold drop-shadow ">{Bio.name}</span>
  </h1>

  <div className=" flex-col gap-3 ">
  <h2 className="head-text uppercase font-['Neue_Montreal']
  ">{Bio.role} </h2>
  <p className="font-medium text-2xl leading-none mt-10 w-1/2 font-['Neue_Montreal']"> {Bio.description}</p>
  
  </div>

  <div className="py-10 px-16 mt-10 flex flex-col relative ">
    <h3 className=" head-text px-[30vw] text-3xl font-bold font-['Neue_Montreal'] uppercase">My Skills</h3>
    

    <div className="mt-16 flex flex-wrap gap-12  py-16  ">

     
      {skills.map((skill,index) =>(
        <Tilt>
        <div className="block-container w-28 h-28">
          <div className="btn-back rounded-xl" />
          <div className="btn-front rounded-xl flex justify-center items-center">
            <img
             src={skill.imageUrl}
             alt={skill.name}
             className="w-1/2 h-1/2 object-contain font-['Neue_Montreal']" />
          </div>
        </div>
        </Tilt>
      ))}
    </div>
  </div>
  <div className="py-16 ">
    <h3 className="head-text px-[32vw] uppercase font-['Neue_Montreal']">Education</h3>
       <div className="mt-5  mx-[20vw] ">
       <p className="font-normal text-xl leading-none mt-10  font-['Neue_Montreal']"> My education has been a journey of self-discovery and growth. My
       educational details are as follows.</p>
       </div>

       <div className="mt-12 flex "></div>
       <VerticalTimeline>
       {education.map((education) => (
        <VerticalTimelineElement key={education.school}
        degree={education.degree}
        date={education.date}
        desc={education.desc}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img src={education.icon} alt={education.school} className="w-[80%] h-[80%] object-contain" />
          </div>}
          contentStyle={{
            borderBottom:'8px',
            borderStyle:'solid',
            borderBottomColor: education.iconBg,
            boxShadow:'none',
          }}>
        

            <div>
              <h3 className="text-black text-2xl  font-semibold font-['Neue_Montreal']">
              {education.school}
              </h3>
              <p className="text-black-500  text-2xl font-medium   font-['Neue_Montreal']"
              style={{margin:0}} >
                {education.degree}
                </p>
              <p className="text-black-500 font-medium   font-['Neue_Montreal']"
              style={{margin:0}} >
                {education.date}
                </p>
              <p className="text-black-500  text-2xl font-medium   font-['Neue_Montreal']"
              style={{margin:0}} >
                {education.desc}
                </p>
             
            

            
            </div>

            </VerticalTimelineElement>
          ))}
       </VerticalTimeline>
  </div>
  <Cta/>
 </section>
  )
}

export default About