import React from 'react';
import CurrentWorks from "../components/CurrentWorks.js"

function Home(){
    return (
        <div id = "hello">
            <h1 class = "blue-txt hidden">Hello!</h1>
            <h1 class = 'hidden'>My name is Logan Bondoc</h1>
            <h4 id = "scroll-prompt" class = "blue-text">Scroll down!</h4>
            <section id = "i-am-spacer" class = "page-content">
                <div id="line" class="blue-line"></div>
            </section>
            <section id = "works" class = "page-content">
                <h1>Current Works</h1>
                <div id = "nav-line"></div>
                <CurrentWorks></CurrentWorks>
            </section>
        </div>
    )

}

export default Home;