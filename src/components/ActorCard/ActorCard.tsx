import { ReactElement } from "react";
import "./ActorCard.css";
import { IMAGE_URL_PREFIX_LOW, MISSING_PHOTO_URL } from "src/utils/constants.ts";

type ActorCardProps = {
    name: string;
    imgSource: string;
    character: string;
}

const ActorCard = ({name, imgSource, character}: ActorCardProps): ReactElement => {
    return (
        <div className="actor-card">
            <img src={imgSource ? (IMAGE_URL_PREFIX_LOW + imgSource) : MISSING_PHOTO_URL} width="100%"/>
            <p className="actor-name"><strong>{name}</strong></p>
            <p className="character">{character}</p>
        </div>
    );
};

export default ActorCard;
