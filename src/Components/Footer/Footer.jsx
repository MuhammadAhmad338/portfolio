import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <ul className='footer-title'>
            <li className='footer-item'>Home</li>
            <li className='footer-item'>About</li>
            <li className='footer-item'>Projects</li>
            <li className='footer-item'>Experience</li>
            <li className='footer-item'>Contact</li>
        </ul>
        <div className='footer-icons'>
            <AiOutlineGithub size={25} />
            <AiFillTwitterCircle size={25} />
            <AiOutlineMail size={25} />
            <AiFillLinkedin size={25} /> 
            <FiFacebook size={25} />
        </div>
        <div className='footer-copyright'>
               Muhammad Ahmad, All Right Reserved
        </div>
    </div>
  );
}

export default Footer