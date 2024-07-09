import React from 'react';
import './Content1.css';

function Content1()  {
    return(
        <div className="container1">
           <div className="first"> 
                <header className="content">
                    <h4 align="center">We are here to help you</h4>
                    <p4 align="center">Sed dictum ipsum elementum diam dapibus, ut sodales orci monte <br /> 
                    consectetur. Fusce a mollis lorem. Orci varius natoque penatibus.</p4>
                </header>
            </div>

            <div className="second">
                <div className="video">
                    <div className="play-button"></div>
                </div>
                <div className="cards">
                    <div className="card1">UI/UX Design</div>
                    <div className="card2">Visual Design</div>
                    <div className="card3">Digital Marketing</div>
                    <div className="card4">Development</div>
                </div>
            </div>
        </div>

    
    );

}


export default Content1;