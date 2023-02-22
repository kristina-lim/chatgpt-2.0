import { useState } from 'react';
import { Configuration, OpenAIApi }  from 'openai';
import { arrayItems } from './components/AIOptions/AIOptions';
import OptionSelection from './components/OptionSelection/OptionSelection';
import Translation from './components/Translation/Translation';
import './App.css';

export default function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(Configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');
  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? <OptionSelection arrayItems={arrayItems} selectOption={selectOption} /> : <Translation doStuff={doStuff} setInput={setInput} generateImage={generateImage} result={result}/>}
    </div>
  )
}

