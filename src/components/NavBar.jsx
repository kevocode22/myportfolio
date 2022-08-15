import Logo from '../assets/Logotipo.png'


export default function NavBar() {
  return (
    <nav className="navBar flex justify-around">
    <div>
      <img src={Logo} alt="Logo Site" style={{height:'7rem'}} />
      </div>
      <div> <a href="#Home">Home</a>
  <a href="#About">About Me</a>
  <a href="#Works">Works</a>
  <a href="#Contact">Contact</a></div>
  <div>
    <button id='Lets'>Let´s Talk</button>
  </div>

  </nav>
  )
}
