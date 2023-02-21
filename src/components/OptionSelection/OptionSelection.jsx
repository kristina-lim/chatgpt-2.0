import React from 'react';
import './OptionSelection.css';

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1 className="heading">React AI App</h1>
      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div 
              className="grid-child" 
              onClick={() => selectOption(item.option)}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}