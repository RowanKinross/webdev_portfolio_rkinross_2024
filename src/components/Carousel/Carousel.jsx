import React, { useState, useEffect, useRef } from 'react';
import './carousel.css';

// CarouselCard component
const CarouselCard = ({ active, children }) => {
  return (
    <div className={`carousel-card ${active ? 'active' : ''}`}>
      {children}
    </div>
  );
};

// Main Carousel component
const Carousel = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [carouselTranslate, setCarouselTranslate] = useState(null);
  
  useEffect(() => {
    const updateCarouselPosition = () => {
      if (carouselRef.current) {
        // Get card width based on screen size
        const getCardWidth = () => {
          if (window.innerWidth <= 480) return 280;
          if (window.innerWidth <= 768) return 300;
          return 400;
        };
        
        const cardWidth = getCardWidth();
        const containerWidth = carouselRef.current.offsetWidth;
        const initialTranslateVal = (containerWidth - cardWidth) / 2;
        const translate = initialTranslateVal - (activeIndex * cardWidth);
        setCarouselTranslate(translate);
      }
    };

    updateCarouselPosition();

    // Add resize listener
    window.addEventListener('resize', updateCarouselPosition);
    
    return () => window.removeEventListener('resize', updateCarouselPosition);
  }, [activeIndex]);
  
  return (
    <>
      <div className="carousel" ref={carouselRef} style={{transform: `translateX(${carouselTranslate}px)`}}>
        {projects.map((project, i) => {
          return (
            <CarouselCard key={project.id} active={activeIndex === i}>
              <div className='carousel-card-content' style={{backgroundImage: `url("${project.image}")`}}>
                <div className='carousel-card-title'>{project.title}</div>
                <div className='carousel-card-links'>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className='project-link github-link'>
                      GitHub
                    </a>
                  )}
                  {project.deployed && (
                    <a href={project.deployed} target="_blank" rel="noopener noreferrer" className='project-link deployed-link'>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </CarouselCard>
          );
        })}
      </div>
      
      <div className="dots">
        {projects.map((project, i) => (
          <button 
            key={project.id}
            className={`dot ${activeIndex === i ? 'active' : ''}`} 
            onClick={() => setActiveIndex(i)}
            aria-label={`View project ${project.title}`}
          />
        ))}
      </div>
      
      <div className="button-group">
        <button 
          type="button" 
          disabled={activeIndex === 0} 
          onClick={() => setActiveIndex(activeIndex - 1)}
          aria-label="Previous project"
        >
          Prev
        </button>
        <button 
          type="button" 
          disabled={activeIndex === projects.length - 1} 
          onClick={() => setActiveIndex(activeIndex + 1)}
          aria-label="Next project"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Carousel;