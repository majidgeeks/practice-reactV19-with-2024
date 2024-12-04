import CustomInput from "./Utills/CustomInput";
import { useForm, Controller } from "react-hook-form";

const Register = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstNamr: "",
      lastName: "",
      contact: "",
      password: "",
    },
  });
  return (
    <div className="bg-blue-200 h-screen w-full flex justify-center items-center ">
      <div className="w-96 h-96 border-2 flex flex-col justify-center bg-gradient-to-r from-red-300 to-indigo-400 rounded-lg">
        <h1 className="text-center font-medium">Register Form</h1>
        <div className="mt-2 flex flex-col justify-evenly h-60">
          <CustomInput inputStyle={'mt-2'} label={"First Name"} labelStyle={'font-medium text-white'} />
          <CustomInput label={"Last Name"} labelStyle={'font-medium text-white'} />
          <CustomInput label={"Contact"} labelStyle={'font-medium text-white'} />
          <CustomInput label={"Password"} labelStyle={'font-medium text-white'} />
          <div className="flex justify-center mt-5">
          <button className="bg-white p-1 w-24 font-medium rounded-md ">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
