
import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc'
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card green-pink-gradient"
      >
        <div
         options={{
          max: 45,
          scale: 1,
          speed: 450,

        }}
        className='bg-tertiary py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col rounded-[20px]'
        >
         <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
         <h3 className="text-[20px] text-white text-center font-bold">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[17px] text-secondary max-w-3xl leading-[30px]'
      >
         I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex xs:justify-center sm:justify-center md:justify-center flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about");