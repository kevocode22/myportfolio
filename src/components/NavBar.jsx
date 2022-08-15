import Logo from '../assets/Logotipo.png'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

  let navigate = useNavigate()
  return (
    <nav className="navBar flex justify-around">
      <div>
        <img src={Logo} alt="Logo Site" style={{ height: '7rem' }} />
      </div>
      <div>
        <a onClick={() => navigate('/#Home')} href="#Home">Home</a>
        <a onClick={() => navigate('/#About')} href="#About">About Me</a>
        <a onClick={() => navigate('/#Works')} href="#Works">Works</a>
        <a onClick={() => navigate('/#Contact')} href="#Contact">Contact</a></div>
      <div>
        <button id='Lets'>Let´s Talk</button>
      </div>

    </nav>
  )
}
