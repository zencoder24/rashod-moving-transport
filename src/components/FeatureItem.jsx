import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faTruckMoving} from '@fortawesome/free-solid-svg-icons'
import{faDolly} from '@fortawesome/free-solid-svg-icons'
import {faPeopleCarryBox} from '@fortawesome/free-solid-svg-icons'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'

import {ReactComponent as BoostExposure} from '../assets/features/desktop/boost-exposure.svg'
import {ReactComponent as CustomDomain} from '../assets/features/desktop/custom-domain.svg'
import {ReactComponent as DragDrop} from '../assets/features/desktop/drag-drop.svg'
import {ReactComponent as Embed} from '../assets/features/desktop/embed.svg'
import {ReactComponent as NoLimit} from '../assets/features/desktop/no-limit.svg'
import {ReactComponent as Responsive} from '../assets/features/desktop/responsive.svg'

// 1. I was able to use the SVGs as props by using this object. Basically i had a value pointing to the SVG import name
const components = {
    truckMove: faTruckMoving,
    dolly: faDolly,
    peopleCarry: faPeopleCarryBox,
    thumbsUp: faThumbsUp
}


const FeatureItem = ({icon, title, infomation}) => {
    return (
        <>
           
            <div className='flex-col space-y-4 px-6'>
                <FontAwesomeIcon icon={components[icon]} className="feature-item-icon block w-12 h-12 mx-auto my-0"/> 
                <h2 className='feature-item-title text-center text-lg font-bold pt-2 '>{title}</h2>
                <p className='feature-item-paragraph text-center text-sm'>{infomation}</p>
            </div>
        </>
    );
};

export default FeatureItem;