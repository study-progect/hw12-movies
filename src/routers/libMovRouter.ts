import express from "express";
import {movRouter} from "./movRouter.js";


export const libMovRouter = express.Router();
libMovRouter.use('/movies', movRouter)
