import React, { useState } from 'react'
import Project from "../Project/Project";
import Projects from "../Project/projects.json"
import "./portfolio.css"



function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = Projects.length;

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1));
  };

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>(prevIndex - 1) + totalItems);
  };

  const getIndices = () => {
    const showProjects = [];
    showProjects.push(Projects[((currentIndex - 1) + totalItems) % totalItems]);
    showProjects.push(Projects[(currentIndex % totalItems)]);
    showProjects.push(Projects[((currentIndex + 1) + totalItems) % totalItems]);
    return showProjects;
  };

  return (
    <div>
    <div className="projects">
        <button className="prev-button buttonSpan" type="button">
            <div className="prev-icon" aria-hidden="true" onClick={handleClickPrev}>&lt;</div>
        </button>
        <div className="carouselContainer">
          {getIndices().map((project, index) => (
            <div key={index} className={`card ${index === 1 ? 'centralProject' : 'sideProject hide'}`}>
              <Project 
              key={project.id} 
              title={project.title.toUpperCase()} 
              image={project.image}
              deployed={project.deployed} 
              github={project.github} 
              />
            </div>
          ))}
        </div>

        <button className="next-button buttonSpan" type="button">
            <div className="next-icon" aria-hidden="true" onClick={handleClickNext}>&gt;</div>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;