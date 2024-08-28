import { ReactElement } from "react";
import "./Home.css";
import SlideShow from "src/components/SlideShow/SlideShow";
import { useMovie } from "src/hooks/usePopularMovie.ts";
import { useShow } from "src/hooks/usePopularShow.ts";

const Home = (): ReactElement => {

    const {popularMovies, isLoading: isMovieLoding, fetchNextPage: fetchNextMoviePage} = useMovie();
    const {popularShows, isLoading: isShowLoading, fetchNextPage: fetchNextShowPage} = useShow();

    return (
        <div className="container">
            <div className="media-container">
                <SlideShow title={"Popular Movies"} data={popularMovies} queryNextPage={fetchNextMoviePage}
                           isLoading={isMovieLoding}/>
                <SlideShow title={"Popular Shows"} data={popularShows} queryNextPage={fetchNextShowPage}
                           isLoading={isShowLoading}/>
            </div>
        </div>
    );
};

export default Home;
