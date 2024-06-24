import React from 'react';

function Stringreverse() {
  const reverseString = (str) => {
    return str.split('').reverse().join('');
  }

  const input = "Hello world";
  const output = reverseString(input);
  console.log(output); // Expected Output: dlrow olleH

  return (
    <div>
      <p>Input: {input}</p>
      <p>Output: {output}</p>
    </div>
  );
}

export default Stringreverse;
