import { useState } from "react"
function App(){
    const[name,setName]=useState("");
    const[age,setAge]=useState('');
    const[pass,setPass]=useState('')
    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
        console.log(age);
        console.log(pass);   
    }

    console.log("render");
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              /> </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );

}
export default App;