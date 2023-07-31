import React from 'react';
import img from '../../assets/portfolio.png';
import Principle from './Principles/Principles';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='homemain-content'>
                    <div className='home-left'>
                        <div className='home-title'>
                            <span>Hi, my name is</span>
                            <h1>Muhammad Ahmad</h1>
                            <div className='home-line'></div>
                        </div>
                        <div className='home-desc-container'>
                            I am a Full-Stack Software Engineer with a passion for building clean, performant,
                            and accessible websites and applications. Adaptable, design oriented, and user-focused
                            applications are my specialty, along with strong architecture and solutions skills.
                        </div>
                    </div>
                    <div className='home-right'>
                        <img src={img} alt="" height={300} width={300} />
                    </div>
                </div>
            </div>
            <Principle />
        </>
    );
}

export default Home