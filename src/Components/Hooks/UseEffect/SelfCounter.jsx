import { useEffect, useState } from "react";


const SelfCounter = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        const counter = setInterval(() => {
            setCount((prev) => prev + 1 )
        },1000)

        return () => clearInterval(counter);
    
    },[])
    

    return(
        <div className="w-full h-96">
           <h2 className="text-center mt-4">UseEffect Challange 2</h2>

        <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-slate-900 h-80">
            <div className="flex flex-col justify-around items-center rounded-md h-64 w-56 bg-gradient-to-r from-slate-400 to-slate-900">

            <h2 className="text-white">Self Counter</h2>
            <h2 className="text-white">Counts : {count}</h2>
            </div>
        </div>

        </div>
    )
};

export default SelfCounter;