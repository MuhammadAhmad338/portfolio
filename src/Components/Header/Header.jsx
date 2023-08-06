import React, { useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { CiCircleRemove } from 'react-icons/ci';
import { AiFillAppstore } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/portfolio.png';
import './Header.css';

const Header = () => {

    const [state, setstate] = useState(false);
    const [drawer, setdrawer] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='header-icon'>
                <AiOutlineMenu className='outline-icon' onClick={() => setdrawer(true)} size={30} />
                <div className='header-avatar'>
                    
                </div>
            </div>
            {drawer && <div className='menu-bar-drawer'>
                <CiCircleRemove onClick={() => setdrawer(false)} size={50} />
                <div onClick={() => {
                    navigate("/"),
                        setdrawer(false)
                }} className="menu-item">Home</div>
                <div onClick={() => {
                    navigate('/blog'),
                        setdrawer(false)
                }}
                    className="menu-item">Blog</div>
                <div onClick={() => {
                    navigate('/Projects'),
                        setdrawer(false)
                }} className="menu-item">Projects</div>
                <div onClick={() => {
                    navigate("/experience"),
                        setdrawer(false)
                }} className='menu-item'>Experience</div>
                <div onClick={() => {
                    navigate("/contact"),
                        setdrawer(false)
                }} className='menu-item'>Contact</div>
            </div>}
            <div className='header-title'>
                <AiFillAppstore size={40} />
            </div>
            <ul className='header-list'>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/blog")}>Blog</li>
                <li onClick={() => navigate("/projects")}>Projects</li>
                <li onClick={() => navigate("/experience")}>Experience</li>
                <li onClick={() => navigate("/contact")}>Contact</li>
            </ul>
            <div className='dark-mode'>
                {!state && <MdOutlineLightMode onClick={() => setstate(true)} size={30} />}
                {state && <MdDarkMode onClick={() => setstate(false)} size={30} />}
            </div>
        </div>
    );
}

export default Header