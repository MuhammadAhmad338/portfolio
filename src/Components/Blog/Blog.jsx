import React from 'react';
import BlogItem from './BlogItem/BlogItem';
import './Blog.css';

const Blog = () => {
  return (
    <div className='blog'>
        <div className='latest-post'>
           <h1>Latest Post</h1>
        </div>
           <BlogItem />   
           <BlogItem />
           <BlogItem />
    </div>
  );
}

export default Blog