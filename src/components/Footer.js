import { Navbar, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/Components.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <Navbar>
        <span className="copyright"> &copy;2023 Charlie's Cupids </span>
        <NavItem className="nav-item">
          <Link to="/cupids" className="nav-link">
            Meet the Cupids
          </Link>
        </NavItem>
      </Navbar>
    </div>
  );
};

export default Footer;
