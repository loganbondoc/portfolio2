import React from 'react';
import { Link } from 'react-router-dom';
import {Divider} from "@heroui/divider";
import logo from '../images/lb_logo 2.0.svg';
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/navbar";

function Nav() {
  return (
    // <nav>
    //   <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.21 165.27">
    //     <defs>
    //       <style>{`.cls-1{font-size:106.37px;font-family:Comfortaa-Medium, Comfortaa;font-weight:500;}`}</style>
    //     </defs>
    //     <g id="Text">
    //       <text className="cls-1" transform="translate(0 94.73)">L</text>
    //       <text className="cls-1" transform="translate(36.32 134.53)">B</text>
    //     </g>
    //   </svg>
    //   <ul className="nav-list">
    //     <div id="nav-line"></div>
    //     <li><a href="./#CurrentWorks"><h3 class = "body">Works</h3></a></li>
    //     <li><Link to={`/resume`}><h3 class = "body">Resume</h3></Link></li>
    //     <li><a href="mailto:loganbondoc@gmail.com"><h3 class = "body">Contact</h3></a></li>
    //   </ul>
    // </nav>
      <Navbar shouldHideOnScroll className="flex items-center justify-center w-full">
      {/* Navbar Brand (Logo) */}
        <NavbarBrand justify="start">
          <img src={logo} alt="Logo" className="h-10 mx-4"/> {/* Adjust height */}
        </NavbarBrand>
        <Divider/>
        {/* Navbar Content (Links) */}
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem className="hidden lg:flex">
            <a href="./#CurrentWorks" className="text-lg hover:text-primary">
              Works
            </a>
          </NavbarItem>
          <NavbarItem>
            <a href="/resume" className="text-lg hover:text-primary">
              Resume
            </a>
          </NavbarItem>
          <NavbarItem>
            <a href="mailto:loganbondoc@gmail.com" className="text-lg hover:text-primary">
              Contact
            </a>
          </NavbarItem>
        </NavbarContent>
    </Navbar> 
  );
}

export default Nav;
