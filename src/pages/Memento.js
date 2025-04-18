import React, { useEffect } from 'react';
import { Divider } from '@heroui/divider';

// Research Approach Images
import doubleDiamond from '../images/memento/double_diamond.png';

// Secondary Research Images
import recoveryIcon from '../images/memento/icons/recovery_icon.png';
import reconnectIcon from '../images/memento/icons/reconnect_icon.png';
import debriefIcon from '../images/memento/icons/debrief_icon.png';
import shyIcon from '../images/memento/icons/shy_icon.png';
import thoughtsIcon from '../images/memento/icons/thoughts_icon.png';

// Primary Research Images
import indivRecoveryIcon from '../images/memento/icons/indiv_recovery_icon.png';
import memoryIcon from '../images/memento/icons/memory_icon.png';
import routineIcon from '../images/memento/icons/routine_icon.png';
import socialIcon from '../images/memento/icons/social_icon.png';
import societyIcon from '../images/memento/icons/society_icon.png';

// Develop Images
import memory from '../images/memento/artefacts/memory_infographic.png';
import stash from '../images/memento/artefacts/stash_infographic.png';
import museum from '../images/memento/artefacts/museum_infographic.png';

// Synthesis Images
import chrisStory from '../images/memento/artefacts/chris_storyboard.png';
import chrisMap from '../images/memento/artefacts/chris_journey_map.png';

// Images
import mementoBanner from '../images/memento/memento_banner.png';
import triangulation from '../images/memento/triangulation.png';
import sus from '../images/memento/sus.png';
import thinkAloud from '../images/memento/think-aloud.png';
import cognitiveWalkthrough from '../images/memento/cognitive-walkthrough.png';
import researchAffinity from '../images/memento/research_affinity.png';
import datasheet from '../images/memento/datasheet.png';
import chris from '../images/memento/chris.png';
import mary from '../images/memento/mary.png';
import tanya from '../images/memento/tanya.png';
import maryStory from '../images/memento/mary_storyboard.png';
import tanyaStory from '../images/memento/tanya_storyboard.png';
import wireframe1 from '../images/memento/wireframe_1.png';
import wireframe2 from '../images/memento/wireframe_2.png';
import wireframe3 from '../images/memento/wireframe_3.png';
import wireframe4 from '../images/memento/wireframe_4.png';
import midfi1 from '../images/memento/midfi_1.png';
import midfi2 from '../images/memento/midfi_2.png';
import midfi3 from '../images/memento/midfi_3.png';
import midfi4 from '../images/memento/midfi_4.png';
import hifi1 from '../images/memento/hifi_1.png';
import hifi2 from '../images/memento/hifi_2.png';
import hifi3 from '../images/memento/hifi_3.png';
import hifi4 from '../images/memento/hifi_4.png';
import devDiagram from '../images/memento/dev_diagram.png'
import usabilityTable1 from '../images/memento/usabilitytable1.png'
import testingAffinity from '../images/memento/testing_affinity.png';
import onboarding from '../images/memento/onboarding.png';
import customisation from '../images/memento/customisation.png';
import latch from '../images/memento/latch.png';

import preservationIcon from '../images/memento/preservation_icon.png';
import reconnectionIcon from '../images/memento/reconnection_icon.png';
import societalIcon from '../images/memento/societal_icon.png';
// import routineIcon from '../images/memento/routine_icon.png';
import mementoDiagram from '../images/memento/memento_diagram.png';
import transformation from '../images/memento/transformation.png';

// Components
import IconText from '../components/IconText.js'
import CustomCarousel from '../components/CustomCarousel.js';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CustomZoom from '../components/CustomZoom.js';
import InfoItem from "../components/InfoItem";

