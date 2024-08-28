import { ReactElement, useEffect, useState } from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";
import ActorCarousel from "src/components/ActorCarousel/ActorCarousel.tsx";
import GenreBadge from "src/components/GenreBadge/GenreBadge.tsx";
import { useSearch } from "src/hooks/useTmdbSearch.ts";
import { Movie as MovieProps } from "src/types";
import { IMAGE_URL_PREFIX_HIGH, MISSING_PHOTO_URL } from "src/utils/constants.ts";


const Movie = (): ReactElement => {

    const [movieDetails, setMovieDetails] = useState<MovieProps>();
    const {id} = useParams();
    const {isLoading, getMovieDetails} = useSearch();

    useEffect(() => {
        if (id) {
            getMovieDetails(parseInt(id)).then((response) => setMovieDetails(response));
        }
    }, [id]);

    return (
        (isLoading || !movieDetails) ? <p>Loading...</p> :
            <div className="movie-container">
                <div className="movie-poster">
                    <img
                        src={movieDetails.poster_path ? IMAGE_URL_PREFIX_HIGH + movieDetails.poster_path : MISSING_PHOTO_URL}/>
                </div>

                <div className="movie-details">
                    <h1 className="movie-title">{movieDetails.title}</h1>
                    <p className="movie-info">{movieDetails.release_date} • {movieDetails.vote_average.toPrecision(2)} ⭐️
                        • {movieDetails.runtime} min</p>

                    <div>{movieDetails.genres.map((genre) => <GenreBadge key={genre.id} genre={genre.name}/>)}</div>

                    <h2>Synopsis</h2>
                    <p className="movie-synopsis">{movieDetails.overview}</p>

                    <h2>Cast</h2>
                    {movieDetails.credits &&
                        <ActorCarousel actors={movieDetails.credits.cast}/>
                    }
                </div>
            </div>
    );
};

export default Movie;
