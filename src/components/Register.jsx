import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import"./Regi.css"

const Register = () => {
    const navigate = useNavigate();

    const [Data,setData] = useState({
        name : "",
        email : "",
        phone : "",
        password:"",
    });

    const [msg,setMsg] = useState("");

    const handleChange = (f) => {
        const {name,value} = f.target;

        setData((prev) => ({
            ...prev,
            [name] : value,
        }));
   };

   const handleSubmit = async (f) => {
    f.preventDefault();
    try {
        const res = await axios.post('http://localhost:7000/api/add' , Data);
        setMsg("Successfully")
        console.log(res.data)
        setTimeout(() => {
            navigate("/")
        }, 2000);
    } catch (error) {
       setMsg('Registeration Failed..!') 
       console.log(error);
    }
    console.log("form Data:" , Data);
   }
  return (
    <div className='d-flex justify-content-center align-items-center  bg-light' style={{ margin:"0"}}>
       <form action="" id="form" onSubmit={handleSubmit} style={{ margin:"0"}} >
            <h1>Register</h1>
            {msg && (
            <div className= {`alert ${
                msg.includes("Successfull") ? "alert-success" : "alert-danger"
            } text-center py-2`}>
             {msg}
            </div>
         )} 
            <div className="input-group" >
                <label >Username</label>
                <input 
                type="text"
                 id="username"
                  name="name"
                  onChange={handleChange}
                  value={Data.name}
                  required
                />
                
            </div>
            <div className="input-group">
                <label >Email</label>
                <input
                 type="text"
                 id="email" 
                name="email"
                onChange={handleChange}
                  value={Data.email}
                  required/>
                
            </div>
            <div className="input-group">
                <label >Phone</label>
                <input type="tel" id="phone" name="phone"
                onChange={handleChange}
                  value={Data.phone}
                  required
                  />
                
            </div>
            <div className="input-group">
                <label >Password</label>
                <input type="password" id="password" name="password"
                onChange={handleChange}
                  value={Data.password}
                  required
                  />
                
            </div>
                   
                        <button type="submit" >Submit</button>

                        <p className='text-center'>
          Already have an account?  <Link style={{textDecoration:"none"}} to={'/login'}>Signin here</Link>
                           
                        </p>

            </form>
        

    </div>
  )
}

export default Register