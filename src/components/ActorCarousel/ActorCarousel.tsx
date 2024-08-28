import "./ActorCarousel.css";
import { FC } from "react";
import ActorCard from "src/components/ActorCard/ActorCard.tsx";
import { Cast } from "src/types";

type ActorCarouselProps = {
    actors: Cast[];
}

const ActorCarousel: FC<ActorCarouselProps> = ({actors}) => {
    return (
        <div className="actors">
            {actors.map((actor) =>
                <ActorCard key={actor.id} name={actor.name} imgSource={actor.profile_path}
                           character={actor.character}/>
            )}
        </div>
    );
};

export default ActorCarousel;
