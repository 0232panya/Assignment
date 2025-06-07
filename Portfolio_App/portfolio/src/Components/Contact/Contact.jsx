
import React, { useRef, useState } from 'react';
import './Contact.scss';
import { animate, delay, motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser';

const variant = {
    initial : {
        y : 500,
        opacity : 0,
        zIndex : 0,
    },

    animate :{
        y : 0,
        opacity: 1,
        zIndex : 1,
        transition : {
            delay: 0.8,
            duration : 0.5,
            staggerChildren : 0.1,
        }
    }
}

const Contact = () => {

    const ref = useRef();

    const isInview = useInView(ref, {margin: '-100px'})

    //  ---------- loading button
    const  [isLoading, setIsLoading] = useState(false);

    const handleClick = () =>{

        setIsLoading(true);

        setTimeout(() =>{
            setIsLoading(false);
        },2000);

    }



    // -------- email ------------

    const formRef = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_cbkuz89', 'template_g9h1rqs', formRef.current, {
            publicKey: 's72CqYmgo8EhG35Jk',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setSuccess(true)
            },
            (error) => {
              console.log('FAILED...', error.text);
              setError(true);
            },
          );
      };

  return (
    <motion.div className='contact' variants={variant} initial="initial" whileInView={'animate'}>
        <motion.div className='text-container' variants={variant}>
            <motion.h1 variants={variant}>Let's Work together</motion.h1>
            <motion.div className='item'>
                <h2>Mail</h2>
                <span>panotimagdum2000@gmail.com</span>
            </motion.div>
            <motion.div className='item'>
                <h2>Address</h2>
                <span>A/p mangaon, dist- Kolhapur, Tal- Hatkanangle</span>
            </motion.div>
            <motion.div className='item'>
                <h2>Phone</h2>
                <span>+91 8623029708</span>
            </motion.div>
        </motion.div>
        <div className='form-container'>
            <motion.div className='phone' 
                initial={{opacity: 1, zIndex : 1}}
                whileInView={{opacity:0, zIndex: -1}} 
                 transition={{delay: 4, duration : 1}}
            >

                <svg viewBox="0 0 1024 1024" class="icon svg-phone"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        ref={ref}
                        initial={{pathLength: 0,}}
                        animate={isInview && {pathLength: 1}}
                        transition={{delay: 0.8, duration: 3}}
                        strokeWidth={2.5}
                         d="M302.8 368.6zM878 437.7c0 0.2 0.1 0.3 0.1 0.4 0-0.1-0.1-0.3-0.1-0.4zM607.2 475.5c15.4-8.5 27.6-20.2 35.1-33.4 2.4-2.2 3.8-5.1 4-8.3 0.3-0.8 0.7-1.7 1-2.5h-1c-0.2-6.8-5.9-12.2-12.8-12.2-6.6 0-12.1 5-12.7 11.6h-0.2c-9.9 12.4-23 21.1-39.2 27.3-16.2 6.2-35.6 10.2-58.2 10.2-23.4 0-42.8-4.6-61-12-17.9-7.2-33-19.9-43.2-36.2-10-16.1-15-33.3-15-53 0-20.2 5.1-39.6 14.1-58.3 8.7-18.3 22.8-33.4 40.4-43.4 17.8-10.3 38.2-15.6 63.7-15.6 30.1 0 53.6 7.9 70.4 23.3 16.8 15.4 21.8 34.6 21.8 57.5 0 12.8-1.6 25.1-7.5 37-5.9 11.9-11.7 18.4-21.3 25.5-7.1 5.4-23.1 11.7-27.7 11.7-1.5 0-2.8-0.6-3.9-1.8-1.1-1.1-1.6-2.9-1.6-5.2 0.3-4.3 1-8.6 2-12.9l21-80.3c1-1.8 1.8-3.7 1.8-5.9l-0.1-0.6 0.1-0.4h-0.1v-0.1c0-6.7-5.6-12.2-12.4-12.2-3.3 0-6.4 1.2-8.8 3.5-2.3 2.3-3.7 5.4-3.7 8.7l0.1 1.1c0 0.8 0.3 1.5 0.5 2.2l-1.3 4.7c-8-12.7-26.8-20.5-43.7-20.5-14.3 0-35.7 9.9-50.3 32.2-10.8 17.1-17 36.7-17.8 56.8-0.6 17.7 4.7 33.4 15 44 10.3 10.6 23 13.7 30.9 13.7 14.5 0 27.4-5.3 38.5-15.9 1.1 4.8 3.9 9 7.9 11.8 3.9 2.7 9.8 4.1 17.7 4.1 29.1 0 55.9-15.2 70.7-35.6 12.7-17.3 19.8-40.6 19.8-64.3 0-19.9-3.2-38.3-13-55.1-9.8-16.8-22.4-29.8-40.9-38.9-18.5-9.1-39.6-13.7-63.4-13.7-28 0-53 5.7-74.8 17-21.8 11.3-39 28.3-51.5 50.8-12.6 22.6-18.9 46.9-18.9 73.1-0.2 23.1 5.5 45.8 16.6 66.1 11.2 20.9 29 37.4 50.6 47.2 22.7 10.4 49.5 15.6 80.7 15.6 32 0 59.3-6.1 81.6-18.4zM530 368.6c-3.7 10.9-8 19.2-13 24.9-3.5 4-7.1 6.9-10.6 8.8-4.7 2.6-8.2 4.6-13.6 4.6-7.2 0-16.3-2.8-21.1-8.4-4.9-5.6-7.3-14.3-7.3-26.1 0-8.8 4.6-19 8.1-30.4 3.5-11.4 8.7-17.2 15.6-23.4 6.9-6.2 13.2-7.9 21.3-7.9 7.6 0 15.6 2.2 20.5 7.8 5 5.6 8.1 10 8.1 20.5 0.1 9.3-4.4 18.7-8 29.6z" fill="none" />

                     <motion.path 
                        ref={ref}
                        initial={{pathLength: 0,}}
                        animate={isInview && {pathLength: 1}}
                        transition={{delay: 0.8, duration: 3}}
                        strokeWidth={2.5}
                     d="M878.1 438.1c0-0.2-0.1-0.3-0.1-0.4-8.7-30.2-37.2-44.3-62.8-57l-0.4-0.2-54.6-24.4V137l-497.4 2.5V356l-54.2 24.2c-31.1 12.3-66.7 32.3-66.7 77.5v345.1c0 41 33.4 74.4 74.4 74.4h590c41 0 74.4-33.4 74.4-74.4V457.7c0-7.2-0.9-13.7-2.6-19.6zM760.2 400l37.6 16.8c16.2 8 26.5 13.9 33 19.4l-70.6 38.2V400z m-457.4-31.4V179.3l417.4-2.1V496l-199 107.7c-6.1 3.3-13.5 3.3-19.6 0L302.8 496.2V368.6z m-40 31.2v74.8L191 435.7c6.2-6.1 71.8-35.9 71.8-35.9z m577.9 403c0 19-15.4 34.4-34.4 34.4h-590c-19 0-34.4-15.4-34.4-34.4V476.3L482.4 639c9 4.9 18.9 7.3 28.9 7.3 9.9 0 19.8-2.4 28.9-7.3l300.5-162.7v326.5z" fill="none" />

                    </svg>
                </motion.div>

            <motion.form ref={formRef} onSubmit={sendEmail} 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}} 
                transition={{delay:4.2, duration: 1}}
             >
                <input type='text' name='name' required placeholder='Name' />
                <input type='email' name='email' required placeholder='Email' />
                <textarea rows={8} name='message' placeholder='Message' />
                <button className={`form-button ${isLoading ? 'loading' : ""}`} onClick={handleClick} >
                    <span>
                   {isLoading ? <div className='loader'></div> : <div>Submit</div>}
                   </span>
                </button>
                
                {error && "Error"}
                {success && "Success"}
            </motion.form>
        </div>
      
    </motion.div>
  )
}

export default Contact;
