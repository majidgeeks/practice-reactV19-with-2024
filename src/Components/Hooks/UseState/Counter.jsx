import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    count > 0 ? setCount(count - 1) : null;
  };

  return (
    <div className="w-full h-5/6 bg-yellow-100 flex justify-center items-center">

    <div className="flex flex-col items-center justify-center h-96 w-96 bg-blue-300">
      <h2>Count</h2>
      <h2 className="mt-5">{count}</h2>
      <div className="flex justify-between mt-5 w-52">
        <button className="bg-green-400 p-3 rounded-xl" onClick={increment}>
          Increment
        </button>
        <button className="bg-red-400 p-3 rounded-xl" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
    </div>
  );
};

export default Counter;
