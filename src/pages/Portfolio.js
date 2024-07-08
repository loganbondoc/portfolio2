import React, { useEffect } from 'react';

// images
import portfolioBanner from '../images/portfolio/portfolio_banner.png';
import designThinking from '../images/portfolio/design_thinking.png';
import skillsIcon from '../images/portfolio/skills_icon.png';
import storyIcon from '../images/portfolio/story_icon.png';
import youIcon from '../images/portfolio/you_icon.png';
import moodboard from '../images/portfolio/moodboard.png';
import sitemap from '../images/portfolio/sitemap.png';
import sketch1 from '../images/portfolio/sketch1.png';
import sketch2 from '../images/portfolio/sketch2.png';
import mockup1 from '../images/portfolio/mockup1.png';
import mockup2 from '../images/portfolio/mockup2.png';
import mockup3 from '../images/portfolio/mockup3.png';
import mockup4 from '../images/portfolio/mockup4.png';
import mockup5 from '../images/portfolio/mockup5.png';
import mockup6 from '../images/portfolio/mockup6.png';
import adjustments from '../images/portfolio/adjustments.png'
import personalityIcon from '../images/portfolio/personality_icon.png';
import clutterIcon from '../images/portfolio/clutter_icon.png';
import messyIcon from '../images/portfolio/messy_icon.png';
import components from '../images/portfolio/components.png';
import materialise from '../images/portfolio/materialise.png';
import demo1 from '../images/portfolio/portfolio_FINAL_1.gif';
import thematic from '../images/portfolio/thematic.png';
import workshops from '../images/portfolio/workshops.png';
import lessIcon from '../images/portfolio/less_icon.png';
import mindIcon from '../images/portfolio/mind_icon.png';
import mockup7 from '../images/portfolio/mockup7.png';
import mockup8 from '../images/portfolio/mockup8.png';
import mockup9 from '../images/portfolio/mockup9.png';
import roadmap from '../images/portfolio/roadmap.png';
import homeArt from '../images/home_art.png';

// Components
import IconText from '../components/IconText.js'
import CustomCarousel from '../components/CustomCarousel.js';
import Carousel from 'react-bootstrap/Carousel';
import CustomZoom from '../components/CustomZoom.js';


