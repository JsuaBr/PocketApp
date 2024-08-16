import { Response, Request, NextFunction } from "express";

export const getNotes = (req: Request, res: Response)=>{
    res.json({
        msg: 'Get Notes Working'
    })
}