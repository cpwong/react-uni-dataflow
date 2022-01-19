import {useState} from "react";

const Calculate = ({add}) => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const onInputChange = (e) => {

        const val = Number(e.target.value);
        switch(e.target.name){
            case "num1":
                setNum1(val);
                break;
            
            case "num2":
                setNum2(val);
                break;
        }
    }

    const onButtonClick = (e) => {
        e.preventDefault();
        console.log(num1, num2);
        add(num1,num2);
    }

    return <form>
        <input type='number' name="num1" onChange={onInputChange}></input> + <input type='number' name="num2" onChange={onInputChange}></input><button onClick={onButtonClick}>Show Answer</button>
    </form>
}
export default Calculate