import { useCallback, useEffect, useState } from "react";
import { fetchPopularMovies } from "src/api/tmdb.ts";
import { Movie } from "src/types";

type UsePopularMovie = {
    popularMovies: Movie[];
    fetchNextPage: () => void;
    isLoading: boolean;
}

export const useMovie = () : UsePopularMovie => {

    const [page, setPage] = useState<number>(1);
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getPopularMovies = useCallback(async (page: number = 1) => {
        const response = await fetchPopularMovies(page);
        return response.results
    },[])

    const getPage = async(page:number) => {
        setIsLoading(true);
        const newShows = await getPopularMovies(page);
        setPopularMovies((prevMovies) => [...prevMovies, ...newShows.filter((s) => !prevMovies.map(s => s.id).includes(s.id))])
        setIsLoading(false);
    }

    useEffect(() => {
        getPage(page)
    }, [page])

    const fetchNextPage = () => {
        setPage(page + 1);
    }

    return {
        popularMovies,
        isLoading,
        fetchNextPage
    }
}
