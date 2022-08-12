/* This example requires Tailwind CSS v2.0+ */
import '../index.css'
import Buttons from './Buttons'

export default function Hero() {


  return (

      <div className="flex flex-col justify-center items-center font-['Francois_One']">
        <h1 className="line-1 anim-typewriter text-white font">Hi!👋 I´m Kevin Ocampo</h1>
          <h2 className="line-1 anim-typewriter" style={{fontSize:'6vh', color:'#FFC23C', textShadow:'2px 2px 2px 2px black', marginTop:'3vh'}}>I´m a Full Stack MERN Dev</h2>
          <div className="buttons-div"><Buttons/></div>
        
      </div>

  )
}
