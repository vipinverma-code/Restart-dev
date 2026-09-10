
function Food({foods}){
    return(
        <>
        <ul>
            {foods.map(food=> <li key={food}>{food}</li>)}
        </ul>
        
        </>

    )
}
export default Food;