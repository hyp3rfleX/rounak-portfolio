import React from 'react'
import './Home.css'
import Monitor from '../Assets/Monitor.png'

export default function Home() {
  return (
    <div>
      <div className = "headerContainer">
        <div className = "headerChild">
          <div className = "headerText">
            <span className = "headerTitle">
              Rounak Stanley
            </span>
            <br/>
            <span className = "headerSubTitle">
              {"//Software Engineer"}
            </span>
          </div>
          <img src = {Monitor} className = "monitorImage" alt = "Monitor" />
        </div>
      </div>
    </div>
    
  )
}
