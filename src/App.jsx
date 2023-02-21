import { useState } from 'react';
import { Configuration, OpenAIApi }  from 'openai';
import './App.css'

export default function App() {
  const [prompt, setPrompt] = useState('');
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  
  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: "Say this is a test",
      n: 1,
      size: "1024x1024",

    });

    console.log(res.data.data[0].url);
  }

  return (
    <div className="app-main">
      <h3>Generate an Image using OpenAI API</h3>
      <input className="app-input" />
      <button onClick={generateImage}>Generate an Image</button>
    </div>
  )
}

