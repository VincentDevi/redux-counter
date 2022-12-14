import { useDispatch } from "react-redux";
import { decrement } from "../../features/counterSlice";

export const ButtonDecOne = () =>{
    const dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(decrement())}>
            decrement by one
        </button>
    );
}