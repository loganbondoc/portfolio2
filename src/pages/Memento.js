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

// Testing Images
import thinkAloudIcon from '../images/memento/icons/think_aloud_icon.png';
import cognitiveWalkthroughIcon from '../images/memento/icons/cognitive_icon.png';
import cogOverloadIcon from '../images/memento/icons/overload_icon.png';
import personalisationIcon from '../images/memento/icons/personalisation_icon.png';

// Learnings Images
import fileOrganisation from '../images/memento/icons/file_icon.png';
import componentUsage from '../images/memento/icons/component_icon.png';

// Showcase Gifs
import shareGif from '../images/memento/gifs/share.gif';
import reliveGif from '../images/memento/gifs/relive.gif';
import mojiGif from '../images/memento/gifs/moji.gif';
import inviteGif from '../images/memento/gifs/invite.gif';

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
import EmblaCarousel from '../components/EmblaCarousel.jsx';

function Memento() {
    // useEffect(() => {
    //     window.scrollTo(0, 0); // Scroll to the top of the screen when component mounts
    // }, []);

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

    const storyImages = [
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
            <section class="project-section">
                <img src={mementoBanner} alt="" class="rounded-2xl"></img>
            </section>

            <section class="project-section grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-lg">Overview</h3>
                    <p class="text-md">
                        For a class project on the theme of Lifestyle our team tackled the post-party blues, a relatable, emotional dip many young people face. We designed a mobile app to help users reconnect, reflect, and ease the comedown after social events.
                    </p>
                </div>

                <div class="flex flex-col gap-4">
                    <div>
                        <h3 class="text-md text-gray-600">Role</h3>
                        <p class="text-md text-gray-600">
                            Product Designer: User Research, Interaction, Visual design, Prototyping & Testing
                        </p>
                    </div>

                    <div>
                        <h3 class="header">Project Duration</h3>
                        <p class="text-sm text-gray-600">13 Weeks</p>
                    </div>

                    <div>
                        <h3 class="header">Sector</h3>
                        <p class="text-sm text-gray-600">Lifestyle, Leisure & Entertainment</p>
                    </div>
                </div>
            </section>


            <section class="project-section">
                <h3 class="comfortaa spaced-header">The Problem Area</h3>
                <p class="text-md">
                    Events are meant to be fun—and they are. But what happens after the lights go out? In a study of 28 brides, over half reported clinical levels of depression post-wedding. And they’re not alone.</p>
                <br />
                <p class="text-md">Through interviews and audience insights, we uncovered a pattern amongst young people:</p>
                <p class="text-md">
                    Our research found that 95% of 18–25 year olds attend events like weddings, house parties, or concerts. Shockingly, 64% reported feeling impacted afterward, citing emotional, financial, and physical stress.
                </p>
                <br />
                <p class="text-md">This insight became the foundation of our design challenge:</p>



            </section>
            <section class="w-full bg-[#1000ff] text-white text-center py-20">
                <div class="max-w-4xl mx-auto px-6">
                    <h2 class="text-2xl md:text-3xl font-semibold leading-relaxed">
                        How might we create a digital experience that helps young people reconnect, reflect, and emotionally recover after social events?
                    </h2>
                </div>
            </section>

            <Divider />

            <section class="project-section">
                <h3 class="comfortaa spaced-header">Research Approach</h3>
                <h4>
                    Our design process for Memento, was based upon the double diamond method. Through this, we implemented phases of:<br />
                    <ul className="list-disc pl-5">
                        <li><h4><strong>Discovering</strong> more about the chosen topic</h4></li>
                        <li><h4><strong>Defining</strong> the key issues that needed to be addressed</h4></li>
                        <li><h4><strong>Developing</strong> and ideating a key solution</h4></li>
                        <li><h4><strong>Delivering</strong> the solution to our target demographic</h4></li>
                    </ul>

                </h4>
                <div class="centered-image-container">
                    <img class="centered-image rounded-2xl" src={doubleDiamond}></img>
                </div>
            </section>
            <Divider />

            <section class="project-section">
                <h3 class="comfortaa spaced-header">Secondary Research</h3>
                <h4>To begin our research, we conducted secondary research in the form of reviewing <strong>academic literature </strong>
                    to see what debriefing methods were currently available and <strong> SWOT Analysis</strong> to see where these forms
                    of recovery fall short.<br /></h4>
                <br />
                <h4>We found that:</h4>
                <IconText
                    img={recoveryIcon}
                    title={<h4><strong>Current recovery methods include:</strong></h4>}
                    description={
                        <ul className="list-disc pl-5">
                            <li><h4>Jounalling thoughts and feelings</h4></li>
                            <li><h4>Hosting Debriefing parties both online and in-person to facilitate reconnection</h4></li>
                        </ul>
                    }>
                </IconText>
                <IconText
                    img={reconnectIcon}
                    title={<h4><strong>Reconnecting with friends and loved ones after an event:</strong></h4>}
                    description={
                        <ul className="list-disc pl-5">
                            <li><h4>Relies on their availability and understanding</h4></li>
                            <li><h4>Is restricted by a social stigma, causing hesitation to open up</h4></li>
                        </ul>
                    }>
                </IconText>
                <h4 class="spaced-header"><strong>We still had some questions though, and used them to drive our primary research</strong></h4>
                <IconText
                    img={shyIcon}
                    title={""}
                    description={
                        <h4>How does the presence of <strong>shyness or sociability</strong> influence the experience
                            of post-party blues and the <strong>effectiveness</strong> of existing strategies?</h4>
                    }>
                </IconText>
                <IconText
                    img={debriefIcon}
                    title={""}
                    description={
                        <h4>How and why are young people engaging in <strong>social debriefing </strong>
                            sessions with their friends after events?</h4>
                    }>
                </IconText>
                <IconText
                    img={thoughtsIcon}
                    title={""}
                    description={
                        <h4>What kind of <strong>negative thoughts</strong> and feelings are young people having
                            <strong> after</strong> a festive season, event or party?</h4>
                    }>
                </IconText>
            </section>
            <Divider />

            <section class="project-section">
                <h3 class="comfortaa spaced-header">Primary Research</h3>
                <h4 class="spaced-header">Our Primary Research used a <strong>triangulation approach</strong> to balance the weaknesses between each research method</h4>
                <div class="centered-image-container">
                    <img src={triangulation} alt="" class="centered-image rounded-2xl"></img>
                </div>

            </section>

            <section class="project-section">
                <div class="sidebyside">
                    <span>
                        <h4>With all the data we collated, we grouped our findings using Affinity Mapping.</h4>
                        <br />
                        <ul className="list-disc pl-5">
                            <li><h4><strong>167</strong> pieces of user data</h4></li>
                            <li><h4><strong>16</strong> key insights</h4></li>
                            <li><h4>Categorised into <strong>5</strong> overarching themes</h4></li>
                        </ul>
                        <br />
                        <h4>This allowed us to group <strong>common concepts</strong> and find <strong>themes</strong> in the experiences of young
                            people that we could <strong>refer back to</strong> throughout the design process.</h4>
                    </span>

                    <CustomZoom
                        img={researchAffinity}
                        alt=""
                    />
                </div>
            </section>
            <Divider />

            <section class="project-section">
                <h3 class="comfortaa text-center">Key User Insights</h3>
                <div>
                    <IconText
                        img={societyIcon}
                        title={<h4><strong>Societal pressure</strong></h4>}
                        description={<h4>
                            There is an expectation to sustain productivity, maintain appearances
                            and update others on activity whilst experiencing post-event emotions.
                        </h4>}
                    />
                    <IconText
                        img={routineIcon}
                        title={<h4><strong>Returning to routine</strong></h4>}
                        description={<h4>
                            Experiencing a highly anticipated, fun and active event following a sudden shift back
                            into a normal routine
                            can lead to individuals feeling discontentment and losing their sense of purpose
                        </h4>}
                    />
                    <IconText
                        img={indivRecoveryIcon}
                        title={<h4><strong>Individual Recovery</strong></h4>}
                        description={<h4>
                            Individuals resort to a balance of solitary outlets productive routines that
                            assist in overcoming their negative post-event emotions.
                        </h4>}
                    />
                    <IconText
                        img={socialIcon}
                        title={<h4><strong>Social Reconnection</strong></h4>}
                        description={<h4>
                            Human interaction is vital during the post-event phase. Young people connect with each other through
                            storytelling and expression, countering feelings of isolation and disconnection.
                        </h4>}
                    />
                    <IconText
                        img={memoryIcon}
                        title={<h4><strong>Memory Preservation</strong></h4>}
                        description={<h4>
                            Preserving the memories of an event can reduce the abrupt “morning-after” emotions of anxiety.
                            Examples of this include revisiting
                            photos, listening to the same music or replicating the setting to keep the memory alive.
                        </h4>}
                    />
                </div>
            </section>

            <section class="project-section">
                <h4 className="spaced-header"><strong>To encapsulate all these findings we created the
                    following problem statement</strong></h4>
                <h3>"Young people often experience post-event effects of nostalgia,
                    emptiness and social fatigue. These feelings are exacerbated by common
                    tendencies to suppress emotions or to be productive in the aftermath of these events.
                    Despite the abundance of post-event recovery methods, there is still an existing
                    struggle to debrief and preserve memories from events."</h3>
            </section>


            <section class="project-section">
                <h3 class="confortaa spaced-header">Synthesising the Data</h3>
                <div class="sidebyside">
                    <span>
                        <h4><strong>Persona Data Sheet</strong></h4>
                        <h4>To gain a better understanding of our user base, we utilised a <strong>data sheet </strong>to group interviewees,
                            which acted as a structure to the personas we developed as we derived characteristics
                            from the clumps.</h4>
                        <br />
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

            <section class="project-section">
                <h3 class="spaced-header confortaa">Meet our Personas</h3>
                {/* <CustomCarousel images={personaImages} /> */}
                <EmblaCarousel slides={personaImages} options={{dragFree: true, loop: true}}/>
                <h4><strong>User Journey Mapping</strong></h4>
                <h4>We then used user journey mapping to break down <strong>key interactions </strong>and
                    identify <strong>pain points </strong>throughout the Post-Party process.</h4>
                <br />
                <h4><strong>Storyboarding</strong></h4>
                <h4>Storyboarding helped <strong>visualise </strong>real and potential user interactions, making it easier to
                    <strong> spot issues </strong>and align <strong>design decisions </strong>early.</h4>
                {/* <CustomCarousel images={storyImages} /> */}
                <EmblaCarousel slides={storyImages} options={{dragFree: true, loop: true}}/>
            </section>

            <section class="project-section">
                <h3 className="comfortaa spaced-header">Development</h3>
                <h4><strong>Ideation Process</strong></h4>
                <h4>To generate a diverse range of solutions, our team explored ideas independently, each focusing
                    on a different persona and applying unique ideation methods. This approach allowed us to
                    address <strong>varying user needs </strong>and uncover a broader set of <strong>design possibilities.</strong></h4>
                {/* <CustomCarousel images={ideaImages} /> */}
                <EmblaCarousel slides={ideaImages} options={{dragFree: true, loop: true}}/>
                <div class="sidebyside">
                    <span>
                        <h4><strong>Decision Matrix</strong></h4>
                        <h4>We used a decision matrix to evaluate each concept against <strong>key criteria, </strong>prioritizing
                            features based on the design brief, relevance to Post Party Effects,
                            and personal interest.</h4>
                        <br />
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

            <section class="project-section">
                <h4 className="spaced-header comfortaa">Meet Memento</h4>
                <h4>With iterations to the design, Museum evolved into Memento, a platform designed for <strong>centralized
                    media sharing </strong>before, during, and after events. By introducing Memos, users can engage in
                    real-time interactions while fostering post-event reconnection through <strong>dynamic social features.</strong></h4>
                <img src={mementoDiagram} alt="" class="centered-image"></img>
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
            <Divider />

            <section class="project-section">
                <div class="centered-image-container">
                    <img src={devDiagram}></img>
                </div>
            </section>

            <section class="project-section">
                <h2>Wireframes</h2>
                <h4>With all our features established, we laid out how they would be translated to a screen setting
                    using wireframes. This would provide a base layout, with usability and ethical considerations
                    being the main focus of this phase.</h4>
                {/* <CustomCarousel images={wireframeImages} /> */}
                <EmblaCarousel slides={wireframeImages} options={{dragFree: true, loop: true}}/>
            </section>

            <section class="project-section">
                <h2>Mid-Fi Prototypes</h2>
                <h4>After gathering informal peer feedback, we began to further refine our designs. Giving the
                    prototypes basic functionality as well as clarifying critical information.</h4>
                {/* <CustomCarousel images={midfiImages} /> */}
                <EmblaCarousel slides={midfiImages} options={{dragFree: true, loop: true}}/>
            </section>

            <section class="project-section">
                <h2>User Testing Round 1</h2>
                <p class="text-md">For the first round of testing, we used <strong>three distinct methods</strong> to assess usability on static Figma screens. We also structured the application into <strong>three separate flows</strong>, each focusing on a key aspect of the experience and being tested using every method. This was to ensure that <strong>user engagement</strong> was maintained, as a long test could impact the accuracy of results.</p>
                <div class="flex flex-col md:flex-row justify-center gap-8 mt-10">
                    <div class="top-bottom-container text-center max-w-xs">
                        <CustomZoom img={thinkAloud} alt="Think Aloud Testing" />
                        <h4 class="font-semibold mt-4">Think Alouds</h4>
                        <p class="text-sm mt-2">
                            Conducted on 5 general users to identify usability issues. Quick fixes were addressed in this phase.
                        </p>
                    </div>

                    <div class="top-bottom-container text-center max-w-xs">
                        <CustomZoom img={cognitiveWalkthrough} alt="Cognitive Walkthrough" />
                        <h4 class="font-semibold mt-4">Cognitive Walkthroughs</h4>
                        <p class="text-sm mt-2">
                            Run with 10 experts to uncover deeper, design-focused usability concerns.
                        </p>
                    </div>

                    <div class="top-bottom-container text-center max-w-xs">
                        <CustomZoom img={sus} alt="System Usability Scale" />
                        <h4 class="font-semibold mt-4">System Usability Scale (SUS)</h4>
                        <p class="text-sm mt-2">
                            Completed by all 15 participants to capture quantitative insights on usability.
                        </p>
                    </div>
                </div>
                <IconText
                    img={thinkAloudIcon}
                    title={<h4><strong>Think Alouds Testing + System Usability Scale (SUS)</strong></h4>}
                    description={
                        <h4>We first conducted testing on general users of the application, to identify any glaring issues</h4>
                    }>
                </IconText>
                <IconText
                    img={cognitiveWalkthroughIcon}
                    title={<h4><strong>Cognitive Walkthroughs</strong></h4>}
                    description={
                        <h4>By doing it this way, we ensured that the glaring issues wouldn’t be repeated within the Cognitive Walkthroughs, while also gathering a broad range of perspectives.</h4>
                    }>
                </IconText>
            </section>

            <section class="project-section">
                <h2>Synthesising Results</h2>
                <p class="text-md">Following testing, two different methods were used for data analysis and iteration planning</p>
                <div class="sidebyside">
                    <span>
                        <CustomZoom
                            img={testingAffinity}
                            alt=""
                        />
                        <h4><strong>Affinity Mapping</strong></h4>
                        <h4>Affinity Diagramming was used to identify our findings under the six usability goals, to better categorise and identify lacking areas.</h4>

                    </span>
                    <span>
                        <CustomZoom
                            img={usabilityTable1}
                            alt=""
                        /><h4><strong>Usability insights table</strong></h4>
                        <h4>We used a usability insights table to analyze findings and prioritize feature improvements, combining both qualitative and quantitative data for evaluation.</h4>

                    </span>
                </div>
            </section>
            <section class="project-section">
                <h2>Findings and Iterations</h2>
                <p class="text-md">Using our data synthesis methods, multiple usability issues with our prototype had been identified. However two issues achieved a high severity rating within the insights table. These issues were then addressed in our High Fidelity iterations.</p>
                <div class="sidebyside">
                    <span>
                        <IconText
                            img={cogOverloadIcon}
                            title={<h4><strong>Cognitive Overload in Iconography</strong></h4>}
                            description={
                                <h4>As shown by our SUS results users had difficulty in identifying icons in the create menu, highlighting a need for “Technical Support”. To remedy this, we implemented an onboarding tutorial when first using the app, to clarify any confusion.</h4>
                            }
                        />
                    </span>
                    <span>
                        <CustomZoom
                            img={onboarding}
                            alt=""
                        />
                    </span>
                </div>
                <div class="sidebyside">
                    <span>
                        <IconText
                            img={personalisationIcon}
                            title={<h4><strong>More Personalisation</strong></h4>}
                            description={
                                <h4>Experts in cognitive walkthroughs identified a lack of personalisation options for their event pages. So we integrated adjustable text colours, background textures and added more font options.</h4>
                            }
                        />
                    </span>
                    <span>
                        <CustomZoom
                            img={customisation}
                            alt=""
                        />
                    </span>
                </div>
            </section>

            <section class="project-section">
                <h2>Hi-Fi Prototypes</h2>
                {/* <CustomCarousel images={hifiImages} /> */}
                <EmblaCarousel slides={hifiImages} options={{dragFree: true, loop: true }}/>
            </section>

            <section class="project-section">
                <h2>Memento's Design Crisis</h2>
                <p class="text-md">User feedback from Think-Aloud testing revealed a <strong>major branding misalignment</strong>. The original color scheme, meant to feel warm and optimistic, instead gave off an <strong>"outdated grandma feel"</strong>, missing the mark for our young audience.
                </p>
                <br />
                <p>To fix this, we completely reworked Memento’s branding. We shifted to a high-contrast black-and-white palette with bright blue and green accents, embracing an <strong>early 2000s aesthetic</strong> that resonates with our users. Lowercase headings and increased emoji use added a more casual, playful tone, making the app feel modern, relatable, and fun.</p>
                <div class="centered-image-container">
                    <CustomZoom
                        img={transformation}
                        alt=""
                    />
                </div>
            </section>

            <section class="project-section">
                <h2>User Testing Round 2</h2>
                <p class="text-md">For the second round of user testing,  <strong>14 key features</strong> of Memento were divided among <strong>4 user testing sessions</strong>. Specific features such as “Filter by Faces” and “Create Event” were tested within <strong>multiple</strong> testing sessions for the purpose of gaining deeper insights.</p>
                <div class="sidebyside">
                    <span>
                        <h4><strong>Heuristic Evaluations</strong></h4>
                        <p class="text-md">This approach allowed us to collect qualitative insights through user self-reporting and discussions while also gathering quantitative severity ratings (0-4) to assess usability issues. These findings not only informed whether Memento was ready for release but also guided our synthesis and iteration process to refine the platform.</p>
                    </span>
                    <span>
                        <CustomZoom
                            img={cognitiveWalkthroughIcon}
                            alt=""
                        />
                    </span>
                </div>
                <div class="sidebyside">
                    <span>
                        <h4><strong>Loop11 Unmoderated Testing</strong></h4>
                        <p class="text-md">This approach allowed us to collect qualitative insights through user self-reporting and discussions while also gathering quantitative severity ratings (0-4) to assess usability issues. These findings not only informed whether Memento was ready for release but also guided our synthesis and iteration process to refine the platform.</p>
                    </span>
                    <span>
                        <CustomZoom
                            img={cognitiveWalkthroughIcon}
                            alt=""
                        />
                    </span>
                </div>
            </section>

            <section class="project-section">
                <h2>More iterations</h2>
                <h4>Through the extensive testing conducted on our interactive prototype, we had made 18 changes, big and small, to Memento. The most notable however was users who struggled to navigate a clustered event page:</h4>
                <div class="sidebyside">
                    <span>
                        <h4><strong>Latch Principle</strong></h4>
                        <h4>
                            To address this, we utilised the LATCH Principle, which organises sorts data by either: Location, Alphabet, Time, Category and Heirachy. Hence, we implemented it through the a new sorting and filter dropdown, which allowed users to sort memos by time and filter by category of the memo (ie. notes, polls, links).
                        </h4>
                    </span>
                    <span>
                        <CustomZoom
                            img={latch}
                            alt=""
                        />
                    </span>
                </div>
            </section>

            <section class="bg-black text-white width-full">
                <h2>Introducing Memento</h2>
                <p>Why just reminisce about events when can relive them, prolong them and anticipate future ones?</p>
                <div class="showcase-gif">
                    <span class="flex flex-col justify-center text-left h-full">
                        <h4><strong>Invite</strong></h4>
                        <p>
                            Build the hype by inviting friends and family into your Memento. Set the stage and start the countdown to your next big event.
                        </p>
                    </span>
                    <span>
                        <img src={inviteGif} />
                    </span>
                </div>
                <div class="showcase-gif">
                    <span class="flex flex-col justify-center text-left h-full">
                        <h4><strong>Share the Moment</strong></h4>
                        <p>Polls, playlists, photos, videos, and more. All in one place for everyone to enjoy.</p>
                    </span>
                    <span>
                        <img src={shareGif} />
                    </span>
                </div>
                <div class="showcase-gif">
                    <span class="flex flex-col justify-center text-left h-full">
                        <h4><strong>React</strong></h4>
                        <p>Keep the good vibes going during and after an event by reacting to posts and showing some love. With our ReactMoji feature, respond to memos using real-time photos of yourself for a more personal touch.</p>
                    </span>
                    <span>
                    <img src={mojiGif} />
                    </span>
                </div>
                    <div class="showcase-gif">
                    <span class="flex flex-col justify-center text-left h-full">
                        <h4><strong>Relive the Night</strong></h4>
                        <p>Hold onto your memories in an AI generated time capsule slideshow. Packed with highlights, stats, and unforgettable moments, all curated just for you.</p>
                    </span>
                    <span>
                    <img src={reliveGif} />
                    </span>
                </div>
            </section>

            <section class="project-section">
                <h2>Learnings</h2>
                <IconText
                    img={fileOrganisation}
                    title={<h4><strong>The necessity of File Organisation</strong></h4>}
                    description={
                        <p class="text-md">We encountered challenges locating and updating assets throughout development. Establishing a clear design system early on would have made components, variants, and styles easier to manage and iterate on.</p>
                    }
                />
                <IconText
                    img={componentUsage}
                    title={<h4><strong>Component Usage</strong></h4>}
                    description={
                        <p class="text-md">In early iterations, reused assets weren’t made into components, making updates time-consuming. Structuring each version on separate pages and using component instances, especially for interactions would have reduced clutter and streamlined the workflow.</p>
                    }
                />
            </section>        
        </div>
    );
}

export default Memento;