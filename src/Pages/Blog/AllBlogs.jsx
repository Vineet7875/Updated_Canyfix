import React from 'react';
import '../Blog/AllBlogs.css'
import Blogsdata from '../../JSONDATA/Blogsdata.json'
import { useNavigate } from 'react-router-dom';

const AllBlogs = () => {
    const navigate = useNavigate();
    const handleBlogClick = (blog) => {
        navigate('/BlogContent', { state: { blog } });
    };
  return (
    <div className="blog-container">
      {Blogsdata.map((blog) => (
        <div className="card" key={blog.id}>
          <img className="cover-img" src={blog.img} alt={blog.title} onClick={() => handleBlogClick(blog)} />
          <div className="blog_content">
            <h2 className="title">{blog.title}</h2>
            <p className="description">{blog.content1}</p>
            <span className='read-more' onClick={() => handleBlogClick(blog)}>Read more</span>
            <div className="author-date">
              <span className="author">{blog.author}</span>
              <span className="date">{blog.date}</span>
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
