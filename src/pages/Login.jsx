import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const login = () => {

    if(username==="test" && password==="123456")
    {
        navigate("/list");
    }
    else
    {
        alert("Invalid Login");
    }

  };

  return(

<div style={{

height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"linear-gradient(to right,#67b26f,#4ca2cd)"

}}>

<div style={{

background:"white",
padding:"40px",
borderRadius:"10px",
boxShadow:"0px 0px 10px gray"

}}>

<h2>Login</h2>

<input
placeholder="Username"
onChange={(e)=>setUsername(e.target.value)}
style={{padding:"10px",margin:"10px"}}
/>

<br/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
style={{padding:"10px",margin:"10px"}}
/>

<br/>

<button onClick={login} style={{padding:"10px 20px"}}>
Login
</button>

</div>

</div>

);

}

export default Login;