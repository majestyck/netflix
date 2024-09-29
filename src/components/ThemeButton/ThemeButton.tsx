import { ReactElement } from "react";
import "./ThemeButton.css";
import { useTheme } from "src/context/ThemeContext";

const ThemeButton = (): ReactElement => {

    const {toggleTheme, isLightTheme} = useTheme()

    return (
        <button id="themeSelector" type="button" onClick={toggleTheme}>
            <img src={isLightTheme ? "/src/assets/moon.svg": "/src/assets/sun.svg"}  alt="theme button icon"/>
        </button>
    );
};

export default ThemeButton;
