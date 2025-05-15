var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MovieModel } from "../model/MovieMongo.js";
export class MovServiceImplMongo {
    getMoviesWithImdbLessThanTomatoes() {
        return __awaiter(this, void 0, void 0, function* () {
            return MovieModel.find({ $expr: { $gt: ['$tomatoes.viewer.rating', '$imdb.rating'] } });
        });
    }
    getMovieByGenres() {
        return __awaiter(this, void 0, void 0, function* () {
            return MovieModel.find({ genres: { $size: 2, $all: ['Action', 'Comedy'] } });
        });
    }
    getOnlyRusMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            return MovieModel.find({ languages: { $size: 1, $all: ['Russian'] } });
        });
    }
    getTwoBestMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            return MovieModel.find()
                .sort({ 'awards.wins': -1 })
                .limit(2)
                .select('title')
                .then(movies => movies.map(movie => movie.title));
        });
    }
    sort2010Movies() {
        return __awaiter(this, void 0, void 0, function* () {
            return MovieModel
                .find({
                year: '2010'
            })
                .sort({ 'imdb.rating': -1 })
                .select('title imdb.rating')
                .then(movies => movies.map(movie => movie.imdb && movie.imdb.rating != null
                ? `${movie.title} - ${movie.imdb.rating}`
                : `${movie.title} - most underrated movie!!!`));
        });
    }
}
