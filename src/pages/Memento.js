import React, { useEffect } from 'react';
import { Divider } from '@heroui/divider';

// Images
import mementoBanner from '../images/memento/memento_banner.png';
import doubleDiamond from '../images/memento/double_diamond.png';
import triangulation from '../images/memento/triangulation.png';
import sus from '../images/memento/sus.png';
import thinkAloud from '../images/memento/think-aloud.png';
import cognitiveWalkthrough from '../images/memento/cognitive-walkthrough.png';
import memory from '../images/memento/memory.png';
import stash from '../images/memento/stash.png';
import museum from '../images/memento/museum.png';
import researchAffinity from '../images/memento/research_affinity.png';
import datasheet from '../images/memento/datasheet.png';
import chris from '../images/memento/chris.png';
import mary from '../images/memento/mary.png';
import tanya from '../images/memento/tanya.png';
import chrisMap from '../images/memento/chris_map.png';
import chrisStory from '../images/memento/chris_storyboard.png';
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
import recoveryIcon from '../images/memento/recovery_icon.png';
import societalIcon from '../images/memento/societal_icon.png';
import routineIcon from '../images/memento/routine_icon.png';
import mementoDiagram from '../images/memento/memento_diagram.png';
import transformation from '../images/memento/transformation.png';

// Components
import IconText from '../components/IconText.js'
import CustomCarousel from '../components/CustomCarousel.js';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CustomZoom from '../components/CustomZoom.js';

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
        maryStory,
        tanyaStory,
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
            <h2 class="comfortaa">The Problem Area</h2>
                <h4>
                We've all experienced the excitement of attending gatherings, whether it's with friends, family, or even strangers. But what happens after the festivities? Consider this: in a study involving 28 brides, over half reported experiencing clinical levels of depression post-wedding.
