import {FilterProps } from './type';
import React from 'react';
import './filter.css';



const Filter: React.FC<FilterProps> = ({ visibleTags, setVisibleTags}) => {



  const toggleTagVisibility = (tag: string) => {
    setVisibleTags(prevState => ({
      ...prevState,
      [tag]: !prevState[tag]
    }));
  };

  const getImagePath = (tagName: string): string => {
    return `/media/${tagName.toLowerCase()}.png`;
  }

  return (
    <div className='filter-box'>
      {Object.keys(visibleTags).map(tag => (
        <div key={tag} className="filter-tag">
          <img
            src={getImagePath(tag)}
            alt={`Toggle ${tag}`}
            className="tool-logo clickable"
            onClick={() => toggleTagVisibility(tag)}
            style={{ opacity: visibleTags[tag] ? 1 : 0.5 }} // Changes opacity based on visibility
          />
        </div>
      ))}
    </div>
  );
}

export default Filter;