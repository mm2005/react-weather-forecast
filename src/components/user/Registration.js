import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const createUser = () => {
      let user = {
        Name:name,
        Email:email,
        Password: password
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    fetch('https://localhost:44336/api/user/registration', requestOptions)
        .then(response => console.log("resp: ", response));
      }

  const handleName = event => {
    setName(event.target.value);
    }
  const handleEmail = event => {
    setEmail(event.target.value);
    }
  const handlePassword = event => {
    setPassword(event.target.value);
    }


  return (
    <div>
        <p>Name:</p>
        <input type='text' name='username' value={name} onChange = {handleName} />
        <input type='text' name='email' value={email} onChange = {handleEmail} />
        <input type='password' name='password' value={password} onChange = {handlePassword} />
        <button onClick={createUser}>Register</button>
      </div>
  );}
  export default Registration;
