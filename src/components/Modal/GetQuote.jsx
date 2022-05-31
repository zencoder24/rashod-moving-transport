import React from 'react';
import modalHead from '../../assets/home/mobile/moving-boxes.jpg'

const GetQuote = ({openModal, setOpenModal, modalRef}) => {
    if(openModal === false) return null
    return (
        <div className=' w-screen h-[450vh] bg-black/20 absolute z-[100]'>
            <div ref={modalRef} className=' relative w-full h-full top-[20%] left-[10%]'>
                <div className=" container rounded-lg border-2 border-solid b  border-gray-400 top-[50%] left-[50%] w-[80vw] h-fit bg-white 
                 ">
                    <div className="contact-box grid grid-cols-1 md:grid-cols-2 justify-center items-center text-center">
                        <div className="left bg-modal-bg bg-cover h-52 md:h-full"></div>
                        <div className="right py-6 px-10">
                            <h2 className=" pb-3 mb-3 font-bold text-xl md:text-2xl ">Contact Us</h2>
                            <input type="text" className='field w-full py-2 px-4 mb-6 bg-slate-200 outline-none border-2 border-solid border-black hover:bg-black/10 focus:bg-white focus:border-2 focus:border-solid  focus:border-amber-500' placeholder='Your Name' />
                            <input type="email" className='field w-full py-2 px-4 mb-6 bg-slate-200 outline-none border-2 border-solid border-black hover:bg-black/10 focus:bg-white focus:border-2 focus:border-solid  focus:border-amber-500' placeholder='Your Email' />
                            <input type="text" className='field w-full py-2 px-4 mb-6 bg-slate-200 outline-none border-2 border-solid border-black hover:bg-black/10 focus:bg-white focus:border-2 focus:border-solid  focus:border-amber-500' placeholder='Your Phone'  />
                            <textarea className='field w-full py-2 px-4 mb-6 min-h-[9.375rem] bg-slate-200 outline-none border-2 border-solid border-black hover:bg-black/10 focus:bg-white focus:border-2 focus:border-solid  focus:border-amber-500 ' placeholder='Please include infomation about your moving (i.e. number of rooms, size, etc.) '></textarea>
                            <button className='button w-full py-2 px-4 mb-6 text-base bg-amber-500 hover:bg-amber-400 cursor-pointer outline-none border-none text-white '> Send </button>
                            <button onClick={() => setOpenModal(false)} className='button w-full py-2 px-4  mb-6 text-base bg-blue-600 hover:bg-blue-400 cursor-pointer outline-none border-none text-white '> Cancel </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default GetQuote;