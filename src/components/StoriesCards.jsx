import React from 'react';

import StoryBG from '../assets/home/mobile/kadarius-seegars-DevJkLB3hWE-unsplash.jpg'

function Stories({quote, mobile, desktop, tablet, type, quoter, setOpenModal}) {
  return (
    <div>
      <div className="storiesContainer relative lg:hover:-translate-y-5 borderCard ease-in-out cursor-pointer">
        <img src={StoryBG} alt="" className="w-full sm:hidden" />
        <img src={StoryBG} alt="" className="w-full hidden sm:block " />
        <div className="content absolute z-50 bottom-2 text-pureWhite w-full px-6 ">
          <div className="text backdrop-sepia">
            <h5 className=" text-xl">{type}</h5>
            <h3 className="font-semibold text-lg md:text-base">" {quote} "</h3>
            <h5 className=' italic text-lg'> - {quoter}</h5>
          </div>
          <hr className="opacity-40 my-8" />
          <div className="callToAction flex items-center justify-between">
            <div className="readStory">
              <h4 onClick={() => setOpenModal(true)} className="uppercase font-medium tracking-widest text-md mb-8">
                Get Your Quote
              </h4>
            </div>
            <div className="arrow flex justify-end mb-8">
              <img src="./assets/arrow.png" alt="" className="w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
