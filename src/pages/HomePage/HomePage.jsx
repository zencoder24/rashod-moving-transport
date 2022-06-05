import React from 'react';
import StoriesCards from '../../components/StoriesCards';
import testomonialData from '../../stories.json';
import StoriesContainer from '../../components/StoriesContainer';
import {ReactComponent as ArrowIcon} from '../../assets/shared/desktop/arrow.svg';
import {HashLink} from 'react-router-hash-link'
import FeatureItem from '../../components/FeatureItem';
import PhotoFirstMobile from '../../assets/home/mobile/semi-truck.jpg'
import PhotoFirstTablet from '../../assets/home/tablet/caleb-ruiter-EmEQ6kK_5P0-unsplash(1).jpg'
import PhotoSecond from '../../assets/home/mobile/packing2.jpg'
import PhotoThird from '../../assets/home/mobile/michal-balog-66NaCdBrkCs-unsplash.jpg'

const HomePage = ({setOpenModal, executeScroll}) => {
  


  return (
    <>
      <section id="about" className='section-1 md:flex '>
        <img src={PhotoFirstMobile} alt="Big Rig Truck" className='md:order-2 md:hidden  w-fit' />
        <img src={PhotoFirstTablet} alt="Big Rig Truck" className='md:order-2 hidden w-1/2 lg:block' />
        <div className='section-paragraph py-20 px-12 bg-black text-pureWhite md:w-1/2 md:order-1 md:py-56 lg:px-24'>
          <h1 className='text-3xl tracking-wide uppercase text-left font-bold md:text-[2.5rem] md:tracking-[0.260625rem] md:leading-10'>The Quality Shows In Every Move We Make.</h1>
          <p className='text-base font-normal opacity-60 leading-6 mt-4 lg:mt-6'>When it is time to move out of your home or business, it's time to call us. We make it easy on you and faster than the others.</p>
          <div className='link-container flex items-center space-x-3 mt-4 cursor-pointer lg:mt-8 '>
            <p className=' uppercase tracking-wider text-xs hover:underline'>Learn More</p>
            <ArrowIcon className=' stroke-pureWhite'/>
          </div>
        </div>
      </section>
      <section className='section-2 md:flex '>
        <img src={PhotoThird} alt="Boxes in Room" className=' md:w-1/2' />
        <div className='section-paragraph py-20 px-12 md:w-1/2 md:py-44 lg:px-24'>
          <h1 className=' text-3xl uppercase tracking-wide  text-left font-bold md:text-[2.5rem] md:tracking-[0.260625rem] md:leading-10'>We Carry Safely.</h1>
          <p className='text-base opacity-60 leading-6 mt-4 lg:mt-6'>We use durable materials, boxes, bubble-wrap and plastic to pack your things carefully. We take full responsibility over transportation. </p>
          <div href="#process" className='link-container flex items-center space-x-3 mt-4 cursor-pointer lg:mt-8 '>
            <p className=' uppercase tracking-wider text-xs hover:underline'>
              <HashLink smooth to="/#process">Our Process</HashLink>
            </p>
            <ArrowIcon className=' stroke-black'/>
          </div>
        </div>
      </section>
      <section className='section-3 md:flex '>
        <img src={PhotoSecond} alt="Packages on Truck" className='md:order-2 md:w-1/2' />
        <div className='section-paragraph py-20 px-12 md:order-1 md:w-1/2 md:py-44 lg:px-24'>
          <h1  className='text-3xl tracking-wide uppercase text-left font-bold md:text-[2.5rem] md:tracking-[0.260625rem] md:leading-10'>Moving Made Easy.</h1>
          <p className='text-base opacity-60 leading-6 mt-4 lg:mt-6'>Team of cargo experts are always available to help you with any queries you might have, or if you want to consult in length your logistic requirements. We would study your requirements and provide you with a quote that would not only suit your budget, but would also save you considerable amount of money in the long term. And, we guarantee that.</p>
          <div onClick={() => {setOpenModal(true); setOpenModal()}} className='link-container flex items-center space-x-3 mt-4 cursor-pointer lg:mt-8 '>
            <p className=' uppercase tracking-wider text-xs hover:underline'>Get a Quote</p>
            <ArrowIcon className=' stroke-black'/>
          </div>
        </div>
      </section>
      <section>
        <h1 className=' text-center font-bold text-3xl uppercase py-6'>Testimonials</h1>
        <StoriesContainer>
          {testomonialData
            .map((media) => (
              <StoriesCards
                setOpenModal={setOpenModal}
                quote={media.quote}
                mobile={media.images.mobile}
                desktop={media.images.desktop}
                tablet={media.images.tablet}
                type={media.type}
                quoter={media.quoter}
                key={media.id}
              />
            ))}
        </StoriesContainer>

      </section>
     

      <section id='process' className='flex flex-col px-10 py-16 space-y-12 lg:flex-row lg:items-center lg:space-y-0 lg:py-24'>
            <h1 className=' text-center text-3xl font-bold'>Our Process</h1>
            <FeatureItem 
              icon="truckMove" 
              title="Step 1: First Step" 
              infomation="Our team recieves your inquiry and get a gauge of the needs and concerns you may have."
            />
            <FeatureItem 
              icon="dolly" 
              title="Step 2: Second step" 
              infomation="Either via virtually or physically, we began to survey to move. We are able to provide an estimate at this point. "
            />
            <FeatureItem 
              icon="peopleCarry" 
              title="Step 3: Third step" 
              infomation="With your help, we set up a date to begin the move."
            />
            <FeatureItem 
              icon="thumbsUp" 
              title="Step 4: Fourth step" 
              infomation="The move begins."
            />
      </section>
    </>
  );
};

export default HomePage;
