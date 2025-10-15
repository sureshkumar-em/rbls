import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom';
import "./Regi.css"

const Login = () => {
    const navigate = useNavigate();

    const [Data,setData] = useState({
        email : "",
        password:"",
    });

    const[msg,setMsg] = useState("");

    const handleChange = (e) => {
        const {name,value} = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }) );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:7000/api/login', Data);
            setMsg("Successfully")
            console.log(res.data)
            setTimeout(() => {
            navigate("/users")
            },2000);

        } catch (error) {
            setMsg('wrong password or wrong email')
            console.log(error)
        }
        console.log("form Data:" , Data)
    }

  return (
    <div className='container'>
        <form action="" id='form' onSubmit={handleSubmit}>
            <h1>Login</h1>

            {msg && (
                <div className= {`alert ${
                    msg.includes("Successfull") ? "alert-success" : "alert-danger"

                }text-center py-2`}>
                        {msg}
                </div>
            )}
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
                <label >Password</label>
                <input type="password" id="password" name="password"
                onChange={handleChange}
                  value={Data.password}
                  required
                  />
                </div>

            <button type="submit" >Submit</button>

                 <p className='text-center'>
         You have no account? <Link style={{textDecoration:"none"}} to={'/register'}>Register here</Link>
                        </p>
        </form>

    </div>
  )
}

export default Login