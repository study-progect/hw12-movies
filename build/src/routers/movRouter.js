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
    const result = yield controller.getMoviesWithImdbLessThanTomatoes();
    res.type("application/json").json(result);
})));
movRouter.get('/rus', asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield controller.getOnlyRusMovies();
    res.type("application/json").json(result);
})));
movRouter.get('/genres', asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield controller.getMovieByGenres();
    res.type("application/json").json(result);
})));
