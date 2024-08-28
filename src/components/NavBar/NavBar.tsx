import "./Navbar.css";
import { NavLink } from "react-router-dom";
import SearchBar from "src/components/SearchBar/SearchBar";
import ThemeButton from "src/components/ThemeButton/ThemeButton";

export const NavBar = () => {

    return (
        <div className="nav-bar">
            <img src="/src/assets/logo.png" alt="logo"/>
            <div className="nav-bar-link-container">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/movies"}>Movies</NavLink>
                <NavLink to={"/shows"}>Shows</NavLink>
            </div>
            <div className="nav-bar-end">
                <ThemeButton/>
                <SearchBar/>
            </div>
        </div>
    );
};

