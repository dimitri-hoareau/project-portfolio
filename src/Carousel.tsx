

import './carousel.css';
import React, { useState, useEffect } from 'react';
import { ProjectProps, VisibleTagsProps, VisibleTagsArrayProps } from './type';
import Project from './Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface CarouselProps {
  projects: ProjectProps[];
  visibleTags: VisibleTagsProps;
}

const Carousel: React.FC<CarouselProps> = ({ projects, visibleTags }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    const visibleTagsArray: VisibleTagsArrayProps = Object.entries(visibleTags)
    .filter(([key, value]) => value)
    .map(([key]) => key);

    const filteredProjects = projects.filter(project => {
      return project.tools.some(tool => visibleTagsArray.includes(tool.name));
    });


    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      if (activeIndex === -1) {
        setActiveIndex(projects.length - 1);
      }
      if (activeIndex === projects.length) {
        setActiveIndex(0);
      }
    }, [activeIndex, projects.length]);

    let numVisibleProjects = 3; 
    if (windowWidth <= 900) {
      numVisibleProjects = 1;
    } else if (windowWidth <= 1350) {
      numVisibleProjects = 2;
    }


    let slicedArray: ProjectProps[] = [];

    projects = filteredProjects.length > 0 ? filteredProjects : projects;

    const isEndOfCarousel = activeIndex === projects.length // dernier
    const isPenultimateProject = activeIndex + 1 === projects.length // avant dernier
    const isAtAntePenultimateProject = activeIndex + 2 === projects.length // avant avant dernier

    const smallArray = projects.length < 3
    const deactivateArrow = projects.length < 2

    if (isEndOfCarousel) {
        slicedArray = smallArray ? projects : projects.slice(activeIndex, activeIndex+numVisibleProjects);
    } else if (isPenultimateProject){
      if (numVisibleProjects < 2) {
        slicedArray =  projects.slice(activeIndex, activeIndex+numVisibleProjects);
      } else {   
      slicedArray = smallArray ? projects : [...projects.slice(activeIndex), ...projects.slice(0,numVisibleProjects - 1)];
    } 
    } else if (isAtAntePenultimateProject) {
      if (numVisibleProjects < 2) {
        slicedArray =  projects.slice(activeIndex, activeIndex+numVisibleProjects);
      } else {       
        slicedArray = smallArray ? projects : [...projects.slice(activeIndex), ...projects.slice(0,numVisibleProjects - 2)];                   
      }
    } 
      else {
        slicedArray = smallArray ? projects : projects.slice(activeIndex, activeIndex+numVisibleProjects);
    }

    const renderProjects = () => {

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
        <>
          <div className="carousel-content">
            {deactivateArrow ?
              <FontAwesomeIcon className='chevronFa chevron-left arrow-deactivate' icon={faChevronLeft} />
              :
              <FontAwesomeIcon className='chevronFa chevron-left' onClick={goToPrev} icon={faChevronLeft} />
            }
            <>
              {renderProjects()}
            </>
            {deactivateArrow ?
              <FontAwesomeIcon className='chevronFa chevron-left arrow-deactivate' icon={faChevronRight} />
              :
              <FontAwesomeIcon className='chevronFa chevron-left' onClick={goToNext} icon={faChevronRight} />
            }
          </div>
          <div className='bullet-point-container'>
            {projects.map(project => (
              <div key={project.id} className={project.id === activeIndex + 1 ? 'bullet-point active' : 'bullet-point'}>
              </div>
            ))}

          </div>
        </>

      );
      

      
}

export default Carousel;
