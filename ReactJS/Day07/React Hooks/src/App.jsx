import { useState } from "react";
function App(){
    let[count,setCount]=useState(0);
    return(
        <>
        <h1>Counter:{count}</h1>
        <button onClick={(e)=>setCount(count+1)}>Increment</button>
        </>

    )
}
export default App;