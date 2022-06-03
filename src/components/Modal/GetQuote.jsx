import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useForm from './useForm';
import validateInfo from './validateInfo';
import emailjs from '@emailjs/browser'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCircleCheck} from '@fortawesome/free-solid-svg-icons'


const GetQuote = ({openModal, setOpenModal}) => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const form = useRef();

    function submitForm(){
        setIsSubmitted(true)
        emailjs.sendForm('service_unvucwc', 'template_kg66wuj', form.current, '_YzDqN6rkjl2EDD9s')
            .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
  });
        
    }

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validateInfo);
    if(openModal === false) return null
    return (
        <>
        <motion.div 
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            onClick={() => setOpenModal(false)} className='backdrop w-screen h-screen bg-black/60 fixed top-0 left-0 z-50'/>
            <motion.div  
                className=' absolute  h-full  z-[1000]'>
                <motion.div
                    initial={{
                        scale: 0
                    }}
                    animate={{
                        scale: 1
                    }}
                     className=" fixed container rounded-lg  border-2 border-solid b  border-gray-400 top-5  left-[25%] -translate-x-2/4  w-2/4 h-fit  bg-white 
                 ">
                    <motion.form
                        ref={form}
                        onSubmit={handleSubmit}
                        className="contact-box grid grid-cols-1 md:grid-cols-2 justify-center items-center text-center">
                        <div className="left bg-modal-bg bg-cover h-28 md:h-full"></div>


                        {!isSubmitted ? 
                        <div
                            className="right py-6 px-4">
                             <h2 className=" pb-3  font-bold text-xl md:text-2xl ">Contact Us</h2>

                            {errors.name && <p className=' text-xs text-red-500'>{errors.name}</p>}
                            <input 
                                id="name"
                                type="text"
                                name="name" 
                                className='field w-full py-2 px-4 mb-4 bg-slate-200 outline-none border-2 border-solid border-black hover:bg-black/10 focus:bg-white focus:border-2 focus:border-solid  focus:border-amber-500' 
                                placeholder='Your Name'
                                value = {values.name} 
                                onChange={handleChange}
                            />
                            
                            {errors.email && <p className='text-xs text-red-500'>{errors.email}</p>}
                            <input 
                                id="email"
                                type="email"
                                name="email"
                                className='field w-full py-2 px-4 mb-4 bg-slate-200 outline-none border-2 border-solid border-black hover:bg-black/10 focus:bg-white focus:border-2 focus:border-solid  focus:border-amber-500' 
                                placeholder='Your Email'
                                value = {values.email} 
                                onChange={handleChange} 
                            />
                              {errors.phone && <p className=' text-xs text-red-500'>{errors.phone}</p>}
                            <input 
                                id="phone"
                                type="tel"
                                name="phone"
                                className='field w-full py-2 px-4 mb-4 bg-slate-200 outline-none border-2 border-solid border-black hover:bg-black/10 focus:bg-white focus:border-2 focus:border-solid  focus:border-amber-500' 
                                placeholder='Your Phone'
                                value={values.phone} 
                                onChange={handleChange}
                            />
                           {errors.details && <p className=' text-xs text-red-500'>{errors.details}</p>}
                            <textarea 
                                id="details"
                                type ="text"
                                name="details"
                                className='field w-full py-2 px-4 mb-4 min-h-[9.375rem] bg-slate-200 outline-none border-2 border-solid border-black hover:bg-black/10 focus:bg-white focus:border-2 focus:border-solid  focus:border-amber-500 ' 
                                placeholder='Please include infomation about your moving (i.e. number of rooms, size, etc.) '
                                value = {values.details} 
                                onChange={handleChange}
                            ></textarea>
                             
                            <button 
                                type='submit'
                                className='button w-full py-2 px-4 mb-4 text-base bg-amber-500 hover:bg-amber-400 cursor-pointer outline-none border-none text-white '> Send </button>

                            
                            
                        </div> 
                         : 
                         <div className="right py-16 px-4">
                             <h2 className=" pb-3  font-bold text-lg md:text-2xl ">Your Request Has Been Submitted! We will be sure to get back to you at our earliest convenience.</h2>
                             {/* <FontAwesomeIcon className=' h-20 text-green-500' icon={faCircleCheck}/> */}
                             <button onClick={() => setOpenModal(false)} className='button w-full py-2 px-4 my-3 text-base bg-red-500 hover:bg-red-400 cursor-pointer outline-none border-none text-white '>Close</button>
                        </div> }
                    </motion.form>
                </motion.div>
            </motion.div>
        </>
       
    );
};

export default GetQuote;