import { Movie, Show } from "src/types";

export const isMovie = (media: Movie | Show): media is Movie => {
    return (media as Movie).title !== undefined;
};
