import React from 'react';
import img from '../../assets/portfolio.png';
import Principle from './Principles/Principles';
import BlogItem from '../Blog/BlogItem/BlogItem';
import ProjectsItem from '../Projects/ProjectsItem/ProjectsItem';
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
                <Principle />
            </div>
            <div className='latest-blogs'>
                <div className='latest-blogs-title'>
                    <p>My latest</p>
                    <h1>Blog Posts.</h1>
                </div>
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
            <div className='latest-projects'>
                <div className='latest-projects-title'>
                    <p>My recent</p>
                    <h1>Projects.</h1>
                </div>
                <ProjectsItem title={"MuhammadAhmad"} description={"asdasdsqqdwewqeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeadasdasdasdasdaswwwwwwerqrwwqrwqrwqrqwrwqrwqrwqrqwrwqrqwrr "} image={img} />
                <ProjectsItem title={"MuhammadZaid"} description={"asdasdasdasdasdasdssssssssssssssssssaaaaaaaaaaaaaaaaaaaaadddddddddd"} image={img} />
                <ProjectsItem title={"MuhammadAbdullah"} description={"asdasdasdasdasqweqwqweqweqweqweqweqwewqewqeqweqweqweqweqweqweqw"} image={img} />
            </div>
        </>
    );
}

export default Home