import React from 'react';
import { Link } from 'react-router-dom';
import mailIcon from '../images/mail_icon.png';
import linkedinIcon from '../images/linkedin_icon.png';
import githubIcon from '../images/github_icon.png';
import DividerLine from './DividerLine';
import {Divider} from "@heroui/divider";

function Footer(){
    return(
        <footer class = "project-section">
            {/* <DividerLine/> */}
            <Divider className="border-gray-400" />
            <div class = "footer-container">
                <h4 class = "grey-txt comfortaa">Logan Bondoc</h4>
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