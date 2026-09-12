import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">VoyaVista</Link>

      <div>
        <Link to="/">Home</Link>
        <Link to="/experiences">Explore</Link>
        <Link to="/saved">Saved</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;