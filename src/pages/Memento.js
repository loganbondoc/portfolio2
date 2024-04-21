import React, { useEffect } from 'react';
import mementoBanner from '../images/memento/memento_banner.png';
import doubleDiamond from '../images/memento/double_diamond.png';
import triangulation from '../images/memento/triangulation.png';

import IconText from '../components/IconText.js'

function Memento() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the screen when component mounts
      }, []);
    
    return (
        <div>
            <section class = "project-section">
                <img src={mementoBanner} alt=""></img>
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
                    <img class = "double-diamond" src = {doubleDiamond}></img>
                </div>
            </section>

            <section class = "project-section">
                <h2>Discover</h2>
                <h4>To begin our research, we conducted secondary research in the form of reviewing academic literature to see what debriefing methods were currently available and SWOT Analysis to see where these forms of recovery fall short. We found that:</h4>
                <div>
                    <h4>Academic Literature</h4>
                    <h4>Current recovery methods from Post Party Blues include: Jounalling thoughts and feelings Hosting Debriefing parties both online and in-person to facilitate reconnection</h4>
                </div>
                <div>
                    <h4>SWOT Analysis</h4>
                    <h4>Reconnecting with friends and loved ones after an event relies on their availability and understanding, while a social stigma surrounding these emotions make individuals hesitant to open up.</h4>
                </div>
                <h4>Which allowed us to develop our research goals:</h4>
                <div>
                    <span><h2>How</h2><h4>does the presence of shyness or sociability influence the experience of post-party blues and the effectiveness of existing strategies?</h4></span>
                    <span><h2>What</h2><h4>kind of negative thoughts and feelings are young people having after a festive season, event or party?</h4></span>
                    <span><h2>How</h2><h4>and why are young people engaging in social debriefing sessions with their friends after events?</h4></span>
                </div>
            </section>

            <section class = "project-section">
                <h2>With these goals in mind, we began Primary Research, using a triangulation approach that balance the weaknesses between each research method.</h2>
                <img src={triangulation} alt="" class = "double-diamond"></img>
            </section>

            <section class = "project-section">
                <h4>With all the data we collated, we synthesised it using Affinity Mapping.</h4>
                <img src={triangulation} alt="" class = "double-diamond"></img>
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
                        img = "https://source.unsplash.com/100x100"
                        title = "Societal pressure"
                        description = "There is an expectation to sustain productivity, maintain appearances and update others on activity whilst experiencing post-event emotions."
                    />
                    <IconText 
                        img = "https://source.unsplash.com/100x100"
                        title = "Returning to routine"
                        description = "Experiencing a highly anticipated, fun and active event following a sudden shift back into a normal routine can lead to individuals feeling discontentment and losing their sense of purpose"
                    />
                    <IconText 
                        img = "https://source.unsplash.com/100x100"
                        title = "Individual Recovery"
                        description = "Individuals resort to a balance of solitary outlets productive routines that assist in overcoming their negative post-event emotions."
                    />
                    <IconText 
                        img = "https://source.unsplash.com/100x100"
                        title = "Social Reconnection"
                        description = "Human interaction is vital during the post-event phase. Young people connect with each other through storytelling and expression, countering feelings of isolation and disconnection."
                    />
                    <IconText 
                        img = "https://source.unsplash.com/100x100"
                        title = "Societal pressure"
                        description = "There is an expectation to sustain productivity, maintain appearances and update others on activity whilst experiencing post-event emotions."
                    />
                    <IconText 
                        img = "https://source.unsplash.com/100x100"
                        title = "Memory Preservation"
                        description = "Preserving the memories of an event can reduce the abrupt “morning-after” emotions of anxiety. Examples of this include revisiting photos, listening to the same music or replicating the setting to keep the memory alive."
                    />
                </div>
            </section>

            <section class = "project-section">
                <h2>Our synthesis of the data</h2>
                <h4>To gain a better understanding of our user base, we utilised a data sheet to group interviewees, which acted as a structure to the personas we developed as we derived characteristics from the clumps.</h4>
            </section>
            <section class = "project-section">
                <div class = "persona-container">
                    <img src = "https://source.unsplash.com/250x250"></img>
                    <h4>Mary is known as the life of the party, thriving in social settings.
                        Enjoys parties with laughter, lights, and music but experiences self-doubt the next morning.
                        Her anxiety eases after discussing her experiences during a coffee chat.
                        Mary's extroverted and reflective personality drives her dependence on others for post-event recovery.</h4>
                </div>
            </section>
            <section class = "project-section">
                <h4>Created Storyboards</h4>
                <img src = "https://source.unsplash.com/200x200"></img>
            </section>
            <section class = "project-section">
                <h2>Concept Development</h2>
                <h3>Ideation</h3>
                <h3>Idea Refinement</h3>
            </section>
            <section class = "project-section">
                <h2>Wireframes</h2>
                <img src = "https://source.unsplash.com/200x200"></img>
            </section>
            <section class = "project-section">
                <h2>Hi-Fi Prototypes</h2>
                <img src = "https://source.unsplash.com/200x200"></img>
            </section>
        </div>
    );
}

export default Memento;
