import { useState } from "react";

function Form({ calculate }) {
  const defaultValues = {
    one: 0,
    two: 0,
  };
  const [values, setValues] = useState(defaultValues);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("In on submit");
    calculate(values.one, values.two);
    setValues(defaultValues);
  };

  const handleOnChange = (e) => {
    console.log(e.target.name);
    const newValues = { ...values };
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
  };

  return (
    <div className="form-component">
      <form>
        <input
          type="number"
          value={values.one}
          name="one"
          onChange={handleOnChange}
        ></input>
        <input
          type="number"
          value={values.two}
          name="two"
          onChange={handleOnChange}
        ></input>
        <button onClick={handleOnSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
