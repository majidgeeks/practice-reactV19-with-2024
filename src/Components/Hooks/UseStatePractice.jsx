import { useState } from "react";



const UseStatePractice = () => {
    const [users, setUsers] = useState(
         [
            { name: "Alice", age: 25 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 22 },
            { name: "Diana", age: 28 },
       ]
    )


    // const users1 = {
    //     use1: { name: "Alice", age: 25 },
    //     use2: { name: "Bob", age: 30 },
    //     use3: { name: "Charlie", age: 22 },
    //     use4: { name: "Diana", age: 28 },
    // }
    
  return (
    <div className="flex flex-col items-center w-full mt-10">
        <h1>Use State Practice</h1>
        {users.map((data, index) => {
           return (
       <>
      <div key={index} className="flex flex-col items-center justify-evenly w-36 h-40">
        <h3 className="text-2xl">name {data.name} <span>age is {data.age}</span> </h3>
      </div>
       </>
           )
        })}
    </div>
  );
};

export default UseStatePractice;
