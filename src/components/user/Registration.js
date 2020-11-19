import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
    const [success, setSuccess]= useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState("false");

  useEffect(() => { 
    ((validName() && validPassword() && validEmail()) ? setValid("") : setValid("false"));
    }, [name, email, password])

    const validName =()=>{
      return ((name.length >=3) ? true : false);
    }
     
    const validPassword =()=>{
      return ((password.length >=3) ? true : false);
    }

    const validEmail = () => {
      const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      return expression.test(String(email).toLowerCase())
    }

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
      .then(response => response.json()).then(data => {if(data.id !== 0){setSuccess(true)}});
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

    if (!success){
  return (
    <div>
        <p>Name:</p>
        <input type='text' name='username' value={name} onChange = {handleName} />
        <p>Email:</p>
        <input type='text' name='email' value={email} onChange = {handleEmail} />
        <p>Password:</p>
        <input type='password' name='password' value={password} onChange = {handlePassword} />
        <br></br><button disabled={valid} onClick={createUser}>Register</button>
      </div>
  );
  }
  else {
    return( <div>
    <h1>Successful registration!</h1>
    <Link to="/">Go to main...</Link>
    </div>
      )
  }

}
  export default Registration;