function Portfolio(){
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the screen when component mounts
      }, []);
    
    const sketchImages = [
        sketch1,
        sketch2,
    ];

    const mockupImages = [
        mockup1,
        mockup2,
        mockup3,
        mockup4,
        mockup5,
        mockup6,
    ]

    const mockupImages2 = [
        homeArt,
        mockup7,
        mockup8,
        mockup9,
    ]
    
    return(
        <div>
            <section class = "project-section">
                <div className = "banner-container">
                    <img src={portfolioBanner} alt="" className="banner"></img>
                </div>
            </section>
            <section class = "project-section">
                <div>
                    <h1>Portfolio Website</h1>
                    <h3>A case study of the website you’re looking at? Kind of meta.</h3>
                </div>
                <div>
                    <h3>Role</h3>
                    <h4>Product Designer & Front-End Developer: Interaction Design, Visual design, Prototyping, User Testing, Development</h4>
                </div>
                <div>
                    <h3>Sector</h3>
                    <h4>Technology and Digital Media</h4>
                </div>
                <div>
                    <h3>Overview</h3>
                    <h4>The process of how my portfolio has developed to its current state has been a process of tweaking and refining, driven by design thinking and my passion for development. This case study outlines its evolution, from a static website to an intricate web application and the user-centered considerations behind them.</h4>
                </div>
                <div class = "nav-line"></div>
            </section>
            <section class = "project-section">
                <h3>Key aims of project</h3>
                <h4>
                    To offer a user-friendly and interactive platform for individuals to explore and review case studies and personal projects.
                    To further develop skills in front-end technologies, particularly within the field of frameworks such as React and Bootstrap, as well as including interactive and engaging visuals.
                </h4>
            </section>
            <section class = "project-section">
                <h2>The Design Process</h2>
                <h4>Our design process for this website, was a design thinking approach, which focused on iterative stages of research, ideation and development. Through this,  I implemented phases of: 
                Understanding the key user needs and base requirements of a successful portfolio website
                Exploring solutions through wire framing and mock-ups, as well as ideating the aesthetic and branding 
                Materialising the website utilising front-end web technologies for development</h4>
            </section>
            <section class = "project-section">
                <div class = "centered-image-container">
                    <img class = "centered-image" src = {designThinking}></img>
                </div>
            </section>

            <section class = "project-section">
                <h3>Understand</h3>
                <h4>To begin, I conducted secondary research by examining other UX portfolios to answer the question: What should a portfolio do?</h4>
                <div class = 'icon-container'>
                    <IconText 
                        img = {skillsIcon}
                        title = "Showcase your skills"
                        description = "A portfolio should demonstrate your expertise in the creative realm. A clean aesthetic and well thought out website should show that you can apply those skills in a real-world situation."
                    />
                    <IconText 
                        img = {youIcon}
                        title = "Be a representation of you"
                        description = "Give your portfolio some personality. It should tell viewers who you are as a designer, where your passions lie and show off your creative flair."
                    />
                    <IconText 
                        img = {storyIcon}
                        title = "Tell a story"
                        description = "Your case studies should speak volumes about what your approach is to a design problem, all while keeping the reader engaged with plenty of artefacts and visuals."
                    />
                </div>
            </section>

            <section class = "project-section">
                <h3>Explore</h3>
                <h4>With the requirements of what my portfolio needed established, I began to develop artefacts that would act as guides throughout the development process.</h4>
                <div class = "side-side-container">
                    <span>
                        <h4>Moodboard</h4>
                        <h4>What says more about you than your favourite colour? Deciding upon tones of blue as well as following a whiteboard/digitally drawn aesthetic, I aimed to add some creative flair to the website, as well as maintaining a simplistic aesthetic that was easy on the eyes.</h4>
                    </span>
                    <CustomZoom
                        img={moodboard}
                        alt=""
                    /> 
                </div>
                <div class = "side-side-container">
                    <span>
                        <h4>Sitemap</h4>
                        <h4>Through reviewing many other design portfolios, I found commonalities of their key features, which were to show off projects in the form of case studies, a page dedicated a brief overview of the individual’s resume, as well as a final emphasis on how to contact the designer. </h4>
                    </span>
                    <CustomZoom
                        img={sitemap}
                        alt=""
                    />
                </div>
            </section>
            
            <section class = "project-section">
                <h4>Then I began to sketch potential layout formations for the website, focusing upon the main storyboard for the animation I planned to create,  as well as how I would present my case studies.</h4>
                <CustomCarousel
                    images = {sketchImages}
                />
            </section>

            <section class = "project-section">
            <h4>These sketches were then converted into mock-up designs, which incorporated the aesthetic established in the moodboard and gave the website more personality.</h4>
                <CustomCarousel
                    images = {mockupImages}
                />
            </section>

            <section class = "project-section">
                <div class = "side-side-container">
                    <div>
                        <h3>Materialise</h3>
                        <h4>As a challenge to myself, instead of utilising services such as Webflow or Squarespace, I decided to create my portfolio website utilising HTML, CSS and Javascript.</h4>
                        <h4>For styling I used SCSS for its adaptability through the utilisation of variables and nesting to write cleaner and more readable code.</h4>
                        <h4>The SCSS styling directory was structured utilising a variation of the 7-1 Pattern by Hugo Giraudel, which allowed for easy separation and access to different styling aspects as opposed to having a single, clustered CSS file.</h4>
                        <h4>Throughout the development process, I utilised the Express.js framework for the back-end local hosting and Parcel.js for the purpose of hot-reloading, so that I could see my changes in real time.</h4>
                        <h4>To play into the storytelling aspect, I decided to utilise animations to create a more compelling narrative. To do this I utilised the animation library Director.js, in combination with Intersection Observers, which triggered onscreen tweens based upon which HTML Elements were currently on the user’s screen.</h4>
                    </div>
                    <CustomZoom
                        img={materialise}
                        alt=""
                    />
                </div>
            </section>

            <section class = "project-section">
                <h3>The First Iteration</h3>
                <h4>View the code <a href = "https://github.com/loganbondoc/portfolio"> here</a></h4>
                <div class = "centered-image-container">
                    <img class = "centered-image" src = {demo1}></img>
                </div>
            </section>

            <section class = "project-section">
                <h2>With my first year of university coming to an end, and my skills as a developer and designer growing. I decided that my portfolio was in a desperate need of a rework.</h2>
            </section>

            <section class = "project-section">
                <h3>Understand</h3>
                <h4>To begin the redesign, I referred back to the Design Thinking approach where I would try to empathise with users for the shortcomings of my website, and define its key issues.</h4>
                <div class = "side-side-container">
                    <span>
                        <h4>Interviews and Thematic Analysis</h4>
                        <h4>To do this I conducted 3 semi-structured interviews on fellow UX designers, and synthesised the feedback using thematic analysis.</h4>
                    </span>
                    <CustomZoom
                            img={thematic}
                            alt=""
                        />
                </div>
                <div class = "side-side-container">
                    <span>
                        <h4>Attending Events</h4>
                        <h4>And attended Canva's Level Up Design Portfolio Workshop as well as hosted SUEDE's Annual Portfolio in collaboration with Atlassian. This way I could hear from recruiters about what they specifically look for in a portfolio</h4>
                    </span>
                    <CustomZoom
                            img={workshops}
                            alt=""
                        />
                </div>
            </section>

            <section class = "project-section">
                <h4>From my research I found the key issues associated with my portfolio.</h4>
                <div>
                    <IconText 
                        img = {personalityIcon}
                        title = "Lack of Personality"
                        description = "Users commented on a lack of personal touch. The website didn’t reflect myself as a person and was likened to a slide show presentation. From the Canva presentation I learnt that a “portfolio should be like your digital fingerprint”"
                    />
                    <IconText 
                        img = {clutterIcon}
                        title = "Case Study Clutter"
                        description = "The “works” section was very limited in space, and provided a very shallow overview of the projects I was showcasing. It needed to be reworked to improve readability and a more extensive outline of my work."
                    />
                    <IconText 
                        img = {messyIcon}
                        title = "Messy Code"
                        description = "The use of the Director.js library, as well as the large amount of intersection observers resulted in the script.js file becoming cluttered and having a lot of repeated code. It required optimisation."
                    />
                </div>
            </section>

            <section class = "project-section">
                <h3>Explore</h3>
                <h4>With the defined issues of the website, it was time to delegate which changes would be made. Through careful consideration I had decided upon the adjustments that would be made:</h4>
                <div class = "centered-image-container">
                    <img class = "centered-image" src = {adjustments}></img>
                </div>
            </section>

            <section class = "project-section">
                <h4>Henceforth, with myself enjoying vector-based art, I had created a new artwork in Adobe Illustrator to replace the previous animation. Mock-ups were then created to provide a base design that I would later attempt to implement utilising the React framework.</h4>
                <CustomCarousel
                    images = {mockupImages2}
                />
            </section>

            <section class = "project-section">
                <h4>While completing my case studies, I developed consistent design patterns to later implement into React Components, which would allow for more concise and reusable code.</h4>
                <div class = "centered-image-container">
                    <img class = "centered-image" src = {components}></img>
                </div>
            </section>

            <section class = "project-section">
                <h3>Materialise</h3>
                <h4>View the code <a href = "https://github.com/loganbondoc/portfolio2"> here</a></h4>
                <div class = "centered-image-container">
                    <img class = "centered-image" src = {roadmap}></img>
                </div>
            </section>

            <section class = "project-section">
                <h3>Learnings</h3>
                <div>
                    <IconText 
                        img = {lessIcon}
                        title = "Sometimes less is more"
                        description = "It’s good to have ambitions and big goals, but overcomplicating a task through complex and cluttered designs that aren’t done to a high standard makes the whole project look bad. Simplicity and a clean design makes a website look more polished and refined."
                    />
                    <IconText 
                        img = {mindIcon}
                        title = "Keep an open mind"
                        description = "It is ok to scrap ideas or try things from a different approach. I found it particularly difficult to give up on the large introductory animation, but simplifying the website made for a more clean and aesthetic design"
                    />
                </div>
            </section>
        </div>
    );
}

export default Portfolio;