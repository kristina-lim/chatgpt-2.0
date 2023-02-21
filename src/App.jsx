import { useState } from 'react';
import { Configuration, OpenAIApi }  from 'openai';
import './App.css'

export default function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  return (
    <div className="App">
    
    </div>
  )
}

