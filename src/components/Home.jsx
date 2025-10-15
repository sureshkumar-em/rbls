import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.css";


function Home() {

  const navigate = useNavigate();
  return (
   <section className="d-flex align-items-center justify-content-center text-center bg-light" style={{ minHeight: "100vh" , minWidth: "100%"}}>
      <div className="container-fluid">
        <h1 className="display-4 fw-bold text-primary">Welcome to My Website</h1>
        <p className="lead text-secondary mb-4">
          We build modern and responsive web solutions to help your business grow.
        </p>
                   
        <a href="" className="btn btn-primary btn-lg me-2" onClick={() => navigate("/login")} >Login </a>
        <a href="" className="btn btn-outline-secondary btn-lg"  onClick={() => navigate("/register")}>Sign Up</a>
      </div>
    </section>
  )
}

export default Home