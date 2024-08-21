import { Router } from "express";
import { createNote, getNotes, getNotesById } from "../controllers/notes.controller";

const router = Router();

router.get('/', getNotes);
router.get('/:id', getNotesById);
router.post('/', createNote);


export default router;