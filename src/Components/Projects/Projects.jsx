import React from 'react';
import img from "../../assets/portfolio.png";
import ProjectsItem from './ProjectsItem/ProjectsItem';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
        <div className='projects-title'>
           <h1>Projects</h1>
        </div>
        <div className='projects-items'>
           <h1>Personal</h1>
           <ProjectsItem title={"RescueGroup Mobile App"} description={"I’m working on a React Native-based iOS app aimed at making it easier to rescue animals in need of a home, and make it easier for rescue organizations to find homes for their furry friends."} image={img}/>
           <ProjectsItem title={"Express.js Babel Starter Project"} description={"A GitHub repo template that makes it easy to start building a Node.js backend application. Includes support for modern ES6 syntax, input validation, GitHub Action templates, Google App Engine deployment, and more. Comes with a Model-View-Controller directory structure for better project organization."} image={img}/>
           <ProjectsItem title={"RescueGroup Mobile App"} description={"CLI tool built with OCLIF that allows developers to quickly generate files for React components. Supports JavaScript or Typescript, and mulitple component styling options."} image={img}/>
        </div>
    </div>
  );
}

export default Projects