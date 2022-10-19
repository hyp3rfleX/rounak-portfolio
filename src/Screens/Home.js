import React from 'react'
import './Home.css'
import Monitor from '../Assets/Monitor.png'

export default function Home() {
  return (
    <div>
      <div className = "introScreen">
        <div className = "mainFlexContainer">
          <div className = "introName">
              Rounak Stanley
          </div>
          <div className = "pictureContainer">
            <img className = "monitorImage" src = {Monitor} />
          </div>
        </div>
      </div>
    </div>
  )
}
