import React, { useContext,useState } from 'react'

import { json, useNavigate } from 'react-router-dom';
import showAlertContext from '../context/ShowAlertContext';
import Alert from './Alert'
const background = require('../bg.jpg')




const Login = () => {

  const context = useContext(showAlertContext);
  const { showAlert , alert} = context;

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
      showAlertt("Login Success",'success')
      }else{
        showAlertt()
      }
  }

  const showAlertt = () => {
    showAlert('Invalid email or password','danger')
  }

  return (
    <>
     <Alert alert = {alert}/>
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
    </>
    
  )
}

export default Login;