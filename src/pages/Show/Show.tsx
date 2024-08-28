import { useEffect, useState } from "react";
import "./Show.css";
import { useParams } from "react-router-dom";
import ActorCarousel from "src/components/ActorCarousel/ActorCarousel.tsx";
import GenreBadge from "src/components/GenreBadge/GenreBadge.tsx";
import { useSearch } from "src/hooks/useTmdbSearch.ts";
import { Show as ShowDetails } from "src/types";
import { IMAGE_URL_PREFIX_HIGH, MISSING_PHOTO_URL } from "src/utils/constants.ts";

const Show = () => {

    const [showDetails, setShowDetails] = useState<ShowDetails>();
    const {id} = useParams();
    const {isLoading, getShowDetails} = useSearch();

    useEffect(() => {
        if (id) {
            getShowDetails(parseInt(id)).then((response) => setShowDetails(response));
        }
    }, [id]);

    return (
        (isLoading || !showDetails) ? <p>Loading...</p> :
            <div className="show-container">
                <div className="show-poster">
                    <img
                        src={showDetails.poster_path ? IMAGE_URL_PREFIX_HIGH + showDetails.poster_path : MISSING_PHOTO_URL}/>
                </div>

                <div className="show-details">
                    <h1 className="show-title">{showDetails.name}</h1>
                    <p className="show-info">{showDetails.first_air_date} • {showDetails.vote_average.toPrecision(2)} ⭐️
                        • {showDetails.episode_run_time[0]} min</p>
                    <p className="show-info">{showDetails.number_of_seasons} seasons
                        • {showDetails.number_of_episodes} episodes</p>
                    <div>{showDetails.genres.map((genre) => <GenreBadge key={genre.id} genre={genre.name}/>)}</div>

                    <h2>Synopsis</h2>
                    <p className="show-synopsis">{showDetails.overview}</p>

                    <h2>Cast</h2>
                    {showDetails.credits &&
                        <ActorCarousel actors={showDetails.credits.cast}/>
                    }
                </div>
            </div>
    );
};

export default Show;
