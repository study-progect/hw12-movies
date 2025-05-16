var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import asyncHandler from "express-async-handler";
import { MovController } from "../controllers/MovController.js";
export const movRouter = express.Router();
const controller = new MovController();
movRouter.get('/', asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.query.param;
    let result;
    switch (type) {
        case 'rus':
            result = yield controller.getOnlyRusMovies();
            break;
        case 'two':
            result = yield controller.getTwoBestMovies();
            break;
        case '2010':
            result = yield controller.sort2010Movies();
            break;
        case 'genres':
            result = yield controller.getMovieByGenres();
            break;
        case undefined:
            result = yield controller.getMoviesWithImdbLessThanTomatoes();
            break;
        default:
            res.status(400).json({ error: "Invalid type parameter" });
            return;
    }
    res.json(result);
})));
