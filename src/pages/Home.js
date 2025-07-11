import React, { useState } from "react";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import parallaxBg2 from "../images/parallax_bg2.png";
import mementoImg from "../images/memento_work.png";
import portfolioImg from "../images/portfolio_work.png";
import urTripImg from "../images/urtrip_work.png";
import homeArt from "../images/home_art.png";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";


// components
import ShowReelWork from "../components/WorkShowReel";

// showreel videos
import mementoShowreel from "../videos/memento_showreel.mp4";
import urTripShowreel from "../videos/urtrip_showreel.mp4";
import pathwayCabinetShowreel from "../videos/pathwaycabinet_showreel.mp4";

const projects = [
  {
    id: "memento",
    title: "Memento",
    description: "Your Moments Forever",
    category: "Design",
    image: mementoImg,
    path: "/memento",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "A Case Study for This Website",
    category: "Development",
    image: portfolioImg,
    path: "/portfolio",
  },
  {
    id: "urtrip",
    title: "UrTrip",
    description: "Making travel planning more personal",
    category: "Development",
    image: urTripImg,
    path: "/urtrip",
  },
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  // Track scroll progress
  const { scrollYProgress } = useScroll();

  // Adjust parallax speed (change -30% to -50% for faster effect)
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-900%"]);

  // Smooth out motion
  const smoothYTransform = useSpring(yTransform, {
    stiffness: 100,
    damping: 20,
  });

  const categories = [
    { id: "all", label: "All" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "others", label: "Others" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* 🔵 Parallax Background Inside Home Page (Not Affecting Other Pages) */}
      {/* <div className="absolute inset-0 overflow-hidden z-0">
      <motion.div
        className="fixed inset-0 w-full min-h-[200vh] pointer-events-none z-0"
        style={{
          backgroundImage: `url(${parallaxBg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          y: smoothYTransform, // Moves the background at a slower speed
        }}
    ></motion.div>
      </div> */}

      {/* 🔹 Your Existing Layout (Unchanged) */}
      <div className="relative z-10">
        {/* Intro Section */}
        <div className="project-section intro">
          <span className="intro-text">
            <h1 className="blue-txt comfortaa">Hello!</h1>
            <h1 className="comfortaa">I'm Logan Bondoc</h1>
          </span>
          <span className="home-img">
            <div>
              <img src={homeArt} alt="Home Art" />
            </div>
          </span>
        </div>
      </div>
      <ShowReelWork
        videoSrc={mementoShowreel}
        topText="[UX Case Study]"
        title="Memento"
        subtitle="Addressing Post Party Blues"
        linkTo="/memento"
      />
      <ShowReelWork
        videoSrc={pathwayCabinetShowreel}
        topText="[UX Case Study]"
        title="Pathway Cabinet"
        subtitle="Play a path to find your way"
        linkTo="/pathwaycabinet"
      />
      <ShowReelWork
        videoSrc={urTripShowreel}
        topText="[AI / Development]"
        title="UrTrip"
        subtitle="Making travel planning more personal"
        linkTo="/urtrip"
      />
    </div>
  );
}

export default Home;
