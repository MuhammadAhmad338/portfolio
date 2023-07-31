import React, { useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { SiDart } from 'react-icons/si';
import { AiOutlineMenu } from 'react-icons/ai';
import { CiCircleRemove } from 'react-icons/ci';
import { AiFillAppstore } from 'react-icons/ai';
import './Header.css';

const Header = () => {

    const [state, setstate] = useState(false);
    const [drawer, setdrawer] = useState(false);

    return (
        <div className='header'>
            <div className='header-icon'>
                <AiOutlineMenu className='outline-icon' onClick={() => setdrawer(true)} size={30} />
                <SiDart className='si-dart' size={30} />
            </div>
            {drawer && <div className='menu-bar-drawer'>
                <CiCircleRemove onClick={() => setdrawer(false)} size={50} />
                <a href="#" className="menu-item">Home</a>
                <a href="#" className="menu-item">Blog</a>
                <a href="#" className="menu-item">Projects</a>
                <a href="#" className='menu-item'>Experience</a>
                <a href="#" className='menu-item'>Contact</a>
            </div>}
            <div className='header-title'>
                <AiFillAppstore size={40} />
            </div>
            <ul className='header-list'>
                <li>Home</li>
                <li>Blog</li>
                <li>Projects</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
            <div className='dark-mode'>
                {!state && <MdOutlineLightMode onClick={() => setstate(true)} size={30} />}
                {state && <MdDarkMode onClick={() => setstate(false)} size={30} />}
            </div>
        </div>
    );
}

export default Header