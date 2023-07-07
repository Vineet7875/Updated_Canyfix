import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Blog/BlogContent.css';

function BlogContent() {
  const location = useLocation();
  const { blog } = location.state;

  return (
    <div className='blog-content-body'>
    <div className="blog-content-wrapper">
      <div className="blog-header">
        <h1 className="blog-title">{blog.title}</h1>
        <div className="blog-author-info">
          <img className="blog-author-image" src={blog.authorImage} alt={blog.author} />
          <div className="blog-author-details">
            <p className="blog-author-name">{blog.author}</p>
            <p className="blog-post-date">{blog.date}</p>
          </div>
        </div>
      </div>
      <div className='blogContent' dangerouslySetInnerHTML={{ __html: blog.content2 }}>
      </div>
    </div>
    </div>
  );
}

export default BlogContent;
