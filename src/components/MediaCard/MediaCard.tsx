import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL_PREFIX_LOW, MISSING_MOVIE_IMG_URL } from "src/utils/constants.ts";
import "./MediaCard.css";

export type MediaCardProps = {
    id: number;
    imgUrl?: string;
    title: string;
    description: string;
    year: number;
    note: number;
    isMovie?: boolean;
}

const MediaCard = ({id, imgUrl, title, description, note, year, isMovie = false}: MediaCardProps): ReactElement => {

    const [infoVisible, setInfoVisible] = useState(false);

    const navigate = useNavigate();

    const openDetails = () => {
        navigate(`${isMovie ? `/movies` : `/shows`}/${id}`)
    }

    return (
        <div
            className="media-card"
            onMouseEnter={() => setInfoVisible(true)}
            onMouseLeave={() => setInfoVisible(false)}
        >
            {infoVisible && <div className="media-info">
                <p><span>{year}</span> · <span>{note.toPrecision(3)}</span> <span>⭐️</span></p>
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={openDetails}>See more →</button>
            </div>
            }
            <img className="media-img" src={imgUrl ? IMAGE_URL_PREFIX_LOW + imgUrl : MISSING_MOVIE_IMG_URL} alt={title}/>
        </div>
    );
};

export default MediaCard;
