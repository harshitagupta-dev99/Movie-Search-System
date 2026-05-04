import { Link } from "react-router-dom";
import "../css/Navbar.css"
import { NAVLINKS } from "../constants/uiConstants";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">{NAVLINKS?.MOVIE_APP}</Link>
        </div>
        <div className="navbar-links">
            <Link to="/about" className="nav-link">{NAVLINKS?.ABOUT_PROJECT_LINK}</Link>
            <Link to="/" className="nav-link">{NAVLINKS?.HOME}</Link>
            <Link to="/favorites" className="nav-link">{NAVLINKS?.FAVOURITES}</Link>
        </div>
    </nav>
}

export default NavBar