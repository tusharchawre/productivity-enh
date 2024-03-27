"use client"
import React from 'react'
import './main.css'
import Image from 'next/image'
import Cave from "../public/assets/shh.svg"
import Clock from './clock'









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
          <div className="inner">The</div> </span><span className='seed'>Seed</span> <span className="barrier"> 
          <div className="inner">of your thoughts when</div><div className="inner">planted at right time</div><br /></span><span className='barrier'><div className="inner"> can shape</div></span><span className="your"> Your </span><span className="barrier"><div className="inner">reality. A vision </div></span><span className='barrier'><div className="inner">that bloomed into great</div></span> <span className='idea'> Idea</span>.</h1>
      </div>
        </div>
      </div>
    </div>
{/* 
    <div className="main2">
      <div className="hero2">

    <Image className='cave' src={Cave}  />
    <div className="herotext2">

    <h1>Note</h1>
    <h2>It</h2>
    <h2>Down.</h2>
    </div>
      </div>

    </div> */}


    <div className="main2">
      <div className="main2blur"></div>


      <div className="tealblob2"></div>
      <div className="purblob2"></div>


      <div className="ver-glass" id='glass'>
      <div className="noise"></div>

        


<img className="goodnotes"  src="/assets/goodnotes.jpg" alt="" srcset="" />      
</div>

<div className='graph-glass' id='glass'>
<img className="graphs" src="/assets/graphs.jpeg" alt="" srcset="" />      

</div>

<div className='shit-glass' id='glass'>
<div className="noise"></div>

  <div className="circle">

  <svg>
    <circle className='bg' cx="57" cy="57" r="52" />
    <circle className='progress' cx="57" cy="57" r="52" />

  </svg>
  </div>
  <div className="text">TEri bkc</div>

</div>

<div className="clock-main" id="glass">
<div className="noise"></div>
<Clock />

</div>
<img className="graphs sht2" src="/assets/Designer.png" alt="" srcset="" />      
<div className="vividImage" id="glass">
<div className="noise"></div>
<img className="graphs" src="/assets/Designer.png" alt="" srcset="" />      

</div>






    </div>






  
    </>
  )
}

export default page