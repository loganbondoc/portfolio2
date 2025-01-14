import React from 'react';
// import React, { useEffect } from 'react';

// Components
import IconText from '../components/IconText.js'
import CustomCarousel from '../components/CustomCarousel.js';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CustomZoom from '../components/CustomZoom.js';

function UrTrip(){
    return(    
        <div>
            <section class = "project-section">
                {/* <img src={mementoBanner} alt=""></img> */}
            </section>
            <section class = "project-section">
                <div>
                    <h1>Memento</h1>
                    <h3>Addressing Post-Party Effects in Young people</h3>
                </div>
                <div>
                    <h2>Role</h2>
                    <h4>Product Designer: User Research, Interaction, Visual design, Prototyping & Testing</h4>
                </div>
                <span>
                    <div>
                        <h2>Project Duration</h2>
                        <h4>13 Weeks</h4>
                    </div>
                    <div>
                        <h2>Sector</h2>
                        <h4>Lifestyle, Leisure & Entertainment</h4>
                    </div>
                    <div class = "nav-line"></div>
                </span>
            </section>
            
            <section class = "project-section">
                <h2>The Problem Area</h2>
                <h4>
                We've all experienced the excitement of attending gatherings, whether it's with friends, family, or even strangers. But what happens after the festivities? Consider this: in a study involving 28 brides, over half reported experiencing clinical levels of depression post-wedding.
As psychoanalyst F. Diane Barth points out, there's often a surge of exhilaration during events, followed by a harsh reality check. The initial euphoria fades as the feel-good chemicals in our bodies diminish. Whether it's physical, emotional, or psychological, there's a notable pattern of post-event emotions emerging among younger generations.
                </h4>
            </section>
            <section class = "project-section">
                <h2>Research Approach</h2>
                <h4>Our design process for Memento, was based upon the double diamond method. Through this,  we implemented phases of:
                    Discovering more about the chosen topic
                    Defining the key issues that needed to be addressed
                    Developing and ideating a key solution
                    Delivering the solution to our target demographic</h4>
            </section>
            <section class = "project-section">
                <div class = "centered-image-container">
                    {/* <img class = "centered-image" src = {doubleDiamond}></img> */}
                </div>
            </section>
        </div>
    );
}

export default UrTrip;