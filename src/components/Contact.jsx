import React,{ useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

//
//
//

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '', 
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name] : value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_p0l6tbf',
     'template_uvd8ge8',
      {
        from_name: form.name,
        to_email: 'Romeo',
        from_email: form.email,
        to_email: 'romeoprexx@yahoo.com',
        message: form.message,
      },
      'pgdAs1GoWI5a9GRSB'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible');

      setForm({
        name: "",
        email: "",
        message: "",
      })
    }, (error) => {
       setLoading(false);

       console.log(error);

       alert('Oops something went wrong')
    })
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.25, 1)}
        className='flex-[0.75] rounded-2xl p-8 bg-black-100'
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form 
         ref={formRef}
         onSubmit={handleSubmit}
         className='mt-12 flex flex-col gap-8'
        >
          <label className="flex flex-col">
            <span className='font-medium mb-5 text-white'>Your Name</span>
            <input 
             type="text" 
             value={form.name}
             name="name"
             onChange={handleChange}
             placeholder="What's your name?"
             className='py-4 px-6 bg-tertiary placeholder:text-secondary rounded-lg text-white font-medium border-none outline-none'
            />
          </label>
          <label className="flex flex-col">
            <span className='font-medium mb-5 text-white'>Your Email</span>
            <input 
             type="email" 
             value={form.email}
             name="email"
             onChange={handleChange}
             placeholder="What's your email?"
             className='py-4 px-6 bg-tertiary placeholder:text-secondary rounded-lg text-white font-medium border-none outline-none'
            />
          </label>
          <label className="flex flex-col">
            <span className='font-medium mb-5 text-white'>Your Message</span>
            <textarea
             rows="7" 
             value={form.message}
             name="message"
             onChange={handleChange}
             placeholder="What's your message?"
             className='py-4 px-6 bg-tertiary placeholder:text-secondary rounded-lg text-white font-medium border-none outline-none'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary px-8 py-3 outline-none fold-bold text-white w-fit shadow-md shadow-primary rounded-xl'
          >
             {loading ? 'Sending...' : 'Send'}
             
          </button>
        </form>
      </motion.div>
      <motion.div
       variants={slideIn("right", "tween", 0.2, 1)}
       className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper (Contact, "contact")