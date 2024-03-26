import React from 'react'
import './main.css'
import Image from 'next/image'
import Cave from "../public/assets/shh.svg"


const page = () => {
  return (
    <>
    <div className="main">
      <div className="glass">
      <div className="tealblob"></div>
      <div className="pinkblob"></div>
      <div className="greenblob"></div>
      <div className="glassblur"></div>
        <div className="noise"></div>
        <div className="herowrap">

      <div className="hero">
        <h1> <span className="barrier">
          <div className="inner">The</div></span> Seed  <span className="barrier"> 
          <div className="inner">of your thoughts when</div><div className="inner">planted at the right time can </div><div className="inner">shape</div></span> Your <span className="barrier"><div className="inner">reality, a vivid vision </div><div className="inner">that bloomed into a great</div></span>  Idea.</h1>
      </div>
        </div>
      </div>
    </div>

    <div className="main2">
      <div className="hero2">

    <Image className='cave' src={Cave}  />
    <h1>Notes</h1>
      </div>

    </div>




  
    </>
  )
}

export default page