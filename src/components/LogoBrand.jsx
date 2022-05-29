import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as LogoTriangle} from '../assets/shared/mobile/logoTriangle.svg'

/* This is the component for the logo brand that will also be use in the footer.  */
const LogoBrand = ({fontColor}) => {
    return (
        <div className="md:justify-self-start">
            <Link to="/"  className='flex  space-x-1 cursor-pointer'>
               <h1 className={`font-bold uppercase ${fontColor}`}>Rashod's</h1>
               <h1 className={`font-bold uppercase ${fontColor}`}>Moving</h1>
               <h1 className={`font-bold uppercase ${fontColor}`}>And</h1>
               <h1 className={`font-bold uppercase ${fontColor}`}>Transport</h1>
            </Link>
        </div>
    );
};

export default LogoBrand;