import { useDispatch } from "react-redux";
import { increment } from "../../features/counterSlice";

export const ButtonAddOne = () =>{
    const dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(increment())}>
            add one
        </button>
    );
}