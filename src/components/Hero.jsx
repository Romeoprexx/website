import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative h-screen w-full mx-auto'>
      <div className={`${styles.paddingX} absolute insert-0 top-[100px] max-w-7xl flex flex-row mx-auto items-start gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'> Romeo</span></h1>
          <p className={ `sm:text-[20px] ${styles.heroSubText} text-white-100 mt-2 md:block`}>
            I'm a frontend developer. I develop 3D visuals, <br className='sm:block md:block hidden' /> user interfaces and web applications
          </p>
        </div>
      </div>
      
      <ComputersCanvas className='absolute sm:top-10 top-0'/>
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center cursor-pointer'>
          <a href="#about">
            <div className="w-[35px] h-[64px] border-4 rounded-3xl flex justify-center border-secondary p-2 items-start absolute xs:top-1 sm:top-1 md:top-6 top-6">
              <motion.div 
                animate={{
                  y:[0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
               className='h-3 w-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
      </div>
      

    </section>
  )
}

export default Hero