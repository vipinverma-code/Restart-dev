import { useState } from "react";
import Sum from "./Sum";
function App(){
    let[count,setCount]=useState(0);
    console.log("app render");
    return(
        <>
        <h1>Counter:{count}</h1>
        <button onClick={(e)=>setCount(count+1)}>Increment</button>
        <Sum/>
        </>
    )
}
export default App;