import React from 'react';
import './Translation.css';

export default function Translation({ doStuff, setInput, result }) {
  return (
    <div className="qa-app">
      <textarea 
        className="text-area" 
        cols={55} 
        rows={10}
        onChange={(evt) => setInput(evt.target.value)}
      />
      <button className="action-btn" onClick={doStuff}>
        DO YOUR THING
      </button>
      <h3 className="result-text">
        {result.length > 0 ? result : ""}
      </h3>
    </div>
  );
}