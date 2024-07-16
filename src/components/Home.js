import React, { useContext } from 'react'
import InputForm from './InputForm'
import notesContext from '../context/NotesContext'



const Home = () => {
  const context = useContext(notesContext)
  const {notes,setnotes} = context;
  
  return (
     <>
      <div className="container my-3">
        <h3>
          <span className="text-danger">Welcome to</span> My Notes
        </h3>
        <InputForm/>
        <h3>
          Your Notes
        </h3>
        {
          notes.map((note)=>{
            return note.title;
          })
        }
      </div>
     </>
  )
}

export default Home

