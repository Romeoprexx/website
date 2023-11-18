import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from '../constants'

const FeedbackCard = ({name, index, testimonial, company, designation, image}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 rounded-3xl p-10 sm:w-[320px] w-full sm:justify-center md:justify-center'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white text-[18px] tracking-wider'>{testimonial}</p>
      <div className='flex justify-between items-center mt-7 gap-1'>
         <div className='flex-1 flex flex-col'>
           <p className='text-white text-[16px] font-medium'>
            <span className='blue-text-gradient'>@</span> {name}
           </p>
           <p className='mt-1 text-[12px] text-secondary'>
            {designation} of {company}
           </p>
         </div>
         <img src={image} alt={`feedback-by-${name}`} className='rounded-full
         h-10 object-cover'/>
      </div>
    </div>
   
  </motion.div>
)



const Feedbacks = () => {
  return (
    <div className='mt-12 rounded-[20px] bg-black-100'>
      <div className={`${styles.padding} rounded-2xl bg-tertiary min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say about me</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
           key={testimonial.name}
           index={index}
           {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper (Feedbacks, "")