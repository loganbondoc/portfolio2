import React from 'react';
// import React, { useEffect } from 'react';

// Components
import IconText from '../components/IconText.js'
import CustomCarousel from '../components/CustomCarousel.js';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CustomZoom from '../components/CustomZoom.js';
import urTripBanner from '../images/urtrip/urtrip_banner.png';

function UrTrip(){
    return(    
        <div class = "project-background">
            
            <section class = "project-section">
            <div className="banner-container">
                    <img src={urTripBanner} alt="" className="banner"></img>
                </div>
            </section>
            <section class = "project-section">
                <div>
                    <h1 class="header">UrTrip</h1>
                    <h3>Making travel planning more personal</h3>
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
                <h2>The Problem</h2>
                <h2>Low Engagement with Post-Booking Content</h2>
                <h4>
                Generic post-booking content and upselling of accommodations often feel impersonal and disconnected from the user’s specific itinerary, resulting in low engagement and missed revenue opportunities.
                </h4>
                <h4>
                Trip.com’s post-purchase page serves as one example of a common experience across booking platforms, airlines, and travel insurance providers. Similar layouts and content are found widely, highlighting a lack of tailored engagement in the industry.
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
                <h2>An Opportunity</h2>
                <h4>Travel is supposed to be exciting! By offering personalised insights and tailored recommendations, these interactions could be transformed into valuable revenue streams that enhance the user experience.</h4>
            </section>
            <section class = "project-section">
                <h2>Introducing...</h2>
            </section>
        </div>
    );
}

export default UrTrip;