import CustomInput from "./Utills/CustomInput";

const Register = () => {
    return(
         <div className="bg-blue-200 h-screen w-full">
            <div>
            <h1>Register Form</h1>
            <CustomInput label={'First Name'} />
            </div>
         </div>
    )
};

export default Register;