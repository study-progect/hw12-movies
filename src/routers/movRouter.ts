import express from "express";
import asyncHandler from "express-async-handler";
import {MovController} from "../controllers/MovController.js";

export const movRouter = express.Router()
const controller = new MovController();

movRouter.get('/', asyncHandler(async (req, res) => {
    const type = req.query.param;

    let result;
    switch (type) {
        case 'rus':
            result = await controller.getOnlyRusMovies();
            break;
        case 'two':
            result = await controller.getTwoBestMovies();
            break;
        case '2010':
            result = await controller.sort2010Movies();
            break;
        case 'genres':
            result = await controller.getMovieByGenres();
            break;
        case undefined:
            result = await controller.getMoviesWithImdbLessThanTomatoes();
            break;
        default:
            res.status(400).json({ error: "Invalid type parameter" });
            return;
    }

    res.json(result);
}));


//
// movRouter.get('/', asyncHandler(async (req, res) => {
//     const result = await controller.getMoviesWithImdbLessThanTomatoes()
//     res.type("application/json").json(result)
// }));
// movRouter.get('/rus', asyncHandler(async (req, res) => {
//     const result = await controller.getOnlyRusMovies()
//     res.type("application/json").json(result)
// }));
// movRouter.get('/genres', asyncHandler(async (req, res) => {
//     const result = await controller.getMovieByGenres()
//     res.type("application/json").json(result)
// }));
// movRouter.get('/two', asyncHandler(async (req, res) => {
//     const result = await controller.getTwoBestMovies()
//     res.type("application/json").json(result)
// }));
// movRouter.get('/2010', asyncHandler(async (req, res) => {
//     const result = await controller.sort2010Movies()
//     res.type("application/json").json(result)
// }));