As psychoanalyst F. Diane Barth points out, there's often a surge of exhilaration during events, followed by a harsh reality check. The initial euphoria fades as the feel-good chemicals in our bodies diminish. Whether it's physical, emotional, or psychological, there's a notable pattern of post-event emotions emerging among younger generations.
                </h4>
            </section>
            <Divider />

            <section class = "project-section">
                <h2 class="comfortaa">Research Approach</h2>
                <h4>
                    Our design process for Memento, was based upon the double diamond method. Through this, we implemented phases of:<br/>
                    <ul>
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
                <h3 class="header comfortaa">Secondary Research</h3>
                <h4>To begin our research, we conducted secondary research in the form of reviewing <strong>academic literature </strong> 
                    to see what debriefing methods were currently available and <strong> SWOT Analysis</strong> to see where these forms 
                    of recovery fall short.<br/></h4>
                <br/>
                <h4>We found that:</h4>
                <IconText
                    img = {societalIcon}
                    title = "Current recovery methods include:"
                    description = "There is an expectation to sustain productivity, maintain appearances and update others on activity whilst experiencing post-event emotions.">
                </IconText>
                <div>
                    <h4>Academic Literature</h4>
                    <h4>Current recovery methods from Post Party Blues include: Jounalling thoughts and feelings Hosting Debriefing parties both online and in-person to facilitate reconnection</h4>
                </div>
                <div>
                    <h4>SWOT Analysis</h4>
                    <h4>Reconnecting with friends and loved ones after an event relies on their availability and understanding, while a social stigma surrounding these emotions make individuals hesitant to open up.</h4>
                </div>
                <h4><strong>We still had some questions though, and used them to drive our primary research</strong></h4>
                <div>
                    <span><h2>How</h2><h4>does the presence of shyness or sociability influence the experience of post-party blues and the effectiveness of existing strategies?</h4></span>
                    <span><h2>What</h2><h4>kind of negative thoughts and feelings are young people having after a festive season, event or party?</h4></span>
                    <span><h2>How</h2><h4>and why are young people engaging in social debriefing sessions with their friends after events?</h4></span>
                </div>
            </section>
            <Divider />

            <section class = "project-section">
                <h2 class="comfortaa">Primary Research</h2>
                <h4>Our Primary Research used a <strong>triangulation approach</strong> to balance the weaknesses between each research method</h4>
                <div class="centered-image-container">
                    <img src={triangulation} alt="" class = "centered-image"></img>
                </div>
                
            </section>

            <section class = "project-section">
                <h4>With all the data we collated, we grouped our findings using Affinity Mapping.</h4>
                <CustomZoom
                    img = {researchAffinity}
                    alt = ""
                />
            </section>

            <section class = "project-section">
                <h4>And came across our problem statement</h4>
                <h2>Key Findings</h2>
                <h2>"Young people often experience post-event effects of nostalgia, emptiness and social fatigue. These feelings are exacerbated by common tendencies to suppress emotions or to be productive in the aftermath of these events.
                    Despite the abundance of post-event recovery methods, there is still an existing struggle to debrief and preserve memories from events."</h2>
            </section>

            <section class = "project-section">
                <h4>We found that:</h4>
                <div>
                    <IconText 
                        img = {societalIcon}
                        title = "Societal pressure"
                        description = "There is an expectation to sustain productivity, maintain appearances and update others on activity whilst experiencing post-event emotions."
                    />
                    <IconText 
                        img = {routineIcon}
                        title = "Returning to routine"
                        description = "Experiencing a highly anticipated, fun and active event following a sudden shift back into a normal routine can lead to individuals feeling discontentment and losing their sense of purpose"
                    />
                    <IconText 
                        img = {recoveryIcon}
                        title = "Individual Recovery"
                        description = "Individuals resort to a balance of solitary outlets productive routines that assist in overcoming their negative post-event emotions."
                    />
                    <IconText 
                        img = {reconnectionIcon}
                        title = "Social Reconnection"
                        description = "Human interaction is vital during the post-event phase. Young people connect with each other through storytelling and expression, countering feelings of isolation and disconnection."
                    />
                    <IconText 
                        img = {preservationIcon}
                        title = "Memory Preservation"
                        description = "Preserving the memories of an event can reduce the abrupt “morning-after” emotions of anxiety. Examples of this include revisiting photos, listening to the same music or replicating the setting to keep the memory alive."
                    />
                </div>
            </section>

            <section class = "project-section">
                <h2>Our synthesis of the data</h2>
                <h4>To gain a better understanding of our user base, we utilised a data sheet to group interviewees, which acted as a structure to the personas we developed as we derived characteristics from the clumps.</h4>
                <CustomZoom
                    img={datasheet}
                    alt=""
                />
            </section>
            
            <section class = "project-section">
                <CustomCarousel images={personaImages}/>
            </section>

            <section class = "project-section">
                <h4>And developed a range of user journey maps and storyboards, to see how users were really feeling.</h4>
                <CustomZoom
                    img = {chrisMap}
                    alt = ""
                />
                <CustomCarousel images={storyImages}/>
            </section>

            <section class = "project-section">
                <h2>Concept Development</h2>
                <h4>With each of us focusing in a particular persona, we employed the use of three ideation methods to individually generate multiple concepts.</h4>
                <CustomCarousel images={ideaImages}/>
            </section>

            <section class = "project-section">
                <h4>With each idea viewing Post-Party effects from such different perspectives, we used a decision matrix to assess each idea and extracted features to create our new concept Memento.
                    Memento supports users throughout the entire event process
                </h4>
                <img src={mementoDiagram} alt="" class = "centered-image"></img>
            </section>

            <section class = "project-section">
                <div class = "centered-image-container">
                    <img src = {devDiagram}></img>
                </div>
            </section>

            <section class = "project-section">
                <h2>Wireframes</h2>
                <h4>With all our features established, we laid out how they would be translated to a screen setting using wireframes. This would provide a base layout, with usability and ethical considerations being the main focus of this phase.</h4>
                <CustomCarousel images={wireframeImages}/>
            </section>

            <section class = "project-section">
                <h2>Mid-Fi Prototypes</h2>
                <h4>After gathering informal peer feedback, we began to further refine our designs. Giving the prototypes basic functionality as well as clarifying critical information.</h4>
                <CustomCarousel images={midfiImages}/>
            </section>

            <section class = "project-section">
                <h2>User Testing Round 1</h2>
                <h4>The first round of user testing, was completed utilising an iterative process. By making small adjustments between testing methods, we ensured that the glaring issues wouldn’t be repeated by subsequent participants</h4>
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
