import { useState } from "react";
import { Movie, Show, TmdbPageResponse } from "src/types";
import { fetchMovieDetails, fetchShowDetails, search as tmdbSearch } from "src/api/tmdb.ts";

type UseTmdbSearch = {
    search: (query: string) => Promise<TmdbPageResponse<(Movie|Show)[]>>;
    getShowDetails: (id: number) => Promise<Show>;
    getMovieDetails: (id: number) => Promise<Movie>;
    isLoading: boolean;
}

export const useSearch = (): UseTmdbSearch => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const search = (query: string) : Promise<TmdbPageResponse<(Movie|Show)[]>> => {
        return tmdbSearch(query)
    }

    const getShowDetails = async(id: number) => {
        setIsLoading(true);
        const response = await fetchShowDetails(id);
        setIsLoading(false);
        return response;
    }

    const getMovieDetails = async(id: number) => {
        setIsLoading(true);
        const response = await fetchMovieDetails(id);
        setIsLoading(false);
        return response;
    }

    return {
        isLoading,
        search,
        getShowDetails,
        getMovieDetails
    }
}
