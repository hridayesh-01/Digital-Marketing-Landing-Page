import React from 'react';
import './Content.css';


function Content() {
  return (
    <div className="container">
      <div className="section">
        <div className="dark-card">
          <h3>Thousand of projects built <br /> superbly...</h3>
          <button className="button-outline">TEAM WORK</button>
        </div>
        <div className="card">
          <h3>We turn your ideas into <br />reality with our team</h3>
          <button className="button-circle"></button>
        </div>
      </div>

      <div className="section1">
        <div className="text-section">
          <h2>Why work with us & how we work?</h2>
          <p align="left">Sed dictum ipsum elementum diam dapibus, ut sodales orci monte consectetur. Fusce a mollis lorem orci.</p>
          <div className="button-container1">
            <button className="button-outline1">CREATIVE</button>
            <button className="button-outline1">OUT OF THE BOX</button>
          </div>
          <div className="info-box1">
            <div className="info-icon1"></div>
            <p align="left">We work with creativity and marketing awareness</p>
          </div>
          <div className="info-box2">
            <div className="info-icon2"></div>
            <p align="left">We work at the best level by making regular data analysis</p>
          </div>

          <div className="section2">
              <div className="image-placeholder">Body Cream<br />Cosmetics</div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Content;
