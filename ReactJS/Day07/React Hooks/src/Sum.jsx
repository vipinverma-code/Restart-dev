function Sum(){
    function calculateSum(){
        let sum = 0;
        for(let i=1; i<=1000;i++){
            sum+=i;
        }
        return sum;
     
    }
    const totalSum= calculateSum();
    console.log("Sum render");
    console.log(totalSum);

    return(
        <>
        <h1>This is the math libraray</h1>
        <h2>Sum:{totalSum}</h2>
        </>
    )




}
export default Sum;