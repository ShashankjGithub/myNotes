import React from 'react'

function Alert(props) {
  return (
   props.alert && <div className="container mt">
    <div className='mt-2'>
        <div className={`alert alert-${props.alert.type}`} role="alert" >
            {props.alert.msg}
        </div>
    </div>
   </div>
  )
}

export default Alert