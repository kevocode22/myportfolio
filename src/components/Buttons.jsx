import React from 'react'
import '../buttons.css'


const Buttons = () => {

  let linkedin = "https://www.linkedin.com/in/kevinocampo22/"
  let git = "https://github.com/kevocode22"

  return (
    <>

      <a href={linkedin}><button className="buttonHero" href={linkedin} style={{ width: '25vh', backgroundColor: '#100F0F', color: 'white', display: 'flex', justifyContent: 'center', marginInline: '4vh' }}>
        <span style={{ 'marginRight': 7, letterSpacing: 1 }}>Linkedin</span>
        <img src="http://cdn.onlinewebfonts.com/svg/img_24845.png" style={{ height: '5vh', backgroundColor:'white', borderRadius:'50%' }} alt="Linkedin" />
      </button></a>

      <a href={git}>
        <button className="buttonHero" style={{ width: '25vh', backgroundColor: '#100F0F', color: 'white', display: 'flex', justifyContent: 'center' }}>
          <span style={{ 'marginRight': 7, letterSpacing: 1 }}>GitHub</span>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style={{ height: '5vh', backgroundColor:'white', borderRadius:'50%' }} alt="GitHub" />
        </button></a>

    </>

  )
}

export default Buttons