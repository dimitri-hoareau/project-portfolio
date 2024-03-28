

import './carousel.css';
import React, { useState } from 'react';
import { ProjectProps } from './type';
import Project from './Project';

interface CarouselProps {
    projects: ProjectProps[];
  }

const Carousel: React.FC<CarouselProps> = ({ projects }) => {

    const [activeIndex, setActiveIndex] = useState(0);


    const renderProjects = () => {
        return projects.slice(activeIndex, activeIndex+3).map(project => (
          <Project
            key={project.id}
            id={project.id}
            name={project.name}
            short_description={project.short_description}
            tools={project.tools}
            link={project.link}
            picture={project.picture}
          />
        ));
      };

    const goToPrev = () => {
        setActiveIndex(Math.max(0, activeIndex - 1));
      };
      
      const goToNext = () => {
        setActiveIndex(Math.min(projects.length - 1, activeIndex + 1));
      };
      

      return (
        <div>
          <div className="carousel-content">
          {renderProjects()}
      
          </div>
          <button onClick={goToPrev} disabled={activeIndex === 0}>Précédent</button>
          <button onClick={goToNext} disabled={activeIndex === projects.length - 3}>Suivant</button>
        </div>
      );
      

      
}

export default Carousel;
