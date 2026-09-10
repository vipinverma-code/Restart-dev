function Sum(){
    function calculateSum(){
        let sum = 0;
        for(let i=1; i<=1000;i++){
            sum+=i;
        }
        return sum;
     
    }
    const totalSum= calculateSum();
    console.log(totalSum);


}
export default Sum;