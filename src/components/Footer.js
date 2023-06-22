import { Navbar } from "reactstrap";
import './Components.css'

const Footer = () => {
  return (
    <div>
      <Navbar className="footer-container">
        <span className="copyright"> &copy;2023 Cupid </span>
        <span className="cupid-coders">About Us</span>
      </Navbar>
    </div>
  );
};

export default Footer;
