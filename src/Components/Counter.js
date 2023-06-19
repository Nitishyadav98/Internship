import { useContext } from "react";
import Value from "./value";
import { CounterProvider, counterContext } from "../Context/counterContext";

const Counter =()=>{

    const [counter, setCounter] = useContext(counterContext) 
    // const setCounter = useContext(counterContext)
    console.log(counter, setCounter)

    return(
        <div className="bg-slate-300 flex justify-center items-center min-h-screen">
            <button onClick={()=>{setCounter(counter+1)}} className="bg-indigo-500 text-xl text-white px-12 py-3 rounded-md">+</button>
            {<Value/>}
            <button onClick={()=>{setCounter(counter-1)}} className="bg-indigo-500 text-xl text-white px-12 py-3 rounded-md">-</button>
    </div>)
}

export default Counter;