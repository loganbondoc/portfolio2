import React, { useState } from "react";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import parallaxBg from "../images/parallax_bg.png";
import mementoImg from "../images/memento_work.png";
import portfolioImg from "../images/portfolio_work.png";
import homeArt from "../images/home_art.png";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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
    description: "Travel Planning App",
    category: "Others",
    image: portfolioImg,
    path: "/urtrip",
  },
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  // Track scroll progress
  const { scrollYProgress } = useScroll();

  // Adjust parallax speed (change -30% to -50% for faster effect)
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-500%"]);

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
      {/* 🔵 Full-Page Parallax Background */}
      <motion.div
        className="fixed top-0 left-0 w-full min-h-[200vh] pointer-events-none"
        style={{
          backgroundImage: `url(${parallaxBg})`, // ✅ Using correct background
          backgroundSize: "cover", // ✅ Ensures the full image fills the background
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          y: smoothYTransform, // ✅ Moves background at a slower speed
          zIndex: -10, // ✅ Ensures it's behind all content
        }}
      ></motion.div>

      {/* 🔹 Your Existing Layout (Unchanged) */}
      <div className="relative z-10">
        {/* Intro Section */}
        <div className="project-section intro">
          <span className="intro-text">
            <h1 className="blue-txt comfortaa">Hello!</h1>
            <h1 className="comfortaa">I'm Logan Bondoc</h1>
            <div className="blue-line"></div>
          </span>
          <span className="home-img">
            <div>
              <img src={homeArt} alt="Home Art" />
            </div>
          </span>
        </div>

        {/* Works Section */}
        <section id="works" className="page-content">
          <h1 className="comfortaa">Current Works</h1>

          {/* Tabs for Filtering */}
          <Tabs
            aria-label="Dynamic Project Categories"
            items={categories}
            defaultValue="all"
            selectedValue={selectedCategory}
            onSelectionChange={(value) => setSelectedCategory(value)}
            variant="underlined"
            size="lg"
            className="body"
            classNames={{
              tabContent: "group-data-[selected=true]:text-[#4C9EED]",
              cursor: "w-full bg-[#4C9EED]",
            }}
            color="primary"
          >
            {(category) => (
              <Tab key={category.id} title={category.label}>
                <div className="card-grid grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6">
                  {projects
                    .filter((project) =>
                      category.id === "all"
                        ? true
                        : project.category.toLowerCase() === category.id
                    )
                    .map((project) => (
                      <Card
                        key={project.id}
                        isPressable
                        className="project-card"
                        onPress={() => navigate(project.path)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="card-image"
                        />
                        <CardBody>
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <Chip color="primary" className="body" size="md" radius="md">
                            {project.category}
                          </Chip>
                        </CardBody>
                      </Card>
                    ))}
                </div>
              </Tab>
            )}
          </Tabs>
        </section>

        {/* Primary Color Test */}
        <div className="primary text-white p-4">Primary color test</div>
      </div>
    </div>
  );
}

export default Home;
