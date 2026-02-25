import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./List.css";

function List() {

const [employees,setEmployees] = useState([]);

const navigate = useNavigate();

useEffect(()=>{

fetch("http://localhost/getemployees.php")
.then(res=>res.json())
.then(data=>{
console.log("API DATA:",data);
setEmployees(data);
});

},[]);


return(

<div className="list-bg">

<div className="list-box">


{/* Logout Top Right */}
<div style={{textAlign:"right"}}>
<button
className="logout-btn"
onClick={()=>navigate("/")}
>
Logout
</button>
</div>


<h2>Employee List</h2>


<table>

<thead>

<tr>
<th>Name</th>
<th>Salary</th>
<th>City</th>
<th>Action</th>
</tr>

</thead>


<tbody>

{employees.map((emp,index)=>(

<tr key={index}>

<td>{emp.name}</td>

<td>{emp.salary}</td>

<td>{emp.city}</td>

<td>

<button
onClick={()=>navigate(`/details/${index}`,{state:emp})}
>
Details
</button>

</td>

</tr>

))}

</tbody>

</table>


{/* View Chart Bottom */}
<div style={{
textAlign:"center",
marginTop:"20px"
}}>

<button
onClick={()=>navigate("/chart")}
style={{
padding:"10px 25px",
background:"#2d6cdf",
color:"white",
border:"none",
borderRadius:"5px",
fontSize:"16px",
cursor:"pointer"
}}
>

View Chart

</button>

</div>


</div>

</div>

);

}

export default List;