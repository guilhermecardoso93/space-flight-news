import PlanetLogo from '../../assets/planet.svg'

export function Navbar() {
  return (
    <header>
      <nav id='navbar'>
        <div className="nav-brand">
          <img src="" alt="Logo" />
          <h1>Space Flight News</h1>
        </div>

        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Trend</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
