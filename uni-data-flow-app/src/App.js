import './App.css';
import InputBox from './components/InputBox.js'
import Answer from './components/Answer.js'
import { useState } from 'react';

function App() {
  // Stores results of math operations
  const [result, setResult] = useState({});    
  
  // Calculates all the results and stores it into a state
  function calculate(operands) {
    const {a, b} = operands;
    let temp = {
      add: a + b,
      minus: a - b,
      multiply: a * b,
      divide: a / b,
    }
    // console.log(a, b, temp);
    setResult(temp);
  }
  return (
    <div className="App container">
      <h1>Assignment 2.11: Uni-data flow</h1>
      <InputBox calculate={calculate}/>
      <article>
        <h3>Results</h3>
        <Answer result={result.add} symbol='+'/>
        <Answer result={result.minus} symbol='-'/>
        <Answer result={result.multiply} symbol='×'/>
        <Answer result={result.divide} symbol='÷' />
      </article>
    </div>
  );
}

export default App;
