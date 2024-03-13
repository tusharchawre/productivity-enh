import React from 'react'
import './main.css'




const page = () => {
  return (
    <>
    <div className="nav">
      <div className="logo">

     <img src="/assets/logo.png" alt="" />
      </div>
      <div className="nav-items">
        <a href=""><h3>Uses</h3></a>
        

        <a href=""><h3>About</h3></a>
        <a href=""><button>Login</button></a>

        
       
      </div>

    </div>
    <div className="hero">
      <img src="/assets/Note1.png" alt="" />
      <img src="/assets/Note 2.png" alt="" />
      <img src="/assets/Note 3.png" alt="" />
    </div>
    <div className="heroblob">
      <div className="blob2"></div>
      <div className="blob1"></div>

    </div>
    </>
  )
}

export default page