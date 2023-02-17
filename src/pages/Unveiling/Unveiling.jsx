import React from 'react'
import './Unveiling.css'
import Robot from '../../assets/robot.png'

export default function Unveiling() {
  return (
    <div className='unveiling-mainsection'>
      <h1 className='unveiling-introtext'>Algorythm Unveiling</h1>
      <div>
        <div className='unveiling-main-content'>
            <div className='robot-image'>
                <img className='robot' src={Robot} alt='robot'/>
            </div>
            <div className='unveiling-content'></div>
        </div>
      </div>
    </div>
  )
}
