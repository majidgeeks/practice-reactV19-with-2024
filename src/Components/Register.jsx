import CustomInput from "./Utills/CustomInput";
import { useForm, Controller } from "react-hook-form";

const Register = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      contact: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("data", data);
     localStorage.setItem('user', JSON.stringify(data))
     const getData = JSON.parse(localStorage.getItem('user'))
     console.log('getData',getData)
    reset();
  };

  return (
    <div className="bg-blue-200 h-screen w-full flex justify-center items-center ">
      <div className="w-96 h-96 border-2 flex flex-col justify-center bg-gradient-to-r from-red-300 to-indigo-400 rounded-lg">
        <h1 className="text-center font-medium">Register Form</h1>
        <div className="mt-2 flex flex-col justify-evenly h-60">
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <>
                <CustomInput
                  onChange={onChange}
                  value={value}
                  inputStyle={"mt-2"}
                  label={"First Name"}
                  labelStyle={"font-medium text-white"}
                />
                {errors.firstName && (
                  <span className=" text-red-600">
                    {errors.firstName.message}
                  </span>
                )}
              </>
            )}
          />

          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <>
                <CustomInput
                  onChange={onChange}
                  value={value}
                  inputStyle={"mt-2"}
                  label={"Last Name"}
                  labelStyle={"font-medium text-white"}
                />
                {errors.lastName && (
                  <span className=" text-red-600">
                    {errors.lastName.message}
                  </span>
                )}
              </>
            )}
          />
          <Controller
            name="contact"
            control={control}
            rules={{ required: "Contact is required" }}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <>
                <CustomInput
                  onChange={onChange}
                  value={value}
                  inputStyle={"mt-2"}
                  label={"Contact"}
                  labelStyle={"font-medium text-white"}
                />
                {errors.contact && (
                  <span className=" text-red-600">
                    {errors.contact.message}
                  </span>
                )}
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <>
                <CustomInput
                  onChange={onChange}
                  value={value}
                  inputStyle={"mt-2"}
                  label={"Password"}
                  labelStyle={"font-medium text-white"}
                />
                {errors.password && (
                  <span className=" text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </>
            )}
          />
          <div className="flex justify-center mt-5">
            <button
              onClick={handleSubmit(onSubmit)}
              className="bg-white p-1 w-24 font-medium rounded-md "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
