import {MovService} from "./MovService.js";
import {Movie} from "../model/Movie.js";
import {MovieModel} from "../model/MovieMongo.js";

export class MovServiceImplMongo implements MovService{
    async getMoviesWithImdbLessThanTomatoes():Promise<Movie[]> {
         return MovieModel.find({$expr: {$gt: ['$tomatoes.viewer.rating', '$imdb.rating']}});
    }

    async getMovieByGenres(): Promise<Movie[]> {
        return MovieModel.find({genres: { $size: 2, $all: ['Action','Comedy'] }})
    }

   async getOnlyRusMovies(): Promise<Movie[]> {
        return MovieModel.find({languages: { $size: 1, $all: ['Russian'] }})
    }

    getTwoBestMovies(): Promise<[]> {
        return Promise.resolve([]);
    }

    sort2010Movies(): Promise<[]> {
        return Promise.resolve([]);
    }

}