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
import decisionMatrix from '../images/memento/decisionmatrix.png';
import moodBoard from '../images/memento/moodboard.png';

// Synthesis Images
import chrisStory from '../images/memento/artefacts/chris_storyboard.png';
import chrisMap from '../images/memento/artefacts/chris_journey_map.png';

// Testing Images
import thinkAloudIcon from '../images/memento/icons/think_aloud_icon.png';
import cognitiveWalkthroughIcon from '../images/memento/icons/cognitive_icon.png';
import cogOverloadIcon from '../images/memento/icons/overload_icon.png';
import personalisationIcon from '../images/memento/icons/personalisation_icon.png';
import loop11 from '../images/memento/loop11.png';
import heuristic from '../images/memento/heuristic_eval.png';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
            {/* Hero Banner Section */}
            <section className="flex justify-center">
                <img src={mementoBanner} alt="Memento Banner" className="rounded-2xl w-full max-w-6xl shadow-lg" />
            </section>

            {/* Overview Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900">Overview</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        For a class project on the theme of Lifestyle our team tackled the post-party blues, a relatable, emotional dip many young people face. We designed a mobile app to help users reconnect, reflect, and ease the comedown after social events.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Role</h3>
                        <p className="text-gray-600">
                            Product Designer: User Research, Interaction, Visual design, Prototyping & Testing
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Duration</h3>
                        <p className="text-gray-600">13 Weeks</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Sector</h3>
                        <p className="text-gray-600">Lifestyle, Leisure & Entertainment</p>
                    </div>
                </div>
            </section>

            {/* Problem Area Section */}
            <section className="space-y-6">
                <h3 className="text-3xl font-semibold text-gray-900 text-center">The Problem Area</h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>
                        Events are meant to be fun—and they are. But what happens after the lights go out? In a study of 28 brides, over half reported clinical levels of depression post-wedding. And they're not alone.
                    </p>
                    <p>Through interviews and audience insights, we uncovered a pattern amongst young people:</p>
                    <p>
                        Our research found that 95% of 18–25 year olds attend events like weddings, house parties, or concerts. Shockingly, 64% reported feeling impacted afterward, citing emotional, financial, and physical stress.
                    </p>
                    <p>This insight became the foundation of our design challenge:</p>
                </div>
            </section>

            {/* Design Challenge Section */}
            <section className="w-full bg-[#2E2E2E] text-white text-center py-20 rounded-2xl">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">
                        How might we create a digital experience that helps young people reconnect, reflect, and emotionally recover after social events?
                    </h2>
                </div>
            </section>

            <Divider />

            {/* Research Approach Section */}
            <section className="space-y-8">
                <h3 className="text-3xl font-semibold text-gray-900 text-center">Research Approach</h3>
                <div className="space-y-6">
                    <h4 className="text-xl text-gray-800 leading-relaxed">
                        Our design process for Memento, was based upon the double diamond method. Through this, we implemented phases of:
                    </h4>
                    <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700">
                        <li><strong>Discovering</strong> more about the chosen topic</li>
                        <li><strong>Defining</strong> the key issues that needed to be addressed</li>
                        <li><strong>Developing</strong> and ideating a key solution</li>
                        <li><strong>Delivering</strong> the solution to our target demographic</li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img className="rounded-2xl w-full max-w-4xl shadow-lg" src={doubleDiamond} alt="Double Diamond Process" />
                </div>
            </section>

            <Divider />

            {/* Secondary Research Section */}
            <section className="space-y-8">
                <h3 className="text-3xl font-semibold text-gray-900 text-center">Secondary Research</h3>
                <div className="space-y-8">
                    <h4 className="text-xl text-gray-800 leading-relaxed">
                        To begin our research, we conducted secondary research in the form of reviewing <strong>academic literature</strong>
                        to see what debriefing methods were currently available and <strong>SWOT Analysis</strong> to see where these forms
                        of recovery fall short.
                    </h4>
                    
                    <h4 className="text-xl font-semibold text-gray-900">We found that:</h4>
                    
                    <div className="space-y-6">
                        <IconText
                            img={recoveryIcon}
                            title={<h4 className="text-xl font-semibold text-gray-900">Current recovery methods include:</h4>}
                            description={
                                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                                    <li>Jounalling thoughts and feelings</li>
                                    <li>Hosting Debriefing parties both online and in-person to facilitate reconnection</li>
                                </ul>
                            }
                        />
                        <IconText
                            img={reconnectIcon}
                            title={<h4 className="text-xl font-semibold text-gray-900">Reconnecting with friends and loved ones after an event:</h4>}
                            description={
                                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                                    <li>Relies on their availability and understanding</li>
                                    <li>Is restricted by a social stigma, causing hesitation to open up</li>
                                </ul>
                            }
                        />
                    </div>

                    <h4 className="text-xl font-semibold text-gray-900 text-center">We still had some questions though, and used them to drive our primary research</h4>
                    
                    <div className="space-y-6">
                        <IconText
                            img={shyIcon}
                            title={""}
                            description={
                                <h4 className="text-lg text-gray-700">How does the presence of <strong>shyness or sociability</strong> influence the experience
                                    of post-party blues and the <strong>effectiveness</strong> of existing strategies?</h4>
                            }
                        />
                        <IconText
                            img={debriefIcon}
                            title={""}
                            description={
                                <h4 className="text-lg text-gray-700">How and why are young people engaging in <strong>social debriefing</strong>
                                    sessions with their friends after events?</h4>
                            }
                        />
                        <IconText
                            img={thoughtsIcon}
                            title={""}
                            description={
                                <h4 className="text-lg text-gray-700">What kind of <strong>negative thoughts</strong> and feelings are young people having
                                    <strong> after</strong> a festive season, event or party?</h4>
                            }
                        />
                    </div>
                </div>
            </section>

            <Divider />

            {/* Primary Research Section */}
            <section className="space-y-8">
                <h3 className="text-3xl font-semibold text-gray-900 text-center">Primary Research</h3>
                <h4 className="text-xl text-gray-800 text-center leading-relaxed">
                    Our Primary Research used a <strong>triangulation approach</strong> to balance the weaknesses between each research method
                </h4>
                <div className="flex justify-center">
                    <img src={triangulation} alt="Triangulation Approach" className="rounded-2xl w-full max-w-4xl shadow-lg" />
                </div>
            </section>

            {/* Affinity Mapping Section */}
            <section className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h4 className="text-xl text-gray-800 leading-relaxed">With all the data we collated, we grouped our findings using Affinity Mapping.</h4>
                        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                            <li><strong>167</strong> pieces of user data</li>
                            <li><strong>16</strong> key insights</li>
                            <li>Categorised into <strong>5</strong> overarching themes</li>
                        </ul>
                        <h4 className="text-lg text-gray-700 leading-relaxed">
                            This allowed us to group <strong>common concepts</strong> and find <strong>themes</strong> in the experiences of young
                            people that we could <strong>refer back to</strong> throughout the design process.
                        </h4>
                    </div>
                    <CustomZoom
                        img={researchAffinity}
                        alt="Research Affinity Map"
                    />
                </div>
            </section>

            <Divider />

            {/* Key User Insights Section */}
            <section className="space-y-12">
                <h3 className="text-3xl font-semibold text-gray-900 text-center">Key User Insights</h3>
                <div className="space-y-8">
                    <IconText
                        img={societyIcon}
                        title={<h4 className="text-xl font-semibold text-gray-900">Societal pressure</h4>}
                        description={<h4 className="text-lg text-gray-700 leading-relaxed">
                            There is an expectation to sustain productivity, maintain appearances
                            and update others on activity whilst experiencing post-event emotions.
                        </h4>}
                    />
                    <IconText
                        img={routineIcon}
                        title={<h4 className="text-xl font-semibold text-gray-900">Returning to routine</h4>}
                        description={<h4 className="text-lg text-gray-700 leading-relaxed">
                            Experiencing a highly anticipated, fun and active event following a sudden shift back
                            into a normal routine can lead to individuals feeling discontentment and losing their sense of purpose
                        </h4>}
                    />
                    <IconText
                        img={indivRecoveryIcon}
                        title={<h4 className="text-xl font-semibold text-gray-900">Individual Recovery</h4>}
                        description={<h4 className="text-lg text-gray-700 leading-relaxed">
                            Individuals resort to a balance of solitary outlets productive routines that
                            assist in overcoming their negative post-event emotions.
                        </h4>}
                    />
                    <IconText
                        img={socialIcon}
                        title={<h4 className="text-xl font-semibold text-gray-900">Social Reconnection</h4>}
                        description={<h4 className="text-lg text-gray-700 leading-relaxed">
                            Human interaction is vital during the post-event phase. Young people connect with each other through
                            storytelling and expression, countering feelings of isolation and disconnection.
                        </h4>}
                    />
                    <IconText
                        img={memoryIcon}
                        title={<h4 className="text-xl font-semibold text-gray-900">Memory Preservation</h4>}
                        description={<h4 className="text-lg text-gray-700 leading-relaxed">
                            Preserving the memories of an event can reduce the abrupt "morning-after" emotions of anxiety.
                            Examples of this include revisiting photos, listening to the same music or replicating the setting to keep the memory alive.
                        </h4>}
                    />
                </div>
            </section>

            {/* Problem Statement Section */}
            <section className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 text-center">To encapsulate all these findings we created the following problem statement</h4>
                <div className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-xl text-gray-800 leading-relaxed italic">
                        "Young people often experience post-event effects of nostalgia,
                        emptiness and social fatigue. These feelings are exacerbated by common
                        tendencies to suppress emotions or to be productive in the aftermath of these events.
                        Despite the abundance of post-event recovery methods, there is still an existing
                        struggle to debrief and preserve memories from events."
                    </h3>
                </div>
            </section>

            {/* Synthesising Data Section */}
            <section className="space-y-8">
                <h3 className="text-3xl font-semibold text-gray-900 text-center">Synthesising the Data</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-gray-900">Persona Data Sheet</h4>
                        <h4 className="text-lg text-gray-700 leading-relaxed">
                            To gain a better understanding of our user base, we utilised a <strong>data sheet</strong> to group interviewees,
                            which acted as a structure to the personas we developed as we derived characteristics
                            from the clumps.
                        </h4>
                        <h4 className="text-xl font-semibold text-gray-900">From Clumps to Personas</h4>
                        <h4 className="text-lg text-gray-700 leading-relaxed">
                            We identified <strong>two extroverted personas</strong> and <strong>one introverted persona</strong> based on shared
                            characteristics from our interviews. To refine our insights further, we categorized them by
                            their preferred event types—<strong>travel, concerts, or parties</strong>—reflecting the
                            experiences they spoke about most.
                        </h4>
                    </div>
                    <CustomZoom
                        img={datasheet}
                        alt="Persona Data Sheet"
                    />
                </div>
            </section>

            {/* Personas Section */}
            <section className="space-y-8">
                <h3 className="text-3xl font-semibold text-gray-900 text-center">Meet our Personas</h3>
                <EmblaCarousel slides={personaImages} options={{dragFree: true, loop: true}}/>
                
                <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900">User Journey Mapping</h4>
                    <h4 className="text-lg text-gray-700 leading-relaxed">
                        We then used user journey mapping to break down <strong>key interactions</strong> and
                        identify <strong>pain points</strong> throughout the Post-Party process.
                    </h4>
                    <h4 className="text-xl font-semibold text-gray-900">Storyboarding</h4>
                    <h4 className="text-lg text-gray-700 leading-relaxed">
                        Storyboarding helped <strong>visualise</strong> real and potential user interactions, making it easier to
                        <strong> spot issues</strong> and align <strong>design decisions</strong> early.
                    </h4>
                </div>
                <EmblaCarousel slides={storyImages} options={{dragFree: true, loop: true}}/>
            </section>

            {/* Development Section */}
            <section className="space-y-8">
                <h3 className="text-3xl font-semibold text-gray-900 text-center">Development</h3>
                <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900">Ideation Process</h4>
                    <h4 className="text-lg text-gray-700 leading-relaxed">
                        To generate a diverse range of solutions, our team explored ideas independently, each focusing
                        on a different persona and applying unique ideation methods. This approach allowed us to
                        address <strong>varying user needs</strong> and uncover a broader set of <strong>design possibilities.</strong>
                    </h4>
                </div>
                <EmblaCarousel slides={ideaImages} options={{dragFree: true, loop: true}}/>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-gray-900">Decision Matrix</h4>
                        <h4 className="text-lg text-gray-700 leading-relaxed">
                            We used a decision matrix to evaluate each concept against <strong>key criteria,</strong> prioritizing
                            features based on the design brief, relevance to Post Party Effects,
                            and personal interest.
                        </h4>
                        <h4 className="text-xl font-semibold text-gray-900">Results</h4>
                        <h4 className="text-lg text-gray-700 leading-relaxed">
                            Museum stood out for its <strong>media centralisation</strong> and <strong>event organisation,</strong> while Stash and
                            Memory faced accessibility and audience fit challenges. To address Museum's
                            <strong> lack of creative liberty</strong>, we added Memory's scrapbooking for creativity. We
                            also integrated Stash's AI parallax effect for better post-event interactions,
                            making it more <strong>engaging</strong> for young partygoers.
                        </h4>
                    </div>
                    <CustomZoom
                        img={decisionMatrix}
                        alt="Decision Matrix"
                    />
                </div>
            </section>

            {/* Meet Memento Section */}
            <section className="space-y-8">
                <h4 className="text-3xl font-semibold text-gray-900 text-center">Meet Memento</h4>
                <h4 className="text-lg text-gray-700 leading-relaxed text-center">
                    With iterations to the design, Museum evolved into Memento, a platform designed for <strong>centralized
                    media sharing</strong> before, during, and after events. By introducing Memos, users can engage in
                    real-time interactions while fostering post-event reconnection through <strong>dynamic social features.</strong>
                </h4>
                <div className="flex justify-center">
                    <img src={mementoDiagram} alt="Memento Diagram" className="rounded-2xl w-full max-w-4xl shadow-lg" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-gray-900">Moodboard & Branding</h4>
                        <h4 className="text-lg text-gray-700 leading-relaxed">
                            Originally, our primary colours were orange and blue, associated with <strong>optimism and warmth</strong>,
                            which encourages users in their Post Event phase.
                        </h4>
                        <h4 className="text-lg text-gray-700 leading-relaxed">
                            These colours would be accompanied with a scrapbooking aesthetic to provide a more <strong>personal touch</strong> to the application
                        </h4>
                    </div>
                    <CustomZoom
                        img={moodBoard}
                        alt="Moodboard"
                    />
                </div>
            </section>

            <Divider />

            {/* Development Diagram */}
            <section className="flex justify-center">
                <img src={devDiagram} alt="Development Diagram" className="rounded-2xl w-full max-w-6xl shadow-lg" />
            </section>

            {/* Wireframes Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">Wireframes</h2>
                <h4 className="text-lg text-gray-700 leading-relaxed text-center">
                    With all our features established, we laid out how they would be translated to a screen setting
                    using wireframes. This would provide a base layout, with usability and ethical considerations
                    being the main focus of this phase.
                </h4>
                <EmblaCarousel slides={wireframeImages} options={{dragFree: true, loop: true}}/>
            </section>

            {/* Mid-Fi Prototypes Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">Mid-Fi Prototypes</h2>
                <h4 className="text-lg text-gray-700 leading-relaxed text-center">
                    After gathering informal peer feedback, we began to further refine our designs. Giving the
                    prototypes basic functionality as well as clarifying critical information.
                </h4>
                <EmblaCarousel slides={midfiImages} options={{dragFree: true, loop: true}}/>
            </section>

            {/* User Testing Round 1 Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">User Testing Round 1</h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                    For the first round of testing, we used <strong>three distinct methods</strong> to assess usability on static Figma screens. We also structured the application into <strong>three separate flows</strong>, each focusing on a key aspect of the experience and being tested using every method. This was to ensure that <strong>user engagement</strong> was maintained, as a long test could impact the accuracy of results.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <div className="text-center space-y-4">
                        <CustomZoom img={thinkAloud} alt="Think Aloud Testing" />
                        <h4 className="text-xl font-semibold text-gray-900">Think Alouds</h4>
                        <p className="text-gray-700">
                            Conducted on 5 general users to identify usability issues. Quick fixes were addressed in this phase.
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <CustomZoom img={cognitiveWalkthrough} alt="Cognitive Walkthrough" />
                        <h4 className="text-xl font-semibold text-gray-900">Cognitive Walkthroughs</h4>
                        <p className="text-gray-700">
                            Run with 10 experts to uncover deeper, design-focused usability concerns.
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <CustomZoom img={sus} alt="System Usability Scale" />
                        <h4 className="text-xl font-semibold text-gray-900">System Usability Scale (SUS)</h4>
                        <p className="text-gray-700">
                            Completed by all 15 participants to capture quantitative insights on usability.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <IconText
                        img={thinkAloudIcon}
                        title={<h4 className="text-xl font-semibold text-gray-900">Think Alouds Testing + System Usability Scale (SUS)</h4>}
                        description={
                            <h4 className="text-lg text-gray-700">We first conducted testing on general users of the application, to identify any glaring issues</h4>
                        }
                    />
                    <IconText
                        img={cognitiveWalkthroughIcon}
                        title={<h4 className="text-xl font-semibold text-gray-900">Cognitive Walkthroughs</h4>}
                        description={
                            <h4 className="text-lg text-gray-700">By doing it this way, we ensured that the glaring issues wouldn't be repeated within the Cognitive Walkthroughs, while also gathering a broad range of perspectives.</h4>
                        }
                    />
                </div>
            </section>

            {/* Synthesising Results Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">Synthesising Results</h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                    Following testing, two different methods were used for data analysis and iteration planning
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <CustomZoom
                            img={testingAffinity}
                            alt="Testing Affinity Map"
                        />
                        <h4 className="text-xl font-semibold text-gray-900">Affinity Mapping</h4>
                        <h4 className="text-lg text-gray-700 leading-relaxed">
                            Affinity Diagramming was used to identify our findings under the six usability goals, to better categorise and identify lacking areas.
                        </h4>
                    </div>
                    <div className="space-y-4">
                        <CustomZoom
                            img={usabilityTable1}
                            alt="Usability Table"
                        />
                        <h4 className="text-xl font-semibold text-gray-900">Usability insights table</h4>
                        <h4 className="text-lg text-gray-700 leading-relaxed">
                            We used a usability insights table to analyze findings and prioritize feature improvements, combining both qualitative and quantitative data for evaluation.
                        </h4>
                    </div>
                </div>
            </section>

            {/* Findings and Iterations Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">Findings and Iterations</h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                    Using our data synthesis methods, multiple usability issues with our prototype had been identified. However two issues achieved a high severity rating within the insights table. These issues were then addressed in our High Fidelity iterations.
                </p>
                
                <div className="space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <IconText
                            img={cogOverloadIcon}
                            title={<h4 className="text-xl font-semibold text-gray-900">Cognitive Overload in Iconography</h4>}
                            description={
                                <h4 className="text-lg text-gray-700 leading-relaxed">
                                    As shown by our SUS results users had difficulty in identifying icons in the create menu, highlighting a need for "Technical Support". To remedy this, we implemented an onboarding tutorial when first using the app, to clarify any confusion.
                                </h4>
                            }
                        />
                        <CustomZoom
                            img={onboarding}
                            alt="Onboarding Tutorial"
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <IconText
                            img={personalisationIcon}
                            title={<h4 className="text-xl font-semibold text-gray-900">More Personalisation</h4>}
                            description={
                                <h4 className="text-lg text-gray-700 leading-relaxed">
                                    Experts in cognitive walkthroughs identified a lack of personalisation options for their event pages. So we integrated adjustable text colours, background textures and added more font options.
                                </h4>
                            }
                        />
                        <CustomZoom
                            img={customisation}
                            alt="Customisation Options"
                        />
                    </div>
                </div>
            </section>

            {/* Hi-Fi Prototypes Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">Hi-Fi Prototypes</h2>
                <EmblaCarousel slides={hifiImages} options={{dragFree: true, loop: true}}/>
            </section>

            {/* Design Crisis Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">Memento's Design Crisis</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                        User feedback from Think-Aloud testing revealed a <strong>major branding misalignment</strong>. The original color scheme, meant to feel warm and optimistic, instead gave off an <strong>"outdated grandma feel"</strong>, missing the mark for our young audience.
                    </p>
                    <p>
                        To fix this, we completely reworked Memento's branding. We shifted to a high-contrast black-and-white palette with bright blue and green accents, embracing an <strong>early 2000s aesthetic</strong> that resonates with our users. Lowercase headings and increased emoji use added a more casual, playful tone, making the app feel modern, relatable, and fun.
                    </p>
                </div>
                <div className="flex justify-center">
                    <CustomZoom
                        img={transformation}
                        alt="Brand Transformation"
                    />
                </div>
            </section>

            {/* User Testing Round 2 Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">User Testing Round 2</h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                    For the second round of user testing, <strong>14 key features</strong> of Memento were divided among <strong>4 user testing sessions</strong>. Specific features such as "Filter by Faces" and "Create Event" were tested within <strong>multiple</strong> testing sessions for the purpose of gaining deeper insights.
                </p>
                
                <div className="space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-gray-900">Heuristic Evaluations</h4>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                This approach allowed us to collect qualitative insights through user self-reporting and discussions while also gathering quantitative severity ratings (0-4) to assess usability issues. These findings not only informed whether Memento was ready for release but also guided our synthesis and iteration process to refine the platform.
                            </p>
                        </div>
                        <CustomZoom
                            img={heuristic}
                            alt="Heuristic Evaluation"
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-gray-900">Loop11 Unmoderated Testing</h4>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                This approach allowed us to collect qualitative insights through user self-reporting and discussions while also gathering quantitative severity ratings (0-4) to assess usability issues. These findings not only informed whether Memento was ready for release but also guided our synthesis and iteration process to refine the platform.
                            </p>
                        </div>
                        <CustomZoom
                            img={loop11}
                            alt="Loop11 Testing"
                        />
                    </div>
                </div>
            </section>

            {/* More Iterations Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">More iterations</h2>
                <h4 className="text-lg text-gray-700 leading-relaxed text-center">
                    Through the extensive testing conducted on our interactive prototype, we had made 18 changes, big and small, to Memento. The most notable however was users who struggled to navigate a clustered event page:
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-gray-900">Latch Principle</h4>
                        <h4 className="text-lg text-gray-700 leading-relaxed">
                            To address this, we utilised the LATCH Principle, which organises sorts data by either: Location, Alphabet, Time, Category and Heirachy. Hence, we implemented it through the a new sorting and filter dropdown, which allowed users to sort memos by time and filter by category of the memo (ie. notes, polls, links).
                        </h4>
                    </div>
                    <CustomZoom
                        img={latch}
                        alt="LATCH Principle"
                    />
                </div>
            </section>

            {/* Introducing Memento Section */}
            <section className="bg-black text-white rounded-2xl p-12 space-y-12 w-min-full">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-semibold">Introducing Memento</h2>
                    <p className="text-xl">Why just reminisce about events when can relive them, prolong them and anticipate future ones?</p>
                </div>
                
                <div className="space-y-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h4 className="text-2xl font-semibold">Invite</h4>
                            <p className="text-lg leading-relaxed">
                                Build the hype by inviting friends and family into your Memento. Set the stage and start the countdown to your next big event.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img src={inviteGif} alt="Invite Feature" className="rounded-lg" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h4 className="text-2xl font-semibold">Share the Moment</h4>
                            <p className="text-lg leading-relaxed">Polls, playlists, photos, videos, and more. All in one place for everyone to enjoy.</p>
                        </div>
                        <div className="flex justify-center">
                            <img src={shareGif} alt="Share Feature" className="rounded-lg" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h4 className="text-2xl font-semibold">React</h4>
                            <p className="text-lg leading-relaxed">
                                Keep the good vibes going during and after an event by reacting to posts and showing some love. With our ReactMoji feature, respond to memos using real-time photos of yourself for a more personal touch.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img src={mojiGif} alt="React Feature" className="rounded-lg" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h4 className="text-2xl font-semibold">Relive the Night</h4>
                            <p className="text-lg leading-relaxed">
                                Hold onto your memories in an AI generated time capsule slideshow. Packed with highlights, stats, and unforgettable moments, all curated just for you.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img src={reliveGif} alt="Relive Feature" className="rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Learnings Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 text-center">Learnings</h2>
                <div className="space-y-8">
                    <IconText
                        img={fileOrganisation}
                        title={<h4 className="text-xl font-semibold text-gray-900">The Necessity of File Organisation</h4>}
                        description={
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We encountered challenges locating and updating assets throughout development. Establishing a clear design system early on would have made components, variants, and styles easier to manage and iterate on.
                            </p>
                        }
                    />
                    <IconText
                        img={componentUsage}
                        title={<h4 className="text-xl font-semibold text-gray-900">Component Usage</h4>}
                        description={
                            <p className="text-lg text-gray-700 leading-relaxed">
                                In early iterations, reused assets weren't made into components, making updates time-consuming. Structuring each version on separate pages and using component instances, especially for interactions would have reduced clutter and streamlined the workflow.
                            </p>
                        }
                    />
                </div>
            </section>        
        </div>
    );
}

export default Memento;