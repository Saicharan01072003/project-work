import { useLocation,useNavigate } from "react-router-dom";

function PhotoResult(){

const location=useLocation();

const navigate=useNavigate();

return(

<div style={{textAlign:"center"}}>

<h2>Photo Result</h2>

<img src={location.state} width="300"/>

<br/>

<button onClick={()=>navigate("/list")}>
Back
</button>

</div>

);

}

export default PhotoResult;