import React from 'react'

// Shows results with symbols
export default function Answer(props) {
  const { result, symbol } = props;
  return(
    <h6>A <kbd>{symbol}</kbd> B = {result}</h6>
  )
}