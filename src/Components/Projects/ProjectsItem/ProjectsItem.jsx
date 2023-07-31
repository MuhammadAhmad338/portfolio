import React from 'react';
import './ProjectsItem.css';

const ProjectsItem = ({title, description, image}) => {
    return (
        <div className='project-Item'>
            <img src={image} className='image' alt="" />
            <div className='project-Item-details'>
                <h3>{title}</h3>
                <p>{description}</p>
               <div className='project-button'>
                GitHub Repo
               </div>
            </div>
        </div>
    );
}

export default ProjectsItem;