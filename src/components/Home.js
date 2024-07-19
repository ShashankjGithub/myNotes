import React from 'react'
import InputForm from './InputForm'

import Notes from './Notes'



const Home = () => {

  
  return (
     <>
      <div className="container my-3">
        <h3>
          <span className="text-danger">Welcome to</span> My Notes
        </h3>
        <InputForm/>
       
        <Notes/>
      </div>
     </>
  )
}

export default Home

