import React from "react";
const NaturalSum=React.memo(({number})=>{
    function calculateNaturalSum(){
        let sum=0;
        for(let i=1;i<=number;i++){
            sum+=i;
        }
        return sum;

    }
    const total= calculateNaturalSum();
    console.log("Natural Sum render crazy");
    console.log(total);
    return(
        <>
        <h1>Natural Sum:{total}</h1>
        </>
    )
})

export default NaturalSum;