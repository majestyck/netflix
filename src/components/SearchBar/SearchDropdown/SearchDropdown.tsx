import "./SearchDropdown.css";
import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Movie, Show } from "src/types";
import { isMovie } from "src/utils";
import { IMAGE_URL_PREFIX_LOW, MISSING_MOVIE_IMG_URL } from "src/utils/constants.ts";

type SearchDropdownProps = {
    results: (Movie | Show)[];
    clearSearch: () => void;
}

const SearchDropdown: FC<SearchDropdownProps> = ({results, clearSearch}) => {

    const navigate = useNavigate();

    const handleClick = useCallback((item: Movie | Show) => {
        clearSearch();
        if (isMovie(item)) {
            navigate(`/movies/${item.id}`);
        } else {
            navigate(`/shows/${item.id}`);
        }
    }, []);

    return (
        <div className="search-dropdown">
            {results.length === 0 ? <p>No results</p> :
                results.map((item) => <div key={item.id} className="search-dropdown-item" onClick={() => handleClick(item)}>
                    <img src={item.poster_path ? IMAGE_URL_PREFIX_LOW + item.poster_path : MISSING_MOVIE_IMG_URL}></img>
                    <div>{(item as Movie).title || (item as Show).name}</div>
                </div>)}
        </div>
    );
};

export default SearchDropdown;
