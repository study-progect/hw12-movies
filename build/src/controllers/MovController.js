var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MovServiceImplMongo } from "../service/MovServiceImplMongo.js";
export class MovController {
    constructor() {
        this.movService = new MovServiceImplMongo();
    }
    getMoviesWithImdbLessThanTomatoes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.movService.getMoviesWithImdbLessThanTomatoes();
        });
    }
    getOnlyRusMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.movService.getOnlyRusMovies();
        });
    }
    getMovieByGenres() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.movService.getMovieByGenres();
        });
    }
    getTwoBestMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.movService.getTwoBestMovies();
        });
    }
    sort2010Movies() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.movService.sort2010Movies();
        });
    }
}
