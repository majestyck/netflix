import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import EmptyPage from "src/components/EmptyPage/EmptyPage.tsx";

import Home from "src/pages/Home/Home.tsx";
import { NavBar } from "src/components/NavBar/NavBar.tsx";
import Movie from "src/pages/Movie/Movie.tsx";
import Show from "src/pages/Show/Show.tsx";
import { useTheme } from "src/providers/ThemeContext";

function App() {

    const {isLightTheme} = useTheme();
    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            isLightTheme ? "light" : "dark"
        );
    }, [isLightTheme]);

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/movies/:id" Component={Movie}/>
                <Route path="/shows/:id" Component={Show}/>
                <Route path="*" Component={EmptyPage}/>
            </Routes>
        </>
    );
}

export default App;
