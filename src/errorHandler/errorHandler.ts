import {NextFunction, Request, Response} from "express";

type MovError = {status:number, message:string}

export const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
    try{
        const error:MovError = JSON.parse(err.message)
        res.status(error.status).end(error.message)
    } catch (e) {
        res.status(500).end(`Unknown server error : ${err.message}`)
    }
}