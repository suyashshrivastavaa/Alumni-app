import React, { useState } from "react";
import ReactDOM from "react-dom";
import './LoginForm.css'
import { useRef } from 'react';

function LoginForm() {
  

  const emailRef = useRef('');
    const passwordRef = useRef('');


  async function submitHandler(e) {

    e.preventDefault();


    const details = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const response = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
console.log(data);
  }
  
  

  


  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="uname" ref={emailRef} required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" ref={passwordRef} required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
      </div>
    </div>
  );
}


export default LoginForm