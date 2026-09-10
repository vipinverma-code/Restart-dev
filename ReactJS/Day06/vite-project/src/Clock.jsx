import Counting from "./Counting";
import { useState } from "react";
function Clock(){
    const [clocks,setClocks]=useState(["A","B","C"]);
    function handleChange(){ 
        setClocks(["D",...clocks])
    }
    return(
        <>
        <h1>Clock:{clocks}</h1>
        <button onClick={handleChange}>Increment Clocks</button>
        <div>
         {clocks.map((clock)=> <Counting name={clock}/>)}
        </div>
        </>
    )
}
export default Clock;