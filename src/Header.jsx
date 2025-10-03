import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">Bartu Aksu</Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
  );
};

export default Header;
