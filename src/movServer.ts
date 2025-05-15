import fs from "node:fs";
import * as mongoose from "mongoose";
import express from 'express';
import morgan from "morgan";
import {db, PORT} from "./config/movConfig.js";
import {errorHandler} from "./errorHandler/errorHandler.js";
import {libMovRouter} from "./routers/libMovRouter.js";

export const launchServer = () => {
    //===============Mongo Connected=============================
    mongoose.connect(db).then(() => console.log("DB connected"))
        .catch(err => console.log(err))
    //===============Express Server=============================
    const logStream = fs.createWriteStream('./src/access.log',{flags:"a"})
    const app = express();
    app.listen(PORT, () => console.log(`Server runs at http://localhost:${PORT}`))

    //===============Middleware====================
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(morgan('combined', {stream: logStream}))
    //===============Router========================
    app.use('/api',libMovRouter);

    //==============ErrorHandler===================
    app.use(errorHandler);
}