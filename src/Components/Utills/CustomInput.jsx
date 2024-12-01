import { useForm } from "react-hook-form";



const CustomInput = ({label, onChange, name,}) => {
    return(
        <div>
          {label && <label htmlFor="">{label}</label>}
           <input type="text" name={name} onChange={onChange} />
        </div>
    )
};

export default CustomInput;