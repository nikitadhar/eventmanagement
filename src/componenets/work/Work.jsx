import React from 'react'
import workimg1 from '../../images/workimg1.jpg';
import workimg2 from '../../images/workimg2.jpg';
import workimg3 from '../../images/workimg3.jpg';
import workimg4 from '../../images/workimg4.jpg';
import workimg5 from '../../images/workimg5.jpg';
import logo from '../../images/black-bg.png';
import "./work.css"

export default function Work() {
  return (
    <>
    <div className='work-main'>
       
        <p className='stay'>STAY SOCIAL</p>
       <a href="/" className='follow-anchor'>Follow Us On Instagram</a>
       <div className='img-container'>
        <img src={workimg1} alt="workimg1"  />
        <img src={workimg2} alt="workimg2" />
        <img src={workimg3} alt="workimg3" />
        <img src={workimg4} alt="workimg4" />
        <img src={workimg5} alt="workimg5" />
       </div>
    </div>
    <div className='logo-container'>
      <div >
     <p className='copyright_para'>COPYRIGHT © 2023 Memory creation </p>   
      </div>
      <div><img src={logo} alt="logo" className='work_logo' /></div>
      <div>
        <p className='ownered'>owner by Dheeraj Saha</p>
      </div>
    </div>
    </>
  )
}
