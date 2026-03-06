import React from 'react'
import Carousel from "../Carousel/Carousel";
import Projects from "../Project/projects.json"
import "./portfolio.css"

function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <Carousel projects={Projects} />
      </div>
    </section>
  );
};

export default Portfolio;