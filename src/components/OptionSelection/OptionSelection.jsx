import React from 'react';

export default function OptionSelection({ arrayItems }) {
  return (
    <>
      <h1 className="heading">React AI App</h1>
      <div>
        {arrayItems.map((item) => {
          return <>
           <h3>{item.name}</h3>
           <p>{item.description}</p>
          </>
        })}
      </div>
    </>
  )
}