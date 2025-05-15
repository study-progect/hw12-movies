import express from "express";
import asyncHandler from "express-async-handler";
import {MovController} from "../controllers/MovController.js";

export const movRouter = express.Router()
const controller = new MovController();


movRouter.get('/', asyncHandler(async (req, res) => {
    const result = await controller.getMoviesWithImdbLessThanTomatoes()
    res.type("application/json").json(result)
}));
movRouter.get('/rus', asyncHandler(async (req, res) => {
    const result = await controller.getOnlyRusMovies()
    res.type("application/json").json(result)
}));
movRouter.get('/genres', asyncHandler(async (req, res) => {
    const result = await controller.getMovieByGenres()
    res.type("application/json").json(result)
}));
movRouter.get('/two', asyncHandler(async (req, res) => {
    const result = await controller.getTwoBestMovies()
    res.type("application/json").json(result)
}));
movRouter.get('/2010', asyncHandler(async (req, res) => {
    const result = await controller.sort2010Movies()
    res.type("application/json").json(result)
}));
