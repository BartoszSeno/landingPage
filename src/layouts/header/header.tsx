import "../../assets/styles/header.css";
import { NavLink } from "react-router-dom";
import LogoNav from "../../features/nav/logo";
import HomeNav from "../../features/nav/home";
import AboutNav from "../../features/nav/about";
import ContactNav from "../../features/nav/contact";

function Header() {
  return (
    <nav className="header-container">
      <div className="Header">
        <NavLink to="/" className="logo">
          <LogoNav />
        </NavLink>
        <NavLink to="/" activeClassName="active">
          <HomeNav />
        </NavLink>
        <NavLink to="/About" activeClassName="active">
          <AboutNav />
        </NavLink>
        <NavLink to="/Contact" activeClassName="active">
          <ContactNav />
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
