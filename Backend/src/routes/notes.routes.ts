import express from "express";
import { getNotes, createNote } from "../services/notes.services";

const router = express.Router();

router.get('/', (req, res) =>{
    res.json(getNotes());
})

router.get('/calendar', (req, res) =>{
    res.json({
        msg: "From notes"
    })
})

router.post('/create', (req, res) =>{
    const {id, title, description, date} = req.body;

    const newNote = createNote(
        id,
        title,
        description,
        date
    )

    res.json(newNote);
})




export default router;