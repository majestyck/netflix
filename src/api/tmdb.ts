import { ACCESS_TOKEN } from "src/api/constants";
import { Movie, Show, TmdbPageResponse } from "src/types";

const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`
};

export const fetchPopularMovies = async (page: number): Promise<TmdbPageResponse<Movie[]>> => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
    const options = {
        method: 'GET',
        headers
    };

    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return (await res.json() as Promise<TmdbPageResponse<Movie[]>>);
};

export const fetchPopularShows = async (page: number = 1): Promise<TmdbPageResponse<Show[]>> => {
    const url = `https://api.themoviedb.org/3/tv/popular?anguage=en-US&page=${page}`;
    const options = {
        method: 'GET',
        headers
    };

    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return (await res.json() as Promise<TmdbPageResponse<Show[]>>);
};

export const fetchMovieDetails = async (id: number): Promise<Movie> => {
    const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits`;
    const options = {
        method: 'GET',
        headers
    };
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return await res.json() as Movie;
};

export const fetchShowDetails = async (id: number): Promise<Show> => {
    const url = `https://api.themoviedb.org/3/tv/${id}?append_to_response=credits`;
    const options = {
        method: 'GET',
        headers
    };
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return await res.json() as Show;
};

export const search = async (query: string): Promise<TmdbPageResponse<(Movie | Show)[]>> => {
    const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false`;
    const options = {
        method: 'GET',
        headers
    };
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return await res.json() as TmdbPageResponse<(Movie | Show)[]>;
};
