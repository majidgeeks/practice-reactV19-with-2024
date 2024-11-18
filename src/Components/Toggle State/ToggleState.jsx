import { useState } from "react";

const ToggleState = () => {
  const [btn, setBtn] = useState(false);

  const toggleTxt = btn ? "Off" : "On";
  const toggleBtnBg = btn ? "bg-green-300" : "bg-red-500";
  const toggleBtnPosition = btn ? "translate-x-24" : "translate-x-0";
  const toggleImage = btn ? "onBulb.webp" : "offBulb.webp";

  const handleSwitch = () => {
    setBtn((previous) => !previous);
  };

  return (
    <div className="w-full h-full flex justify-center ">
      <div className="flex flex-col items-center justify-between h-full w-full bg-slate-300">
        <h2>Switch Button</h2>
        <img src={toggleImage} width={300} />
        <div className="bg-black w-44 mt-5 rounded-full">
          <button
            onClick={handleSwitch}
            className={`w-20 ${toggleBtnBg} 
          h-20 rounded-full ${toggleBtnPosition}`}
          >
            {toggleTxt}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleState;
