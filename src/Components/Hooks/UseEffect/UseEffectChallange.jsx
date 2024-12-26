import { useEffect, useState } from "react";


const UseEffectChallange = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleIncrement = () => {
       count < 100 ? setCount(count + 1) : null
    };

    const handleDecrement = () => {
       count >=1 ? setCount(count - 1) : null
    };

    useEffect(() => {
        document.title = `Count : ${count}`
        
    },[count])

    useEffect(() => {
        console.log('mount')
        // console.log('inputValue',inputValue)
    },[])
    

    return(
        <div className="w-full h-96">
           <h2 className="text-center mt-4">UseEffect Challange</h2>

        <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-slate-900 h-80">
            <div className="flex flex-col justify-around items-center rounded-md h-64 w-56 bg-gradient-to-r from-slate-400 to-slate-900">

            <h2 className="text-white">Counter : {count}</h2>
            <button onClick={handleIncrement}
             className="p-1 rounded-xl w-24 bg-white">Increment</button>
            <button onClick={handleDecrement}
            className="p-1 rounded-xl w-24 bg-white">Decrement</button>
            <h2 className="text-white">Name : {inputValue}</h2>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value) }
             className="bg-slate-100 pl-1 pr-1" />
            </div>
        </div>

        </div>
    )
};

export default UseEffectChallange;