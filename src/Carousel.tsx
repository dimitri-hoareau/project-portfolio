

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

      let slicedArray: ProjectProps[] = [];
        if (activeIndex && activeIndex === projects.length) { 
          setActiveIndex(0)
          slicedArray = projects.slice(activeIndex, activeIndex+3);
        } else if (activeIndex + 1 === projects.length){ 
          slicedArray = [...projects.slice(activeIndex), ...projects.slice(0,2)];
        } else if (activeIndex + 2 === projects.length) {
          slicedArray = [...projects.slice(activeIndex), ...projects.slice(0,1)];
        } else if (activeIndex === -1) {
          setActiveIndex(projects.length + activeIndex)
        }  else {
          slicedArray = projects.slice(activeIndex, activeIndex+3);
        }



        return slicedArray.map(project => (
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
        setActiveIndex(activeIndex - 1);
      };
      
      const goToNext = () => {
          setActiveIndex(activeIndex + 1);
      };
      

      return (
          <div className="carousel-content">
          <button onClick={goToPrev}>Précédent</button>
          <>
          {renderProjects()}
          </>

          <button onClick={goToNext} >Suivant</button>
      
          </div>
      );
      

      
}

export default Carousel;
