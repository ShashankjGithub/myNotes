import React, {useState} from 'react'
import Loginn, { Context, Password, Submit, Username } from '@react-login-page/page7';
import {useNavigate} from 'react-router-dom';

const background = require('../bg.jpg')




export default function Login() {
  let navigate = useNavigate();
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  
  const UserLogin = () =>{
   console.log(username)
   console.log(password)
   if(username === "admin" && password === "admin"){
   
     navigate('/home')
   }
   // eslint-disable-next-line no-lone-blocks
   
  }
  const setUserNameText = (event)=>{
    setUserName(event.target.value)
  }

  const setUserPasswordText = (event)=>{
    setPassword(event.target.value)
  }


  return (
    <div>
      <Loginn style={{height : "100vh"}}>
        <Username value = {username} onChange={setUserNameText}>
         
        </Username>
        <Password value={password} onChange={setUserPasswordText}>

        </Password>
      <Submit name='Login' onClick={UserLogin}>
       Login
      </Submit>      
      </Loginn>
      
    </div>
  )
}

