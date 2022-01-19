import React, { useEffect, useState } from 'react'
export default function InputBox(props) {
  
  const {calculate} = props;
  const [operand, setOperand] = useState({ a: '', b:'' });  // input values
  const [isLive, setLive] = useState(false);  // enable live calculations
  
  // Input handler to update operand states
  const handleInput = e => {
    const {id, value} = e.target;
    console.log('handleInput =', id, value);
    setOperand({...operand, [id]:value });
  }

  // Toggle live calculation updating
  const handleCheckbox = e => {
    setLive(!isLive);
  }
  
  // Lifecycle hook for live calculating
  useEffect( () => {
    if (isLive) {
      calculate({
        a: parseFloat(operand.a),
        b: parseFloat(operand.b)
      });  
    }
  }, [operand.a, operand.b, isLive] )

  return(
    <form>
      <div className="InputBox">
        <div>
          <label><h6>Input A</h6></label>
          <input type="number" 
            min="0" 
            id="a" 
            value={operand.a} 
            onChange={handleInput} />
        </div>
        <div>
          <label><h6>Input B</h6></label>
          <input type="number" 
            min="0" 
            id="b" 
            value={operand.b} 
            onChange={handleInput} />
        </div>
      </div>
      <fieldset>
        <label htmlFor='switch'>
          <input type="checkbox"
            id="switch"
            role="switch" 
            checked={isLive} 
            onChange={handleCheckbox} />
            Show Live Calculation
        </label>
      </fieldset>
    </form>
  )
}