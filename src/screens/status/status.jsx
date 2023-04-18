
import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"
import "./auth.css"


function Authentication(){
    const [auth, setauth]= useState("")
    const navigate= useNavigate()

    const handlesubmit=(e)=>{
        e.preventDefault()
        if (auth === "student"){
            navigate("/stlogin")
        }
        else if(auth === "staff"){
            navigate("/sflogin")
        }
    }   
    return (
        <div id="outer_div">
        <nav id="navbar-section">
           <h1 id="page-title">Welcome to LMS</h1>
        </nav>
        <div id="main_div">
            <h1  id='box_heading'>Authentication</h1>
                <div>
                    <p>We are delighted that you chose our service</p>
                    <p>Kindly choose one of the two</p>
                </div>
                <form id="radio_buttons" onSubmit={handlesubmit}>
                    <input type="radio" id="stu" name="age" value="student" onClick={(e)=>{setauth(e.target.value)}}/>
                    <label for="stu">Student</label><br/>
                    <input type="radio" id="stf" name="age" value="staff"   onClick={(e)=>{setauth(e.target.value)}}/>
                    <label for="stf">Staff</label><br/>  
                    <input type="submit" value="Continue" id="button" />
                </form>
        </div>
    </div>
)
}

export default Authentication