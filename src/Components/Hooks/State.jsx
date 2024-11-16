import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  console.log("parent component");

  return (
    <div className="flex flex-col items-center w-full mt-10">
      <div className="flex flex-col items-center justify-evenly w-36 h-40">
        <h3 className="text-2xl">{count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button className="border-2" onClick={handleDecrement}>
          Decrement
        </button>
      </div>

      <ChildComponent />
      
    </div>
  );
};

export default State;

const ChildComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  console.log("child component");
  return (
    <>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Child Increment</button>
      <button className="border-2" onClick={handleDecrement}>
      Child Decrement
      </button>
    </>
  );
};
