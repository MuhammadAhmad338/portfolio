import React from 'react';
import ExperienceItem from './ExperienceItem/ExperienceItem';
import './Experience.css';

const Experience = () => {
    return (
        <div className='experience'>
            <div className='experience-main-title'>
                <h1>Experience.</h1>
            </div>
            <div className='experience-content'>
                <div className='experience-left'>
                    <div className='experience-line'></div>
                </div>
                <div className='experience-right'>
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
                </div>
            </div>
        </div>
    );
}

export default Experience