import {MovServiceImplMongo} from "../service/MovServiceImplMongo.js";
import {MovService} from "../service/MovService.js";

export class MovController {
    private movService:MovService = new MovServiceImplMongo()

    async getMoviesWithImdbLessThanTomatoes(){
        return this.movService.getMoviesWithImdbLessThanTomatoes()
    }
    async getOnlyRusMovies(){
        return this.movService.getOnlyRusMovies()
    }
    async getMovieByGenres() {
        return this.movService.getMovieByGenres()
    }
}