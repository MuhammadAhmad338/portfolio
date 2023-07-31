import React from 'react';
import './PrincipleDetails.css';

const PrincipleDetails = ({ icon, principleTitle, principleDesc }) => {
    return (
        <>
            <div className='principle-icon'>
                {icon}
                <h1>{principleTitle}</h1>
            </div>
            <div className='principle-desc'>
                <div className='principle-container'></div>
                <p>
                  {principleDesc} 
                </p>
            </div>
        </>
    );
}

export default PrincipleDetails;