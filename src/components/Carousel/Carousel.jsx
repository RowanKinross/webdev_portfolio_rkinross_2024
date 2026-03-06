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
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  
  // Handle touch events for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe && activeIndex < projects.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
    
    setTouchStartX(0);
    setTouchEndX(0);
  };
  
  useEffect(() => {
    const updateCarouselPosition = () => {
      if (carouselRef.current) {
        // Get card width based on screen size (matching CSS breakpoints)
        const getCardWidth = () => {
          if (window.innerWidth <= 360) return 260;
          if (window.innerWidth <= 480) return 290;
          if (window.innerWidth <= 768) return 320;
          if (window.innerWidth <= 900) return 350;
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

    // Add resize listener with debouncing for better performance
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateCarouselPosition, 250);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [activeIndex]);
  
  return (
    <>
    
      <div 
        className="carousel" 
        ref={carouselRef} 
        style={{transform: `translateX(${carouselTranslate}px)`}}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
                      Deployed
                    </a>
                  )}
                  {project.pdf && (
                    <a href={project.pdf} target="_blank" rel="noopener noreferrer" className='project-link pdf-link'>
                      Logbook
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
          &lt;
        </button>
        <button 
          type="button" 
          disabled={activeIndex === projects.length - 1} 
          onClick={() => setActiveIndex(activeIndex + 1)}
          aria-label="Next project"
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Carousel;