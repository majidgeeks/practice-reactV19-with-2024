
// eslint-disable-next-line react/prop-types
const CustomInput = ({label, onChange, name, labelStyle, inputStyle, value}) => {
    return(
        <div className="flex justify-evenly  ">
          {label && <label htmlFor="" className={`w-20 ${labelStyle}`}>{label}</label>}
           <input type="text" value={value}
            name={name} onChange={onChange} className={`pr-2 pl-2 ${inputStyle}`} />
        </div>
    )
};

export default CustomInput;