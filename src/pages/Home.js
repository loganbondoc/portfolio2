import React from 'react';
import DesignWorks from "../components/DesignWorks.js"
import DevWorks from "../components/DevWorks.js"
import homeArt from '../images/home_art.png';

function Home(){
    return (
        // <div id = "hello">
        //     <h1 class = "blue-txt hidden">Hello!</h1>
        //     <h1 class = 'hidden'>My name is Logan Bondoc</h1>
        //     <img src={homeArt}></img>
        //     <h4 id = "scroll-prompt" class = "blue-text">Scroll down!</h4>
        //     {/* <section id = "i-am-spacer" class = "page-content">
        //         <div id="line" class="blue-line"></div>
        //     </section> */}
        //     <section id = "works" class = "page-content">
        //         <h1>Current Works</h1>
        //         <div id = "nav-line"></div>
        //         <CurrentWorks></CurrentWorks>
        //     </section>
        // </div>

        <div>
            <div class = "project-section intro">
                <span class = 'intro-text'>
                    <h1 class = "blue-txt comfortaa">Hello!</h1>
                    <h1 class = 'hidden comfortaa'>I'm Logan Bondoc</h1>
                    <div class = 'blue-line'></div>
                </span>
                <span class ="home-img">
                    <div>
                        <img src={homeArt} ></img>
                    </div>
                </span>
            </div>
            <section id = "works" class = "page-content">
                <h1 class = "comfortaa">Current Works</h1>
                <div id = "nav-line"></div>
                <DesignWorks></DesignWorks>
                <DevWorks></DevWorks>
            </section>
        </div>
        
    )

}

export default Home;