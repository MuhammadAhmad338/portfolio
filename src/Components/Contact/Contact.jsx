import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { BiWind } from 'react-icons/bi';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-title'>
                <h1>Contact Me</h1>
            </div>
            <div className='contact-desc'>
                If you'd like to get in touch with me, you can fill out
                this form with your information and I will get back to
                you as soon as I can!
            </div>
            <form className='contact-form'>
                <label htmlFor="">Name:</label>
                <input type="text" placeholder='' />
                <label htmlFor="">Email:</label>
                <input type="text" placeholder='' />
                <label htmlFor="">Phone Number:</label>
                <input type="text" placeholder='' />
                <label htmlFor="">Message:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
            <button className='contact-button'>Submit<BiWind size={15}/></button>
            <div className='contact-link-desc'>
                Alternatively, you can contact me through any of the following links:
            </div>
            <ul className='contact-links'>
                <li><AiOutlineMail size={35} />Email</li>
                <li><AiOutlineGithub size={35} />Github</li>
                <li><AiFillTwitterCircle size={35} />Twitter</li>
                <li><AiFillLinkedin size={35} />LinkedIn</li>
                <li><FiFacebook size={35} />FaceBook</li>
            </ul>
        </div>
    );
}

export default Contact