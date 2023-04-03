/* This example requires Tailwind CSS v2.0+ */
import '../index.css'
import Buttons from './Buttons'
import profilePic from '../assets/profileF.png'
import Nav from './Nav'
import Cards from './Cards'
import Marquee from "react-fast-marquee";
import JAVASCRIPT from '../assets/javascript.png'
import CSS from '../assets/css.png'
import HTML from '../assets/html5.png'
import MONGO from '../assets/MongoDB.png'
import EXPRESS from '../assets/express.png'
import REACT from '../assets/React.png'
import NPM from '../assets/npm.png'
import NODE from '../assets/node.png'
import GITHUB from '../assets/github.png'
import REDUX from '../assets/redux.png'
import Contact from  './Contact'
import 'animate.css';

export default function Hero() {
 
  return (
<>
<div>
<Nav/>

</div>
<section className="containerSection">
      <div className="containerHero">
        <h1 className="font-['Josefin_Sans'] font-bold animate__animated animate__bounceInLeft">HI! I´M KEVIN.</h1>      
          <h2 className="font-['Josefin_Sans'] font-semibold animate__animated animate__bounceInLeft" style={{fontSize:'6vh', color:'#FFC23C', textShadow:'2px 2px 2px 2px black', marginTop:'3vh'}}>FULL STACK MERN DEVELOPER</h2>
          <div className="flex justify-center pt-5"><Buttons/></div>
</div>
<div className='containerImg'>
  <img src={profilePic} alt="PicProfile" className='PicProfile animate__animated animate__bounceInRight' />
</div>

</section>
<div className="marquee">
<Marquee className="marqueeReact marker:text-white" gradientColor='false' speed={90}><img src={REACT} alt="React.js" /> | <img src={REDUX} alt="Redux" /> | <img src={JAVASCRIPT} alt="javascript" /> | <img src={HTML} alt="html" /> | <img src={CSS} alt="css" /> | <img src={NODE} alt="Node.js" /> | <img src={EXPRESS} alt="Express" /> | <img src={MONGO} alt="Mongo DB" /> | <img src={NPM} alt="NPM" /> | <img src={GITHUB} alt="Github" /></Marquee>
</div>
<div className="About flex justify-center items-center flex-col text-center">
  <h3 className="font-['Josefin_Sans'] text-2xl font-bold text-center text-[#ffc23c] sm:text-3xl" id='About'>ABOUT ME</h3>
<p style={{fontSize:'1.8rem', width:'80%'}} className="font-['Questrial'] text-center">
  After more than 600 hundred hours of study in the technologic enterprise "MINDHUB" where we simulated a real work environment,
   I can say am a responsible, honest, and
committed person at work. I have
an ability for solving problems
because I take every challenge
seriously. I am able to adapt to
the work given and also capable
of working with groups of people
or individually. I want to continue
learning and growing
professionally. Currently I´m still looking to learn new technologies like blockchain for example.
</p>
</div>

<div className='CardsContainer flex justify-center text-center flex-wrap' >
<h3 id='Works' style={{width: '100%'}} className="text-2xl font-bold text-center text-[#ffc23c] sm:text-3xl pt-10">WORKS</h3>
<Cards/>
</div>

<div id='Contact' >
<Contact />
</div>

<footer className="flex justify-center text-center text-sm pb-10">
  <p className='text-lg'>Made with ❤️ by Kev. All rights reserved</p>
</footer>
</>
  )
}
