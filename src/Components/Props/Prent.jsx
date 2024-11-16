import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [inputValue, setInputValue] = useState("");

  console.log("input Value in parent", inputValue);

  return (
    <div className="w-full h-32 bg-gray-300 flex justify-center">
      <div className="flex flex-col justify-evenly">
        <h2>it is Parent</h2>
        <Child1 inputValue={inputValue} setInputValue={setInputValue} />
        <Child2 inputValue={inputValue} />
      </div>
    </div>
  );
};

export default Parent;
