import React from 'react';
import PrincipleDetails from './PrincipleDetails/PrincipleDetails';
import { GiRabbit } from 'react-icons/gi';
import { RxAccessibility } from 'react-icons/rx';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import './Principles.css';

const Principle = () => {
  return (
    <div className='principle'>
        <div className='principle-title'>
           <span>My guiding</span>
           <h1 className='heading'>Principles.</h1>
           <div className='principle-line'></div>
        </div>
        <div className='principle-details'>
            <PrincipleDetails icon={<GiRabbit size={50}/>} principleTitle={"Performance"} principleDesc={"Nothing is better than a beautiful site that doesn't make you wait. Performance is one of my top priorities when doing any kind of software development, and this website is a testament to that. The website is built with Nuxt.js, which allows me to write clean, maintainable source code that is statically-generated for optimal page load times."} />
            <PrincipleDetails icon={<RxAccessibility size={50}/>} principleTitle={"Performance"} principleDesc={"Everyone deserves the right to a great user experience on the web. I am committed to making sure that all of my work meets and exceeds web accessibility standards. I use several tools like Axe from Deque to test accessibility, as well as tab-navigating myself to make sure keyboard-only users can do everything they need. If you're having trouble on this site, please reach out to me on my contact page."} />
            <PrincipleDetails icon={<MdOutlinePrivacyTip size={50} />} principleTitle={"Privacy"} principleDesc={"All users have a right to privacy on the web. I believe that all websites and companies have a responsibility to their users to collect as little data as possible, and make it clear when they are doing so. I am using Plausible for analytics data collection, which is lightweight, and captures only small amounts of user interaction like page views and demographics."} /> 
        </div>
    </div>
  );
}

export default Principle;