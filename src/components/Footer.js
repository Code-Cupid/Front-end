import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/Components.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <Navbar>
        <span className="copyright"> &copy;2023 Cupid </span>
        <Link to="/cupids" className="cupid-coders">
          About Us
        </Link>
      </Navbar>
    </div>
  );
};

export default Footer;
