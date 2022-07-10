import React, { useState } from 'react'; // useState is not a default export

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>The count is : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
