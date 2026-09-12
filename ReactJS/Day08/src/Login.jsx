import { useState } from "react";
import { useRef } from "react";
function Login(){
    // const[email,setEmail]= useState("");
    // const[password,setPassword]=useState("");
    const emailRef = useRef(null);
    const passwordRef = useRef(null); 
    console.log("render");
    function handleSubmit(e){
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef}></input>
            <input type="password" ref={passwordRef} />
            <button type="submit">Submit</button>
        </form>

        </>

    )

}
export default Login;