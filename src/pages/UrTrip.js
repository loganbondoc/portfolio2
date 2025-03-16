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

// Background info Images
import lowEngagement from '../images/urtrip/background_info/low_engagement.png';

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
                <h2 class="spaced-header comfortaa">Low Engagement with Post-Booking Content</h2>
                <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                    <span>
                        <h4>Users find that generic post-booking content and upselling of accommodations often feels 
                            <strong>impersonal</strong> and <strong>disconnected </strong>from the user’s specific itinerary, 
                            resulting in <strong>low engagement </strong>and <strong>missed revenue </strong>opportunities.</h4>
                        <br/>
                        <h4> Trip.com’s post-purchase page serves as one example of a common experience across booking platforms, 
                            airlines, and travel insurance providers. Similar layouts and content are found widely, highlighting 
                            a <strong>lack of tailored engagement </strong>in the industry.
                        </h4>
                        <br/>
                    </span>
                    <CustomZoom
                        img="lowEngagement"
                        alt=""
                    />
                </div>
                <h3>An Opportunity</h3>
                        <h4>Travel is supposed to be exciting! By offering <strong>personalised insights </strong>and 
                            <strong> tailored recommendations</strong>, these interactions could be transformed into valuable revenue 
                            streams that enhance the user experience.</h4>
            </section>

            <Divider />

            <section class = "project-section">
                <h2 class="spaced-header comfortaa">Our Scope</h2>
                <h4>For our Minimum Viable Product (MVP), we focused on delivering a streamlined and impactful 
                    <strong>proof of concept </strong>that demonstrates the power of personalisation in the travel booking process. 
                    nstead of building a full-scale system, we prioritized essential elements that showcase 
                    <strong>core functionality </strong>while maintaining a seamless user experience.</h4>
            </section>
        </div>
    );
}

export default UrTrip;