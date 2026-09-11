import { useState } from "react";
// import Sum from "./Sum";
import NaturalSum from "./NaturalSum";
function App(){
    let[count,setCount]=useState(0);
    const[number,setNumber]=useState(1000);
    
    function calculatePrime(){
        let total=0;
        if(number>1)
            total++;
        for(let i=3; i<=number;i++){
            total++;
            for(let i=3; i<=number;i++){
                total++;
                for(let j=2; j<i;j++){
                    if(i%j==0){
                        total--;
                        break;
                    }
                }
            }
            return total;
        }
    }

    const prime= calculatePrime();


    console.log("app render");
    return(
        <>
        <h1>Counter:{count}</h1>
        <button onClick={(e)=>setCount(count+1)}>Increment</button>
        <h2>Your Current Number:{number}</h2>
        <button onClick={()=>setNumber(number+100)}>Increment Number</button>
        <h3>Total prime number:{prime}</h3>
        <NaturalSum number={1000}/>
        </>
    )
}
export default App;