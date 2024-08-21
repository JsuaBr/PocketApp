import { Response, Request, NextFunction } from "express";

export const getNotes = (req: Request, res: Response)=>{
    res.json({
        msg: 'Get Notes Working'
    })
}

export const getNotesById = (req: Request, res: Response) =>{
    const {id} = req.params;
    res.json({
        msg: 'Getting notes by ID is working',
        id
    })
}

export const createNote = (req: Request, res: Response) =>{
    const {body} = req;
    res.json({
        msg: 'Creating a note',
        body
    })
}