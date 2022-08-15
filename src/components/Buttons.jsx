import React from 'react'
import '../buttons.css'
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'

const Buttons = () => {

  let linkedin = "https://www.linkedin.com/in/kevinocampo22/"
  let git = "https://github.com/kevocode22"

  return (
    <>

      <a href={linkedin}><button href={linkedin} style={{ width: '25vh', backgroundColor: '#100F0F', color: '#ffff', display: 'flex', justifyContent: 'center', marginInline: '4vh' }}>
        <span style={{ 'marginRight': 7, letterSpacing: 1 }}>Linkedin</span>
        <img src={Linkedin} style={{ height: '3vh' }} alt="Linkedin" />
      </button></a>

      <a href={git}>
        <button style={{ width: '25vh', backgroundColor: '#100F0F', color: '#ffff', display: 'flex', justifyContent: 'center' }}>
          <span style={{ 'marginRight': 7, letterSpacing: 1 }}>GitHub</span>
          <img src={Github} style={{ height: '3vh' }} alt="GitHub" />
        </button></a>

    </>

  )
}

export default Buttons