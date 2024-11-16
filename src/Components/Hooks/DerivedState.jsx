import { useState } from "react";

const DerivedState = () => {
    const [users, setUsers] = useState(
        [
           { name: "Alice", age: 25 },
           { name: "Bob", age: 30 },
           { name: "Charlie", age: 22 },
           { name: "Diana", age: 28 },
      ]
   );

   const usersLength = users.length;
//    console.log(usersLength)

   const averageAge = users.reduce((acc, curr) => acc + curr.age, 0 ) / usersLength;
   console.log(averageAge)

    return (
        <div className="flex flex-col items-center w-full mt-10">
            <h1>Derived State Using UseState</h1>
           
          <div className="flex flex-col items-center justify-evenly w-36 h-40">
            <h3 className="text-2xl">total users are {usersLength}</h3>
            <h3 className="text-2xl">average age is {averageAge} </h3>
          </div>
          
        </div>
      );
};

export default DerivedState;