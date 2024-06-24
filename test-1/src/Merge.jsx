import React from 'react';

function Merge() {
  const A1 = [1, 2, 3, 4, 1, 2, 3, 4];
  const A2 = [5, 6, 7, 8];

  // Merge arrays and remove duplicates using Set
  const mergedArray = [...new Set([...A1, ...A2])];

  return (
    <div>
      <p>Array 1: {JSON.stringify(A1)}</p>
      <p>Array 2: {JSON.stringify(A2)}</p>
      <p>Merged Array: {JSON.stringify(mergedArray)}</p>
    </div>
  );
}

export default Merge;
