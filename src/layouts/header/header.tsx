import "../../assets/styles/header.css";
import "../../assets/styles/animation.css";
import { Link, NavLink } from "react-router-dom";
import LogoNav from "../../features/nav/logo";
import HomeNav from "../../features/nav/home";
import SlideNav from "../../features/nav/slide";
import BurgerNav from "../../features/nav/burger/burger";

function Header() {
  return (
    <nav className="header-container">
      <div className="Header">
        <NavLink to="/">
          <LogoNav />
        </NavLink>
        <NavLink to="/" activeClassName="active">
          <HomeNav />
        </NavLink>
        <NavLink to="/One" activeClassName="active">
          <SlideNav />
        </NavLink>
      </div>
      <BurgerNav />
    </nav>
  );
}

export default Header;
