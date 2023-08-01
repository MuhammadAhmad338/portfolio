import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { DiDart } from 'react-icons/di';
import { BiLogoFirebase } from 'react-icons/bi';
import { BiLogoFlutter } from 'react-icons/bi';
import { SiMongodb } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';
import './ExperienceItem.css';

const ExperienceItem = () => {
    return (
        <div className='experience-item'>
            <div className='experience-title'>
                <h2>Software Engineer</h2>
                @Google
            </div>
            <div className='experience-desc'>
                Currently working on Google Ads products for dynamic
                creative ad development, such as Ads Creative Studio,
                Display & Video 360, and Studio. Using AngularDart and
                Angular TypeScript for frontend and Java for backend.
            </div>
            <div className='experience-icon'>
                <AiOutlineHtml5 size={30} />
                <BiLogoCss3 size={30} />
                <DiDart size={30} />
                <BiLogoFirebase size={30} />
                <BiLogoFlutter size={30} />
                <SiMongodb size={30} />
                <DiNodejs size={30} />
                <DiJavascript1 size={30} />
                <SiTypescript size={30} />
                <RiReactjsFill size={30} />
            </div>
            <div className='experience-item-line'></div>
        </div>
    );
}

export default ExperienceItem