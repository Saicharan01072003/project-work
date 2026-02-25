import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "../App.css";

function Details() {

const location = useLocation();
const navigate = useNavigate();

const emp = location.state;

const videoRef = useRef(null);
const canvasRef = useRef(null);

const [stream,setStream] = useState(null);



/* START CAMERA */

const startCamera = async()=>{

const mediaStream = await navigator.mediaDevices.getUserMedia({
video:true
});

videoRef.current.srcObject = mediaStream;

setStream(mediaStream);

};



/* CAPTURE PHOTO */

const capturePhoto = ()=>{

const video = videoRef.current;

const canvas = canvasRef.current;

const ctx = canvas.getContext("2d");

canvas.width = video.videoWidth;
canvas.height = video.videoHeight;

ctx.drawImage(video,0,0);

const image = canvas.toDataURL("image/png");


/* STOP CAMERA PROPERLY */

stream.getTracks().forEach(track=>track.stop());

video.srcObject=null;


/* GO TO RESULT PAGE */

navigate("/photo",{state:image});

};



return(

<div style={{padding:"20px"}}>

<h2>Employee Details</h2>

<table border="1" width="50%">

<tbody>

<tr>
<td>Name</td>
<td>{emp.name}</td>
</tr>

<tr>
<td>Salary</td>
<td>{emp.salary}</td>
</tr>

<tr>
<td>City</td>
<td>{emp.city}</td>
</tr>

</tbody>

</table>

<br/>

<button onClick={startCamera}>
Open Camera
</button>

<br/><br/>

<video
ref={videoRef}
autoPlay
width="300"
/>

<br/><br/>

<button onClick={capturePhoto}>
Capture Photo
</button>

<br/>

<canvas
ref={canvasRef}
style={{display:"none"}}
/>

</div>

);

}

export default Details;