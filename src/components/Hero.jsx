/* This example requires Tailwind CSS v2.0+ */
import '../index.css'
import Buttons from './Buttons'
import profilePic from '../assets/profileF.png'
import NavBar from './NavBar'
import Marquee from "react-fast-marquee";
import JAVASCRIPT from '../assets/javascript.png'
import CSS from '../assets/css.png'
import HTML from '../assets/html5.png'
import MONGO from '../assets/MongoDB.png'
import EXPRESS from '../assets/express.png'
import REACT from '../assets/React.png'
import NPM from '../assets/npm.png'
import NODE from '../assets/node.png'

export default function Hero() {


  return (
<>
<div>
<NavBar/>

</div>
<section className="containerSection">
      <div className="containerHero">
        <h1 className="font-['Josefin_Sans'] font-bold">HI! I´M KEVIN.</h1>      
          <h2 className="font-['Josefin_Sans'] font-semibold" style={{fontSize:'6vh', color:'#FFC23C', textShadow:'2px 2px 2px 2px black', marginTop:'3vh'}}>FULL STACK MERN DEVELOPER</h2>
          <div className="flex justify-center"><Buttons/></div>

</div>
<div className='containerImg'>
  <img src={profilePic} alt="PicProfile" className='PicProfile' />
</div>

</section>
<div>
<Marquee className="marqueeReact marker:text-white" gradientColor='false' speed={90}><img src={REACT} alt="React.js" />  | <img src={JAVASCRIPT} alt="javascript" /> | <img src={HTML} alt="html" /> | <img src={CSS} alt="css" /> | <img src={NODE} alt="Node.js" /> | <img src={EXPRESS} alt="Express" /> | <img src={MONGO} alt="Mongo DB" /> | <img src={NPM} alt="NPM" /></Marquee>
</div>
</>
  )
}
