import React from 'react';
import { Link } from 'react-router-dom';
import mailIcon from '../images/mail_icon.png';
import linkedinIcon from '../images/linkedin_icon.png';
import githubIcon from '../images/github_icon.png';

function Footer(){
    return(
        <footer class = "project-section">
            <div id="nav-line"></div>
            <div class = "footer-container">
                <h4 class = "grey-txt">Logan Bondoc</h4>
                <span class = "contact-container">
                    <div class = 'con-icon-container'>
                        <a href = 'mailto:loganbondoc@gmail.com'><img src = {mailIcon}></img></a>
                    </div>
                    <div class = 'con-icon-container'>
                        <a href = 'https://www.linkedin.com/in/logan-bondoc/'><img src = {linkedinIcon}></img></a>
                    </div>
                    <div class = 'con-icon-container'>
                        <a href = 'https://github.com/loganbondoc'><img src = {githubIcon}></img></a>
                    </div>
                </span>
            </div>
        </footer>
    )
}
export default Footer;