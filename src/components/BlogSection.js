import React from 'react';
import './BlogSection.css';

function BlogSection() {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h2>What are our latest blogs</h2>
        <p>Sed dictum ipsum elementum diam dapibus, ut sodales orci monte <br />consectetur. Fusce a mollis lorem. Orci varius natoque penatibus.</p>
      </header>
      <div className="blog-cards">
        <div className="blog-card">
          
          <div className="blog-image">
            <div className="blog-date">Jan 26, 2023</div>
          </div>
          <h3>How to grow your brand?</h3>
          <p>Quisque sed semper ipsum. Morbi ut minus rhoncus, tincidunt orci ut, mollis nibh odus Etiam sodales aliquam pharetra...</p>
          <a href="#" className="read-more">Read More <span>&#10140;</span></a>
        </div>
        <div className="blog-card">
          <div className="blog-image">
            <div className="blog-date">Jan 20, 2023</div>
          </div>
          <h3>What matters in marketing?</h3>
          <p>Donec ullamcorper velit id lorem tempor en vestibulum. Aliquam aliquam sem sit amet ligula sagittis, ac pellentesque tellus...</p>
          <a href="#" className="read-more">Read More <span>&#10140;</span></a>
        </div>
        <div className="blog-card">
          <div className="blog-image">
            <div className="blog-date">Jan 18, 2023</div>
          </div>
          <h3>Is it important to follow your industry?</h3>
          <p>Ut urna dolor, dapibus eu nibh id, sagittis suscipit tellus. Integer consequat leo ud pulvinar aliquam pellentesque...</p>
          <a href="#" className="read-more">Read More <span>&#10140;</span></a>
        </div>
      </div>
      <button className="view-all-button">VIEW ALL ARTICLES</button>
    </div>
  );
}

export default BlogSection;
