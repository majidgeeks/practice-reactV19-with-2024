
const Child1 = ({inputValue, setInputValue}) => {


    return(
        <>
        <h2>it is input child 1</h2>
        <input value={inputValue}
         onChange={(e) => setInputValue(e.target.value)} />
        </>
    )
};

export default Child1;