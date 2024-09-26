import React, {useContext,useState} from 'react'
import { json, useNavigate } from 'react-router-dom';
import showAlertContext from '../context/ShowAlertContext';
import Alert from './Alert'
function SignUp() {
    const context = useContext(showAlertContext);
    const { showAlert , alert} = context;
    let navigate = useNavigate();
    const [creditation, setcreditation] = useState({
        email: '',
        password: '',
        name:''
    })

  const onChange = (e) =>{
        setcreditation({...creditation, [e.target.name]: e.target.value})
         
    }
    const handelCreateAccount = async(e) =>{
        e.preventDefault()
        const respose = await fetch("http://localhost:4000/api/auth/signUp",{
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
            showAlertt(`${data.error}`)
          }


    }

    const showAlertt = (message) => {
        showAlert(message,'danger')
      }
    return (
       <>
         <Alert alert = {alert}/>
        <div className='container mt-3'>
            <h1 className='mb-2' style={{fontSize : "30px"}}>Sign Up</h1>
            <form onSubmit={handelCreateAccount}>
            <div class="mb-3">
                    <label  class="form-label">User Name</label>
                    <input type="text" class="form-control" id="name" name='name' onChange={onChange}/>
                   
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange}/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name='password' onChange={onChange} minLength={5} required/>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
       </>
    )
}

export default SignUp