import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <a href="#" className="logo">Bartu Aksu</a>

      <nav>
        <Link to="/" className="active">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
