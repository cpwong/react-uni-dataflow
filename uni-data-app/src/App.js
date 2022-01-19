import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Calculate from './Calculate';
import Result from './Result';

function App() {

  const [answer, setAnswer] = useState(null);

  const add = (num1, num2) => {
    setAnswer(num1 + num2);
  }

  return (
    <>
      <Calculate add={add}></Calculate>
      <Result answer={answer}></Result>
    </>
  );
}

export default App;
