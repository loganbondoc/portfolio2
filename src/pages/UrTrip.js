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

//Prototype Images
import theProcess from '../images/urtrip/prototype/the_process.png';
import figmaPrototype from '../images/urtrip/prototype/figma_prototype.png';
import introducingUrTrip from '../images/urtrip/prototype/introducing_urtrip.png';

// Icons
import flightsIcon from '../images/urtrip/icons/flights_icon.png';
import impactIcon from '../images/urtrip/icons/impact_icon.png';
import personaIcon from '../images/urtrip/icons/persona_icon.png';
import transparencyIcon from '../images/urtrip/icons/transparency_icon.png';
import stereotypeIcon from '../images/urtrip/icons/stereotype_icon.png';

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
                <h2 class="spaced-header comfortaa"><span class="urtrip-orange">Low Engagement </span>with Post-Booking Content</h2>
                <div class="sidebyside">
                    <span>
                        <h4>Users find that generic post-booking content and upselling of accommodations often feels 
                            <strong> impersonal</strong> and <strong>disconnected </strong>from the user’s specific itinerary, 
                            resulting in <strong>low engagement </strong>and <strong>missed revenue </strong>opportunities.</h4>
                        <br/>
                        <h4> Trip.com’s post-purchase page serves as one example of a common experience across booking platforms, 
                            airlines, and travel insurance providers. Similar layouts and content are found widely, highlighting 
                            a <strong>lack of tailored engagement </strong>in the industry.
                        </h4>
                        <br/>
                    </span>
                    <CustomZoom
                        img={lowEngagement}
                        alt=""
                    />
                </div>
                <h3>An <span class="urtrip-orange">Opportunity</span></h3>
                        <h4>Travel is supposed to be exciting! By offering <strong>personalised insights </strong>and 
                            <strong> tailored recommendations</strong>, these interactions could be transformed into valuable revenue 
                            streams that enhance the user experience.</h4>
            </section>

            <Divider />

            <section class = "project-section">
                <h2 class="spaced-header comfortaa">Our <span class="urtrip-orange">Scope</span></h2>
                <h4>For our Minimum Viable Product (MVP), we focused on delivering a streamlined and impactful 
                    <strong> proof of concept </strong>that demonstrates the power of personalisation in the travel booking process. 
                    nstead of building a full-scale system, we prioritized essential elements that showcase 
                    <strong> core functionality </strong>while maintaining a seamless user experience.</h4>
                    <IconText 
                        img = {impactIcon}
                        title = {<h4><strong>High-Impact Personalisation at Checkout</strong></h4>}
                        description = {<h4>
                            To maximize effectiveness with minimal complexity, we concentrated on a single touchpoint—the 
                            <strong>checkout page</strong>. This strategic decision allowed us to test personalisation in a critical 
                            moment of the booking journey, where tailored recommendations can significantly influence 
                            user decisions.
                        </h4>}
                    />
                    <IconText 
                        img = {flightsIcon}
                        title = {<h4><strong>Focused Personalisation for Flights & Accommodation</strong></h4>}
                        description = {<h4>
                            Rather than overwhelming users with excessive choices, our MVP refines personalisation 
                            to <strong>two key areas</strong>: flight and accommodation upselling.
                        </h4>}
                    />
                    <IconText 
                        img = {personaIcon}
                        title = {<h4><strong>Simulated Personas</strong></h4>}
                        description = {<h4>
                            Travel companies have spent years refining algorithms to predict user behaviour. Our service 
                            aims to leverage these data insights, where we have simulated user personas to <strong>predict 
                            relevant offerings </strong>as well as personalised information.
                        </h4>}
                    />
            </section>
            
            <section class="project-section">
                <h2 class="spaced-header comfortaa">Our <span class="urtrip-orange">Prototype</span></h2>
                <h4><strong>AI Personalisation Prototype</strong></h4>
                <h4>The functional prototype of UrTrip was built in Python and utilised three different forms of technology.</h4>

                <div className="max-w-6xl mx-auto text-center">

                    {/* Cards Row */}
                    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:divide-x divide-gray-300">
                    {/* Amadeus */}
                    <div className="flex-1 px-6 text-center">
                        <img src={personaIcon} alt="Amadeus Icon" className="mx-auto mb-4 h-8" />
                        <h4 className="font-semibold text-lg mb-1">Amadeus API</h4>
                        <p className="text-gray-600 text-sm">
                        Limited testing version of API was used to retrieve hotels and activities within a certain radius
                        </p>
                    </div>

                    {/* WordWare */}
                    <div className="flex-1 px-6 text-center">
                        <img src={personaIcon} alt="WordWare Icon" className="mx-auto mb-4 h-8" />
                        <h4 className="text-gray-900 font-semibold text-lg mb-1">2x WordWare Agents</h4>
                        <p className="text-gray-600 text-sm">
                        One WordWare agent extracted and interpreted personal travel information<br/>
                        Other agent refined hotel search filters based on user preferences
                        </p>
                    </div>

                    {/* Streamlit */}
                    <div className="flex-1 px-6 text-center">
                        <img src={personaIcon} alt="Streamlit Icon" className="mx-auto mb-4 h-8" />
                        <h4 className="text-gray-900 font-semibold text-lg mb-1">Streamlit Framework</h4>
                        <p className="text-gray-600 text-sm">
                        Provided graphical interface to select personas<br/>
                        Displayed AI Agent output to user
                        </p>
                    </div>
                    </div>
                </div>
                <h4 class="spaced-header">The functionality looked similar to this:</h4>
                <div className="banner-container">
                    <img src={theProcess} alt="" className="banner"></img>
                </div>
                <div class="sidebyside">
                    <span>
                        <h4><strong>Front-End Mockups</strong></h4>
                        <br/>
                        <h4>A Figma prototype was iteratively developed alongside the backend, beginning with wireframes 
                            to establish <strong>layouts</strong> and <strong>design patterns</strong>. Internal reviews refined the high-fidelity mock-ups to 
                            create a polished, responsive, user-centric interface.</h4>
                        <br/>
                        <a src="">View Figma Prototype</a>
                    </span>
                    <CustomZoom
                        img={figmaPrototype}
                        alt=""
                    />
                </div>
            </section>

            <Divider />

            <section class="project-section">
                <div className="banner-container">
                    <img src={introducingUrTrip} alt="" className="banner"></img>
                </div>
            </section>

            <section class="project-section">
                <h4 class="spaced-header">For this demonstration, we will show off two different personas travelling to <strong>New 
                York City </strong>and compare how UrTrip <strong>personalises</strong> their travel information and recommendations.</h4>
            </section>

            <section class="project-section">
                <h2 class="spaced-header comfortaa">Potential <span class="urtrip-orange">Concerns</span></h2>
                <h4>AI-powered personalisation enhances the travel experience, but <strong>transparency and ethical responsibility </strong>
                    are critical to maintaining user trust. Our approach prioritises <strong>clarity and fairness</strong>, ensuring that 
                    users understand how AI influences their journey while safeguarding against bias.</h4>
                <IconText 
                    img = {transparencyIcon}
                    title = {<h4><strong>Transparency & User Control</strong></h4>}
                    description = {<h4>
                        To foster trust, we make AI involvement explicit, clearly communicating how personalisation works 
                        and how user data is used. Additionally, we provide opt-out options, allowing users to tailor 
                        their level of AI-driven recommendations and maintain control over their experience.
                    </h4>}
                />
                <IconText 
                    img = {stereotypeIcon}
                    title = {<h4><strong>Simulated Personas</strong></h4>}
                    description = {<h4>
                        One of the biggest challenges in AI personalisation is avoiding stereotypes. Since AI infers 
                        preferences from limited data, it can sometimes default to broad generalisations that fail to 
                        account for individual diversity.
                    </h4>}
                />
            </section>
            <section class="project-section">
                <h2 class="spaced-header comfortaa">Future <span class="urtrip-orange">Steps</span></h2>
                <h4>UrTrip is a proof of concept that demonstrates the potential of AI personalisation in travel. 
                    Future iterations could explore additional touchpoints, such as pre-booking and post-booking, 
                    to further enhance user engagement and satisfaction.</h4>
            </section>
            <section class="project-section">
                <h2 class="spaced-header comfortaa">My Learnings</h2>
                <h4>For example, during testing, we identified a case where the AI misrepresented a Chinese American traveler, reinforcing cultural assumptions rather than reflecting their unique background. This issue is an industry-wide challenge, as large language models operate on probabilistic reasoning, sometimes leading to oversimplifications. 
While we’ve taken steps to mitigate bias, stereotyping remains an evolving challenge in AI. Our team is committed to continuous improvement, refining our approach to create a more inclusive and accurate personalisation system.
By prioritising transparency, user choice, and bias reduction, we ensure that AI personalisation enhances rather than misrepresents user experiences. 🚀</h4>
            </section>
        </div>
        
);
}

export default UrTrip;