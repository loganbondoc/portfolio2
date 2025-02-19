import React from 'react';
// import React, { useEffect } from 'react';

// Components
import IconText from '../components/IconText.js'
import CustomCarousel from '../components/CustomCarousel.js';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CustomZoom from '../components/CustomZoom.js';
import urTripBanner from '../images/urtrip/urtrip_banner.png';
import {Divider} from "@heroui/divider";

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

            <Divider />
            
            <section class = "project-section">
                <h2 class="comfortaa">Low Engagement with Post-Booking Content</h2>
                <h4>
                    Users find that generic post-booking content and upselling of accommodations often feels impersonal and disconnected from the user’s specific itinerary, resulting in low engagement and missed revenue opportunities.
                </h4>
                <h4>
                    Trip.com’s post-purchase page serves as one example of a common experience across booking platforms, airlines, and travel insurance providers. Similar layouts and content are found widely, highlighting a lack of tailored engagement in the industry.
                </h4>
                <h2>An Opportunity</h2>
                <h4>
                    Travel is supposed to be exciting! By offering personalised insights and tailored recommendations, these interactions could be transformed into valuable revenue streams that enhance the user experience.
                </h4>
            </section>
            <section class = "project-section">
                <h2 class="comfortaa">Our Scope</h2>
                <h4>
                For our Minimum Viable Product (MVP), we focused on delivering a streamlined and impactful proof of concept that demonstrates the power of personalisation in the travel booking process. Instead of building a full-scale system, we prioritized essential elements that showcase core functionality while maintaining a seamless user experience.
                </h4>
            </section>
        </div>
    );
}

export default UrTrip;