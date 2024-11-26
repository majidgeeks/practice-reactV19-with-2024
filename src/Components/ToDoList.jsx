import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
// import { MdFileDownloadDone } from "react-icons/md";

const ToDoList = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [task, setTask] = useState([]);
  const [indexForUpdate, setIndexForUpdate] = useState(null);
  // const [lineThrough, setLineThrough] = useState(false);
  const [dateTime, setDateTime] = useState("");

  const onSubmit = (data) => {
    if (indexForUpdate !== null) {
      setTask((previousTask) =>
        previousTask.map((t, index) => {
          return index === indexForUpdate ? data : t;
        })
      );
      setIndexForUpdate(null);
    } else {
      setTask((previousTask) => [...previousTask, data]);
    }
    reset();
  };

  const handleDelete = (index) => {
    const update = task.filter((data, i) => i !== index);
    setTask(update);
  };

  const handleUpdate = (index) => {
    console.log("index for update", index);
    setIndexForUpdate(index);
    const update = task.filter((_, i) => i === index);
    console.log("update value", update);
    setValue("task", update[0].task);
  };

  // const handleLineThroghTxt = (index) => {
  //   let finding = task.find((curr, i) => i === index )
  //   console.log('finding',finding.task)
  //   // setLineThrough((previous) => !previous);
  // };

  const handleClear = () => {
    setTask([]);
  }

  useEffect(() => {
    // const interval = () => {
      setInterval(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString();
        // const formattedTime = today.toLocaleTimeString();
        setDateTime(`${formattedDate} `);
      }, 1000);
    // };
    // return clearInterval(interval);
  }, []);

  console.log("task in array", task);

  return (
    <div className="w-full h-full flex flex-col bg-slate-600 ">
      <h2 className="text-center text-white font-bold">Create To Do List</h2>
      <h2 className="text-center text-white">{dateTime}</h2>
      <div className=" flex flex-col justify-center items-center h-full mt-2">
      <div className="flex justify-center w-96 rounded-lg h-10  ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="p-1 px-2 w-56 rounded-l-md"
            {...register("task", { required: true })}
          />
          <button
            type="submit"
            className="bg-blue-300 px-4 py-1 rounded-r-md "
          >
            Add Task
          </button>
        </form>
      </div>
        <h3 className="text-white mt-1">Excisting Tasks</h3>
        {task.map((data, index) => {
          return (
            <div
              key={index}
              className="w-96 h-14 rounded-full px-3
         flex items-center justify-between bg-white border-2 my-1"
            >
              <p className={`${lineThrough ? "line-through" : ""}`}>
                {data.task}
              </p>
              <div className="flex items-center justify-center w-14">
                <button onClick={() => handleUpdate(index)}>
                  <TiEdit size={25} color="green" className="" />
                </button>
                <button onClick={() => handleDelete(index)}>
                  <MdDelete size={25} color="red" />
                </button>
                {/* <button onClick={() => handleLineThroghTxt(index)}>
                  <MdFileDownloadDone size={25} color="black" />
                </button> */}
              </div>
            </div>
          );
        })}
        <button
          onClick={handleClear}
          className="text-white bg-red-500 w-28 rounded-lg mt-3 h-8"
        >
          Clear All Task
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
