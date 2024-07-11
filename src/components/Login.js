import React from 'react'
const background = require('../bg.jpg')
function login() {
  return (
    <div>
        <div style={{
            backgroundImage : `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "100vh",
          
        }} > Hello </div>
    </div>
  )
}

export default login