function Memento() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the screen when component mounts
      }, []);

    const personaImages = [
        chris,
        mary,
        tanya,
    ];

    const ideaImages = [
        stash,
        memory,
        museum,
    ];

    const storyImages =[
        chrisStory,
        chrisMap,
    ]

    const wireframeImages = [
        wireframe1,
        wireframe2,
        wireframe3,
        wireframe4,
    ]

    const midfiImages = [
        midfi1,
        midfi2,
        midfi3,
        midfi4,
    ]

    const hifiImages = [
        hifi1,
        hifi2,
        hifi3,
        hifi4,
    ]
    
    return (
        <div>
            <section class = "project-section">
                <img src={mementoBanner} alt=""></img>
            </section>
            <section class = "project-section">
                <div>
                    <h3 class="header">Overview</h3>
                    <h4>This investigation of </h4>
                </div>
                <div>
                    <h3 class="header">Role</h3>
                    <h4>Product Designer: User Research, Interaction, Visual design, Prototyping & Testing</h4>
                </div>
                <span>
                    <div>
                        <h3 class="header">Project Duration</h3>
                        <h4>13 Weeks</h4>
                    </div>
                    <div>
                        <h3 class="header">Sector</h3>
                        <h4>Lifestyle, Leisure & Entertainment</h4>
                    </div>
                    <Divider />
                </span>
            </section>
            
            <section class = "project-section">
            <h3 class="comfortaa spaced-header">The Problem Area</h3>
                <h4>
                We've all experienced the excitement of attending gatherings, whether it's with friends, family, or even strangers. But what happens after the festivities? Consider this: in a study involving 28 brides, over half reported experiencing clinical levels of depression post-wedding.
As psychoanalyst F. Diane Barth points out, there's often a surge of exhilaration during events, followed by a harsh reality check. The initial euphoria fades as the feel-good chemicals in our bodies diminish. Whether it's physical, emotional, or psychological, there's a notable pattern of post-event emotions emerging among younger generations.
                </h4>
            </section>
            <Divider />

            <section class = "project-section">
                <h3 class="comfortaa spaced-header">Research Approach</h3>
                <h4>
                    Our design process for Memento, was based upon the double diamond method. Through this, we implemented phases of:<br/>
                    <ul className="list-disc pl-5">
                        <li><h4><strong>Discovering</strong> more about the chosen topic</h4></li>
                        <li><h4><strong>Defining</strong> the key issues that needed to be addressed</h4></li>
                        <li><h4><strong>Developing</strong> and ideating a key solution</h4></li>
                        <li><h4><strong>Delivering</strong> the solution to our target demographic</h4></li>
                    </ul>
                    
                </h4>
                <div class = "centered-image-container">
                    <img class = "centered-image" src = {doubleDiamond}></img>
                </div>
            </section>
            <Divider />

            <section class = "project-section">
                <h3 class="comfortaa spaced-header">Secondary Research</h3>
                <h4>To begin our research, we conducted secondary research in the form of reviewing <strong>academic literature </strong> 
                    to see what debriefing methods were currently available and <strong> SWOT Analysis</strong> to see where these forms 
                    of recovery fall short.<br/></h4>
                <br/>
                <h4>We found that:</h4>
                <IconText
                    img = {recoveryIcon}
                    title = {<h4><strong>Current recovery methods include:</strong></h4>}
                    description={
                        <ul className="list-disc pl-5">
                            <li><h4>Jounalling thoughts and feelings</h4></li>
                            <li><h4>Hosting Debriefing parties both online and in-person to facilitate reconnection</h4></li>
                        </ul>
                    }>
                </IconText>
                <IconText
                    img = {reconnectIcon}
                    title = {<h4><strong>Reconnecting with friends and loved ones after an event:</strong></h4>}
                    description={
                        <ul className="list-disc pl-5">
                            <li><h4>Relies on their availability and understanding</h4></li>
                            <li><h4>Is restricted by a social stigma, causing hesitation to open up</h4></li>
                        </ul>
                    }>
                </IconText>
                <h4 class="spaced-header"><strong>We still had some questions though, and used them to drive our primary research</strong></h4>
                <IconText
                    img = {shyIcon}
                    title = {""}
                    description={
                        <h4>How does the presence of <strong>shyness or sociability</strong> influence the experience
                            of post-party blues and the <strong>effectiveness</strong> of existing strategies?</h4>
                    }>
                </IconText>
                <IconText
                    img = {debriefIcon}
                    title = {""}
                    description={
                        <h4>How and why are young people engaging in <strong>social debriefing </strong> 
                            sessions with their friends after events?</h4>
                    }>
                </IconText>
                <IconText
                    img = {thoughtsIcon}
                    title = {""}
                    description={
                        <h4>What kind of <strong>negative thoughts</strong> and feelings are young people having  
                            <strong> after</strong> a festive season, event or party?</h4>
                    }>
                </IconText>
            </section>
            <Divider />

            <section class = "project-section">
                <h3 class="comfortaa spaced-header">Primary Research</h3>
                <h4 class ="spaced-header">Our Primary Research used a <strong>triangulation approach</strong> to balance the weaknesses between each research method</h4>
                <div class="centered-image-container">
                    <img src={triangulation} alt="" class = "centered-image"></img>
                </div>
                
            </section>

            <section class = "project-section">
                <div class="sidebyside">
                    <span>
                        <h4>With all the data we collated, we grouped our findings using Affinity Mapping.</h4>
                        <br/>
                        <ul className="list-disc pl-5">
                            <li><h4><strong>167</strong> pieces of user data</h4></li>
                            <li><h4><strong>16</strong> key insights</h4></li>
                            <li><h4>Categorised into <strong>5</strong> overarching themes</h4></li>
                        </ul>
                        <br/>
                        <h4>This allowed us to group <strong>common concepts</strong> and find <strong>themes</strong> in the experiences of young 
                            people that we could <strong>refer back to</strong> throughout the design process.</h4>
                    </span>
                    
                    <CustomZoom
                        img = {researchAffinity}
                        alt = ""
                    />
                </div>
            </section>
            <Divider/>

            <section class = "project-section">
                <h3 class="comfortaa text-center">Key User Insights</h3>
                <div>
                    <IconText 
                        img = {societyIcon}
                        title = {<h4><strong>Societal pressure</strong></h4>}
                        description = {<h4>
                            There is an expectation to sustain productivity, maintain appearances 
                            and update others on activity whilst experiencing post-event emotions.
                        </h4>}
                    />
                    <IconText 
                        img = {routineIcon}
                        title = {<h4><strong>Returning to routine</strong></h4>}
                        description = {<h4>
                            Experiencing a highly anticipated, fun and active event following a sudden shift back 
                            into a normal routine 
                            can lead to individuals feeling discontentment and losing their sense of purpose
                        </h4>}
                    />
                    <IconText 
                        img = {indivRecoveryIcon}
                        title = {<h4><strong>Individual Recovery</strong></h4>}
                        description = {<h4>
                            Individuals resort to a balance of solitary outlets productive routines that 
                            assist in overcoming their negative post-event emotions.
                        </h4>}
                    />
                    <IconText 
                        img = {socialIcon}
                        title = {<h4><strong>Social Reconnection</strong></h4>}
                        description = {<h4>
                            Human interaction is vital during the post-event phase. Young people connect with each other through 
                            storytelling and expression, countering feelings of isolation and disconnection.
                        </h4>}
                    />
                    <IconText 
                        img = {memoryIcon}
                        title = {<h4><strong>Memory Preservation</strong></h4>}
                        description = {<h4>
                            Preserving the memories of an event can reduce the abrupt “morning-after” emotions of anxiety. 
                            Examples of this include revisiting 
                            photos, listening to the same music or replicating the setting to keep the memory alive.
                        </h4>}
                    />
                </div>
            </section>

            <section class = "project-section">
                <h4 className="spaced-header"><strong>To encapsulate all these findings we created the
                    following problem statement</strong></h4>
                <h3>"Young people often experience post-event effects of nostalgia, 
                    emptiness and social fatigue. These feelings are exacerbated by common 
                    tendencies to suppress emotions or to be productive in the aftermath of these events.
                    Despite the abundance of post-event recovery methods, there is still an existing 
                    struggle to debrief and preserve memories from events."</h3>
            </section>


            <section class = "project-section">
                <h3 class="confortaa spaced-header">Synthesising the Data</h3>
                <div class="sidebyside">
                    <span>
                        <h4><strong>Persona Data Sheet</strong></h4>
                        <h4>To gain a better understanding of our user base, we utilised a <strong>data sheet </strong>to group interviewees, 
                            which acted as a structure to the personas we developed as we derived characteristics 
                            from the clumps.</h4>
                        <br/>
                        <h4><strong>From Clumps to Personas</strong></h4>
                        <h4>We identified <strong>two extroverted personas </strong>and <strong>one introverted persona </strong>based on shared 
                            characteristics from our interviews. To refine our insights further, we categorized them by 
                            their preferred event types—<strong>travel, concerts, or parties</strong>—reflecting the 
                            experiences they spoke about most.</h4>
                    </span>
                    <CustomZoom
                        img={datasheet}
                        alt=""
                    />
                </div>
            </section>
            
            <section class = "project-section">
                <h3 class="spaced-header confortaa">Meet our Personas</h3>
                <CustomCarousel images={personaImages}/>
                <h4><strong>User Journey Mapping</strong></h4>
                <h4>We then used user journey mapping to break down <strong>key interactions </strong>and 
                    identify <strong>pain points </strong>throughout the Post-Party process.</h4>
                <br/>
                <h4><strong>Storyboarding</strong></h4>
                <h4>Storyboarding helped <strong>visualise </strong>real and potential user interactions, making it easier to 
                <strong> spot issues </strong>and align <strong>design decisions </strong>early.</h4>
                <CustomCarousel images={storyImages}/>
            </section>

            <section class = "project-section">
                <h3 className="comfortaa spaced-header">Development</h3>
                <h4><strong>Ideation Process</strong></h4>
                <h4>To generate a diverse range of solutions, our team explored ideas independently, each focusing 
                    on a different persona and applying unique ideation methods. This approach allowed us to 
                    address <strong>varying user needs </strong>and uncover a broader set of <strong>design possibilities.</strong></h4>
                <CustomCarousel images={ideaImages}/>
                <div class="sidebyside">
                    <span>
                        <h4><strong>Decision Matrix</strong></h4>
                        <h4>We used a decision matrix to evaluate each concept against <strong>key criteria, </strong>prioritizing 
                            features based on the design brief, relevance to Post Party Effects, 
                            and personal interest.</h4>
                        <br/>
                        <h4><strong>Results</strong></h4>
                        <h4>Museum stood out for its <strong>media centralisation </strong>and <strong>event organisation, </strong>while Stash and 
                            Memory faced accessibility and audience fit challenges. To address Museum’s 
                            <strong> lack of creative liberty</strong>, we added Memory’s scrapbooking for creativity. We 
                            also integrated Stash’s AI parallax effect for better post-event interactions, 
                            making it more <strong>engaging </strong>for young partygoers.</h4>
                    </span>
                    <CustomZoom
                        img={datasheet}
                        alt=""
                    />
                </div>
            </section>

            <section class = "project-section">
                <h4 className="spaced-header comfortaa">Meet Memento</h4>
                <h4>With iterations to the design, Museum evolved into Memento, a platform designed for <strong>centralized 
                    media sharing </strong>before, during, and after events. By introducing Memos, users can engage in 
                    real-time interactions while fostering post-event reconnection through <strong>dynamic social features.</strong></h4>
                <img src={mementoDiagram} alt="" class = "centered-image"></img>
                <div class="sidebyside">
                    <span>
                        <h4><strong>Moodboard & Branding</strong></h4>
                        <h4>Originally, our primary colours were orange and blue, associated with <strong>optimism and warmth </strong>
                            , which encourages users in their Post Event phase.</h4>
                    </span>
                    <CustomZoom
                        img={datasheet}
                        alt=""
                    />
                </div>
            </section>
            <Divider/>

            <section class = "project-section">
                <div class = "centered-image-container">
                    <img src = {devDiagram}></img>
                </div>
            </section>

            <section class = "project-section">
                <h2>Wireframes</h2>
                <h4>With all our features established, we laid out how they would be translated to a screen setting 
                    using wireframes. This would provide a base layout, with usability and ethical considerations 
                    being the main focus of this phase.</h4>
                <CustomCarousel images={wireframeImages}/>
            </section>

            <section class = "project-section">
                <h2>Mid-Fi Prototypes</h2>
                <h4>After gathering informal peer feedback, we began to further refine our designs. Giving the 
                    prototypes basic functionality as well as clarifying critical information.</h4>
                <CustomCarousel images={midfiImages}/>
            </section>

            <section class = "project-section">
                <h2>User Testing Round 1</h2>
                <h4>The first round of user testing, was completed utilising an iterative process. By making 
                    small adjustments between testing methods, we ensured that the glaring issues wouldn’t be 
                    repeated by subsequent participants</h4>
                <div>
                    <div class = "top-bottom-container">
                        <CustomZoom
                            img = {thinkAloud}
                            alt = ""
                        />
                        <h4>Think Alouds</h4>
                        <h4>Was first conducted on 5 general users to identify any glaring usability issues. Easily adjustable issues were addressed within this phase</h4>
                    </div>
                    <div class = "top-bottom-container">
                        <CustomZoom
                            img = {cognitiveWalkthrough}
                            alt = ""
                        />
                        <h4>Cognitive Walkthroughs</h4>
                        <h4>Conducted on 10 experts to identify issues from a more critical and design-centered perspective.</h4>
                    </div>
                    <div class = "top-bottom-container">
                        <CustomZoom
                            img = {sus}
                            alt = ""
                        />
                        <h4>System Usability Scale (SUS)</h4>
                        <h4>Conducted on all 15 participants, to highlight usability concerns on a quantitative scale</h4>
                    </div>
                </div>
            </section>

            <section class = "project-section">
                <h4>and then we collated our findings</h4>
                <div>
                    <h4>Affinity Mapping</h4>
                    <h4>Categorise usability issues under specific usability goals</h4>
                    <CustomZoom
                        img = {testingAffinity}
                        alt = ""
                    />
                </div>
                <div>
                    <h4>Usability insights table</h4>
                    <h4>Used to prioritise specific tasks</h4>
                    <CustomZoom
                        img = {usabilityTable1}
                        alt = ""
                    />
                </div>
            </section>

            <section class = "project-section">
                <h2>Hi-Fi Prototypes</h2>
                <h4>Used a calming orange and highlights of green to instill a</h4>
                <CustomCarousel images={hifiImages}/>
            </section>

            <section class = "project-section">
                <h2>Refinements made from Mid-Fi</h2>
                <div>
                    <h4>Onboarding Tutorial</h4>
                    <h4>As shown by our SUS results users had difficulty in identifying icons in the create menu, highlighting a need for “Technical Support”.To remedy this, we implemented an onboarding tutorial when first using the app, to clarify any confusion.</h4>
                    <CustomZoom
                        img={onboarding}
                        alt=""
                    />
                </div>
                <div>
                    <h4>More Personalisation</h4>
                    <h4>Experts identified a lack of personalisation options for their event pages. So we integrated adjustable text colours, background textures and added more font options.</h4>
                    <CustomZoom
                        img={customisation}
                        alt=""
                    />
                </div>
            </section>

            <section class = "project-section">
                <h2>Design Overhaul</h2>
                <h4>Prior to integrating interactivity into the project, additional Think-Aloud testing revealed that the branding miscommunicated the purpose of the application. With our colour themes conveying an "Outdated Grandma Feel" as opposed to our targetted young demographic, our team decided to completely rework Memento's branding.</h4>
                <h4>Originally, the colour palette aimed to convey optimism and warmth through tones of orange and dark green</h4>
                <h4>The new theme, incorporated a high-contrast white and black colour scheme with accents of bright blue and green to play into an early 2000's aesthetic. All headings in the application were now lowercase, as well as an increase in emoji use to provide a more casual tone.</h4>
                <div class = "centered-image-container">
                    <CustomZoom
                        img = {transformation}
                        alt = ""
                    />
                </div>
            </section>

            <section class = "project-section">
                <h2>Second Round of User Testing</h2>
                <h4>With our interactive mockup, we conducted testing on experts using Heuristic Evaluations and tested with general users with Think Aloud tasks.</h4>
                <div>
                    <div class = "top-bottom-container">
                        <CustomZoom
                            img = {thinkAloud}
                            alt = ""
                        />
                        <h4>Heuristic Evaluations</h4>
                        <h4>Was first conducted on 5 general users to identify any glaring usability issues. Easily adjustable issues were addressed within this phase</h4>
                    </div>
                    <div class = "top-bottom-container">
                        <CustomZoom
                            img = {cognitiveWalkthrough}
                            alt = ""
                        />
                        <h4>Loop 11 Walkthroughs</h4>
                        <h4>Conducted on 10 experts to identify</h4>
                    </div>
                </div>
            </section>

            <section class = "project-section">
                <h2>More iterations</h2>
                <h4>Through the extensive testing conducted on our interactive prototype, we had made 18 changes, big and small, to Memento. The most notable however was users who struggled to navigate a clustered event page:</h4>
                <div>
                    <div>
                        <h4>Latch Principle</h4>
                        <h4>
                            To address this, we utilised the LATCH Principle, which organises sorts data by either: Location, Alphabet, Time, Category and Heirachy. Hence, we implemented it through the a new sorting and filter dropdown, which allowed users to sort memos by time and filter by category of the memo (ie. notes, polls, links).
                        </h4>
                    </div>
                    <div>
                        <CustomZoom
                            img={latch}
                            alt=""
                        />
                    </div>
                </div>
            </section>
            
            <section class = "project-section">
                <h2>Meet Memento</h2>
                <h4> Why just reminisce about events when can relive them, prolong them and anticipate future ones?</h4>
            </section>

            <section class = "project-section">
                <h2>Learnings</h2>
            </section>
        </div>
    );
}

export default Memento;
