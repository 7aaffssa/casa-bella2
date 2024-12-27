import React, { useEffect, useRef } from "react";
import "./Login.css";
// import Pages from "./components/pages/Pages"

export default function LoginRegister() {
  
  useEffect(()=>{
    document.title="Login and Registration"
  },[])
  
  const flipDiv=useRef(null)
  const toRegister=()=>{
    flipDiv.current.className="flipper flip-action"
  }
  const toLogin=()=>{
    flipDiv.current.className="flipper"
  }
  return (
    <div className="flipper" ref={flipDiv}>
      <div className="flippable">
        <Login toRegister={toRegister}/>
      </div>
      <div className="register flippable">
        <Register toLogin={toLogin}/>
      </div>
    </div>
  );
}


const Login = ({toRegister}) => {
  return (
    <div className="container2">
      <h2  className="title2">Welcome back</h2>
      <p className="title2">Enter details to login..</p>
      <div className="input-container2">
        <span>
          <input className="input2"t placeholder="Enter email..." /></span>
      </div>
      <div className="input-container2">
        <input className="input2" placeholder="Enter password..." type="password" />
      </div>
      <button className="button2">Login</button>
      <p className="p" >Don't have an account?
        <strong className="strong" onClick={toRegister}>Register</strong></p>
    </div>
  );
  
};


const Register = ({toLogin}) => {
  return (
    <div className="container2">
      <h2  className="title2">Create account</h2>
      <div className="input-container2">
        <input className="input2" placeholder="Enter username..." />
      </div>
      <div className="input-container2">
        <input className="input2" placeholder="Enter email..."/>
      </div>
      <div className="input-container2">
        <input className="input2" placeholder="Enter password..."type="password"  />
      </div>
      <button className="button2" >Register</button>
      <p className="p">Already have an account? 
        <strong className="strong" onClick={toLogin}>Login</strong></p>
    </div>
  );
};