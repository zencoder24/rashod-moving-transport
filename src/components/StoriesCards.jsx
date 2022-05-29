import React from 'react';

function Stories({quote, mobile, desktop, tablet, type, quoter, key}) {
  return (
    <div>
      <div className="storiesContainer relative lg:hover:-translate-y-5 borderCard ease-in-out cursor-pointer">
        <img src={mobile} alt="" className="w-full sm:hidden" />
        <img src={desktop} alt="" className="w-full hidden sm:block " />
        <div className="content absolute z-50 bottom-10 text-pureWhite w-full px-10">
          <div className="text ">
            <h5 className="">{type}</h5>
            <h3 className="font-semibold text-xl">{quote}</h3>
            <h5 className=' italic'> - {quoter}</h5>
          </div>
          <hr className="opacity-40 my-3" />
          <div className="callToAction flex items-center justify-between">
            <div className="readStory">
              <h4 className="uppercase font-medium tracking-widest text-sm">
                Get Your Quote
              </h4>
            </div>
            <div className="arrow flex justify-end">
              <img src="./assets/arrow.png" alt="" className="w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
