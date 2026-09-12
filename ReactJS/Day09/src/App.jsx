import { useState } from "react"
function App(){
    const[name,setName]=useState("");
    const[age,setAge]=useState('');
    const[pass,setPass]=useState('')
    function handleSubmit(e){
        e.preventDefault();
        console.log(setName(e.target.value));
        console.log(setAge(e.target.value));
        console.log(setPass(e.target.value));
        
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
            <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />
            <button type="submit">Submit</button>
            </div>
            
        </form>
        </>
    )

}
export default App;