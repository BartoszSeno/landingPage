import "../../assets/styles/header.css";
import "../../assets/styles/animation.css";
import { Link, NavLink } from "react-router-dom";
import LogoNav from "../../features/nav/logo";
import HomeNav from "../../features/nav/home";
import SlideNav from "../../features/nav/slide";

function Header() {
  return (
    <nav className="header-container">
      <div className="Header">
        <NavLink to="/">
          <LogoNav />
        </NavLink>
        <NavLink to="/">
          <HomeNav />
        </NavLink>
        <NavLink to="/One">
          <SlideNav />
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
