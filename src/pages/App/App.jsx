import { useState } from 'react';
import { Configuration, OpenAIApi }  from 'openai';
import { arrayItems } from '../../components/AIOptions/AIOptions';
import OptionSelection from '../../components/OptionSelection/OptionSelection';
import './App.css'

export default function App() {
  console.log(arrayItems);
  
  return (
    <div className="App">
      <OptionSelection arrayItems={arrayItems} />
    </div>
  )
}

