import {Movie} from "../model/Movie.js";

export interface MovService {
    getMoviesWithImdbLessThanTomatoes: () => Promise<Movie[]>;
    getOnlyRusMovies: () => Promise<Movie[]>;
    getMovieByGenres: () => Promise<Movie[]>;
    getTwoBestMovies: () => Promise<String[]>;
    sort2010Movies: () => Promise<String[]>;
}