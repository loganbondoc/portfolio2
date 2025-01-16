import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import homeArt from "../images/home_art.png";
import mementoImg from "../images/memento_work.png";
import portfolioImg from "../images/portfolio_work.png";
import { useNavigate } from "react-router-dom";

const projects = [
    {
      id: "memento",
      title: "Memento",
      description: "Your Moments Forever",
      category: "Design",
      image: mementoImg,
      path: "/memento", // Path for redirection
    },
    {
      id: "portfolio",
      title: "Portfolio",
      description: "A Case Study for This Website",
      category: "Development",
      image: portfolioImg,
      path: "/portfolio", // Path for redirection
    },
    {
      id: "urtrip",
      title: "UrTrip",
      description: "Travel Planning App",
      category: "Others",
      image: portfolioImg,
      path: "/urtrip", // Path for redirection
    },
  ];
  
function Home() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const navigate = useNavigate(); // React Router hook for navigation
  
    const categories = [
      { id: "all", label: "All" },
      { id: "design", label: "Design" },
      { id: "development", label: "Development" },
      { id: "others", label: "Others" },
    ];
  
    return (
      <div>
        {/* Intro Section */}
        <div className="project-section intro">
          <span className="intro-text">
            <h1 className="blue-txt comfortaa">Hello!</h1>
            <h1 className="hidden comfortaa">I'm Logan Bondoc</h1>
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
          >
            {(category) => (
              <Tab key={category.id} title={category.label}>
                <div className="card-grid">
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
                        onPress={() => navigate(project.path)} // Redirect on card press
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="card-image"
                        />
                        <CardBody>
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <Chip color="primary">{project.category}</Chip>
                        </CardBody>
                      </Card>
                    ))}
                </div>
              </Tab>
            )}
          </Tabs>
        </section>
      </div>
    );
  }

export default Home;

