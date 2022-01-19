import Form from "../components/form";
import Display from "../components/display";
import { useState } from "react";

function Caclulator() {
  const [answer, setAnswer] = useState(0);

  const add = (x, y) => {
    const sum = parseInt(x) + parseInt(y);
    setAnswer(sum);
  };

  return (
    <div className="calculation-page">
      <Form calculate={add} />
      <Display answer={answer} />
    </div>
  );
}

export default Caclulator;
