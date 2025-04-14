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
        <div className="carouselContainer">
          {getIndices().map((project, index) => (
            <div key={index} className={`card ${index === 1 ? 'centralProject' : 'sideProject hide'}`}>
              <Project 
              key={project.id} 
              title={project.title} 
              image={project.image}
              deployed={project.deployed} 
              github={project.github} 
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev buttonSpan" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <div className="carousel-control-prev-icon" aria-hidden="true" onClick={handleClickPrev}></div>
            <div className="visually-hidden">Previous</div>
        </button>
        <button className="carousel-control-next buttonSpan" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <div className="carousel-control-next-icon" aria-hidden="true" onClick={handleClickNext}></div>
            <div className="visually-hidden">Next</div>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;