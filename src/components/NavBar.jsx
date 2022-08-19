import Logo from '../assets/Logotipo.png'
import 'animate.css'

export default function NavBar() {

  return (
    <nav className="navBar flex justify-around">
      <div>
        <img className='animate__animated animate__pulse' src={Logo} alt="Logo Site" style={{ height: '7rem' }} />
      </div>
      <div>
        <a className='aNav' href="#Home" >Home</a>
        <a className='aNav' href="#About">About Me</a>
        <a className='aNav'  href="#Works">Works</a>
        <a className='aNav'  href="#Contact">Contact</a></div>
      <div>
        <form method="post" action="mailto:ocampokevin14@gmail.com">
        <button id='Lets' type="submit" title="ocampokevin14@gmail.com" >Let´s Talk</button></form>
      </div>

    </nav>
  )
}
