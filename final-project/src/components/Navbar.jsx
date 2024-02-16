import logo from '../images/react-icon-small.png'

function Navbar () {
  return (
    <nav>
      <img src={logo} alt="react logo" className="nav-icon"/>
      <h3 className="logo-text">ReactFacts</h3>
      <h4 className="title">React Course - Project 1</h4>
    </nav>
  )
}
export default Navbar
