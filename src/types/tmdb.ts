export type TmdbPageResponse<T> = {
    page: number;
    results: T;
    total_pages: number;
    total_results: number;
}

export type Cast = {
    id: number;
    name: string;
    profile_path: string;
    character: string;
}

type Credits = {
    cast: Cast[];
}

export type Movie = {
    backdrop_path: string;
    belongs_to_collection: string;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    title: string;
    vote_average: number;
    vote_count: number;
    credits?: Credits;
}

export type Show = {
    adult: boolean;
    backdrop_path: string;
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[]
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: Episode;
    name: string;
    next_episode_to_air: string;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    seasons: Season[];
    type: string;
    vote_average: number;
    vote_count: number;
    credits?: Credits;
};

export type Episode = {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
}

export type Season = {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
}

export type Genre = {
    id: number;
    name: string;
};
