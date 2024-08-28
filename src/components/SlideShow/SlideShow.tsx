import { ReactElement, useCallback } from "react";
import "./SlideShow.css";
import MediaCard from "src/components/MediaCard/MediaCard.tsx";
import { Movie, Show } from "src/types";
import { isMovie } from "src/utils";

type SlideShowProps = {
    title: string;
    data: Movie[] | Show[];
    queryNextPage: () => void;
    isLoading?: boolean;
}

const SlideShow = ({title, data, queryNextPage, isLoading = false}: SlideShowProps): ReactElement => {


    const scrollElementRef = useCallback(
        (node: HTMLElement) => {
            if (isLoading) return;

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    queryNextPage();
                }
            });

            if (node) observer.observe(node);
        },
        [isLoading]
    );

    return (
        <div className="slideshow-container">
            <h2>{title}</h2>
            <div className={"slideshow"}>
                {data.map((media) => {
                    return <MediaCard
                        key={media.id}
                        id={media.id}
                        imgUrl={media.poster_path}
                        title={isMovie(media) ? media.title : media.name}
                        description={media.overview}
                        year={parseInt(isMovie(media) ? media.release_date.split("-")[0] : media.first_air_date.split("-")[0])}
                        note={media.vote_average}
                        isMovie={isMovie(media)}
                    />;
                })}
                <span ref={scrollElementRef} style={{
                    position: "relative",
                    right: "600px",
                }}></span>
            </div>
        </div>
    );
};

export default SlideShow;
