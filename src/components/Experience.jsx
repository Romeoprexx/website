import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';



const ExperienceCard = ({ experience }) => (
   <VerticalTimelineElement
     contentStyle={{background: '#1d1836', color: '#fff'}}
     contentArrowStyle={{borderRight: '7px solid #232631'}}
     date={experience.date}
     iconStyle={{background: experience.iconBg}}
     icon={
      <div className='flex justify-center items-center h-full w-full'>
        <img src={experience.icon} alt={experience.company_name} 
        className='w-[60%] h-[60%] object-contain'
        
        />
      </div>
     }
   >
     <div>
      <h3 className='text-[24px] text-white font-bold'>
        {experience.title}
      </h3>
      <p className='font-semibold text-[16px] text-secondary' style={{margin: 0}}>{experience.company_name}</p>
     </div>
     <ul className='mt-5 ml-5 list-disc space-y-2'>
        {experience.points.map((point, index) => (
          <li
           key={`experience-point-${index}`}
           className='text-white-100 tracking-wider pl-1 text-[14px]'
          >
           {point}
          </li>
        ))}
     </ul>
   </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Where I have worked so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
     </motion.div>
    <div className='flex flex-col mt-20'>
      <VerticalTimeline>
         {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience}/>
         ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper (Experience, "work")