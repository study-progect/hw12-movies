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

   async getTwoBestMovies(): Promise<String[]> {
        return MovieModel.find()
            .sort({ 'awards.wins': -1 })
            .limit(2)
            .select('title')
            .then(movies => movies.map(movie => movie.title));
    }

    async sort2010Movies(): Promise<string[]> {
        return MovieModel
            .find({
                year: '2010'
            })
            .sort({ 'imdb.rating': -1 })
            .select('title imdb.rating')
            .then(movies => movies.map(movie =>
                movie.imdb && movie.imdb.rating != null
                    ? `${movie.title} - ${movie.imdb.rating}`
                    : `${movie.title} - most underrated movie!!!`
            ));    }

}