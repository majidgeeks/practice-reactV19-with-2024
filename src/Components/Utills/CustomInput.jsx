import { useForm } from "react-hook-form";



const CustomInput = ({label, onChange, name, labelStyle, inputStyle}) => {
    return(
        <div className="flex justify-around ">
          {label && <label htmlFor="" className={labelStyle}>{label}</label>}
           <input type="text" name={name} onChange={onChange} className={`pr-2 pl-2 ${inputStyle}`} />
        </div>
    )
};

export default CustomInput;