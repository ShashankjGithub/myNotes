import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

const background = require('../bg.jpg')




export default function Login() {
  let navigate = useNavigate();
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  const setUserNameText = (event) => {
    setUserName(event.target.value)
  }

  const setUserPasswordText = (event) => {
    setPassword(event.target.value)
  }


  const handelSubmit = () =>{

  }

  return (
    <div className = "container my-3" onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Password </label>
        <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock"/>

      </div>
     
      <button type="button" className="btn btn-primary">Login</button>

   

    </div>
  )
}

