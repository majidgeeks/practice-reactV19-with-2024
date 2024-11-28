import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const increment = () => {
    if(inputValue > 0){
        setCount(count + inputValue <= 100 ? count + inputValue : count  )
    }else{
        setCount(count <= 99 ? count + 1 : count);  
    }
  };

  const decrement = () => {
    if(inputValue >= 1 ){
        setCount(count - inputValue)
    }
    else{
        setCount(count >= 1 ? count - 1 : null);
    }
    // count > 0 ? setCount(count - 1) : null;
  };

  const onInputChange = (e) => {
    setInputValue(Number(e.target.value))
  }

  const handleReset = () => {
   setCount(0);
  }

  console.log('inputValue',inputValue)

  return (
    <div className="w-full h-5/6 bg-yellow-100 flex justify-center items-center">

    <div className="flex flex-col items-center justify-center h-96 w-96 bg-blue-300">
      <h2>Count</h2>
      <h2 className="mt-5">{count}</h2>
      <input type="number" value={inputValue} onChange={(e) => onInputChange(e)}/>
      <div className="flex justify-between mt-5 w-72">
        <button
         className="bg-green-400 p-3 rounded-xl" onClick={increment}>
          Increment
        </button>
        <button className="bg-red-400 p-3 rounded-xl" onClick={decrement}>
          Decrement
        </button>
        <button className="bg-red-400 p-3 rounded-xl" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
    </div>
  );
};

export default Counter;
