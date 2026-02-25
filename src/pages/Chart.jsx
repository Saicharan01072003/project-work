import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Chart() {

  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    fetch("http://localhost/getemployees.php")
      .then(res => res.json())
      .then(data => {
        console.log("API RESPONSE:", data);
        setEmployees(data.slice(0,10));
      });

  }, []);

  return (

    <div style={{
      padding:"30px",
      background:"linear-gradient(to right,#c2e9fb,#a1c4fd)",
      minHeight:"100vh"
    }}>

      <div style={{
        background:"white",
        padding:"20px",
        borderRadius:"10px",
        width:"80%",
        margin:"auto",
        boxShadow:"0px 0px 10px gray"
      }}>

        <h2 style={{textAlign:"center"}}>
          Salary Chart
        </h2>

        <button
        onClick={()=>navigate("/list")}
        style={{
          marginBottom:"10px",
          padding:"6px 12px"
        }}>
          Back
        </button>

        <div style={{
          width:"100%",
          height:"350px"
        }}>

        <ResponsiveContainer>

          <BarChart
          data={employees}
          margin={{top:20,right:30,left:20,bottom:20}}
          >

            <CartesianGrid strokeDasharray="3 3"/>

            <XAxis dataKey="name"/>

            <YAxis/>

            <Tooltip/>

            <Bar
            dataKey="salary"
            fill="#2d6cdf"
            barSize={40}
            />

          </BarChart>

        </ResponsiveContainer>

        </div>

      </div>

    </div>

  );

}

export default Chart;