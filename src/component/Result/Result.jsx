import { useSelector } from "react-redux";

export const Result = () =>{
    const result = useSelector((state) => state.counter.value)
    return (
        <p>{result}</p>
    );
}