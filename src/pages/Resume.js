import React from 'react';
import homeArt from '../images/home_art.png';

function Resume(){
    return(
        <div>
            <section class = "project-section">
            <span class ="resume-img">
                    {/* <div>
                        <img src={homeArt} ></img>
                    </div> */}
                </span>
                <h1>Logan Bondoc</h1>
                <h2>UX Designer & Front-End Developer</h2>
            </section>

            <section class = "project-section">
                <h3>Involvement</h3>
                <div>
                    <h4>Sydney University Experience Designers</h4>
                    <h4>Industry Events Director 2024</h4>
                    <h4>· Lead a team of over 10 creatives to organise and conduct UX/UI related events. <br />
    · Oversaw collaboration with Atlassian and Deloitte sponsors to deliver opportunity rich events to 1000+ students.</h4>
                </div>
                <br></br>
                <div>
                    <h4>Google Developers Student Club</h4>
                    <h4>Creative Events Subcommittee 2023</h4>
                    <h4>· Collaborated to host interdisciplinary events reaching an audience of 100+ students.<br />
· Fostered and encouraged a UX/UI design community within a technical dominated space through two creative-focused events.</h4>
                </div>
            </section>

            <section class = "project-section">
                <h3>Education</h3>
                <div>
                    <h4>University of Sydney</h4>
                    <h4>Bachelor of Design Computing, minoring in Software Development</h4>
                </div>
            </section>

            <section class = "project-section">
                <h3>Skills</h3>
                <h4>Interaction Design
Visual Design <br />
User Testing <br />
Heuristic Evaluation <br />
Storytelling <br />
User Interviews <br />
Insight Synthesis <br />
Affinity Diagramming <br />
Information Architecture</h4>
            </section>

            <section class = "project-section">
                <h3>Tools</h3>
                <h4>Figma <br />
Sketch <br />
Figjam/Miro <br />
Adobe Suite (Pr, Ae, Ai, Ps) <br />
GitHub/BitBucket <br />
Jira <br />
HTML/CSS <br />
Javascript</h4>
            </section>
        </div>
    )
}

export default Resume;