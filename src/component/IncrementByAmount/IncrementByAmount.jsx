import { useRef } from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../../features/counterSlice";

export const IncrementByAmount = () =>{
    const inputRef = useRef(0);
    const dispatch = useDispatch();
    return (
        <>
            <input type="number" ref={inputRef} />
            <button onClick={()=>dispatch((incrementByAmount(Number(inputRef.current.value))))}>
                increment by {inputRef.current.value}
            </button>
        </>
    );
}