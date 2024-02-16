import reactLogo from './assets/react.svg'

function Header () {
    return (
        <header>
            <nav className="navbar">
                <img src={reactLogo} className="reactLogo"/>
                <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
