import { useState } from "react";
function Counting({name}){
    const[count,setCount]=useState(0);
    return(
        <>
        <h1>Our first Counter App:{name}</h1>
        <h2>Counter:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )

}
export default Counting;