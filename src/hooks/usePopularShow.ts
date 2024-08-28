import { useCallback, useEffect, useState } from "react";
import { fetchPopularShows } from "src/api/tmdb.ts";
import { Show } from "src/types";

type UsePopularShow = {
    popularShows: Show[];
    fetchNextPage: () => void;
    isLoading: boolean;
}

export const useShow = () : UsePopularShow => {

    const [page, setPage] = useState<number>(1);
    const [popularShows, setPopularShows] = useState<Show[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getPopularShows = useCallback(async (page: number = 1) => {
        const response = await fetchPopularShows(page);
        return response.results
    },[])

    const getPage = async(page:number) => {
        setIsLoading(true);
        const newShows = await getPopularShows(page);
        setPopularShows((prevShows) => [...prevShows, ...newShows.filter((s) => !prevShows.map(s => s.id).includes(s.id))])
        setIsLoading(false);
    }

    useEffect(() => {
        getPage(page)
    }, [page])

    const fetchNextPage = () => {
        setPage(page + 1);
    }

    return {
        popularShows,
        isLoading,
        fetchNextPage
    }
}
