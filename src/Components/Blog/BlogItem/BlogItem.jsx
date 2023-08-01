import React from 'react';
import img from '../../../assets/portfolio.png';
import './BlogItem.css';

const BlogItem = () => {
    return (
        <div className='blog-Item'>
            <img src={img} className='image' alt="blog-image" />
            <div className='blog-Item-details'>
                <div>
                    <h3>MuhammadAhmad</h3>
                    <p>Date and Time</p>
                </div>
                <div className='paragraph-text'>Ahmad is a great persasdasdasdasdasddssadasdasdasdasdasdasdsssssssssssssssssssssssssssssssss
                    asdasdasdasdasdasdasdaasdasdasdasdasdasdasdddddddddddd
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddon</div>
            </div>
        </div>
    );
}

export default BlogItem;