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

  return (
    <div className='filter-box'>
      {Object.keys(visibleTags).map(tag => (
        <div key={tag}>
          <label>
            {tag}
            <input
              type="checkbox"
              checked={visibleTags[tag]}
              onChange={() => toggleTagVisibility(tag)}
            />
          </label>
        </div>
      ))}
    </div>
  );
}

export default Filter;