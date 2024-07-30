import React, { useState } from 'react'

import { json, useNavigate } from 'react-router-dom';

const background = require('../bg.jpg')




export default function Login() {
  let navigate = useNavigate();
  const [creditation, setCreditation] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    setCreditation({ ...creditation, [e.target.name]: e.target.value })
  }

  const handelSubmit = async(e) => {
    e.preventDefault()
    const respose = await fetch("http://localhost:4000/api/auth/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(creditation)
    })
    const data = await respose.json()
    console.log(data)
    if(data.success){
      localStorage.setItem('token', data.token)
      navigate('/')
      }else{
        alert('Invalid email or password')
      }
  }

  return (
    <form onSubmit = {handelSubmit}>
      <div className="container my-3" >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input value={creditation.email} type="email" className="form-control" id="email" onChange={onChange} name='email' />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Password </label>
          <input value={creditation.password} type="password" onChange={onChange} id="password" className="form-control" name='password' />

        </div>

        <button type="submit" className="btn btn-primary">Login</button>

      </div>
    </form>
  )
}

