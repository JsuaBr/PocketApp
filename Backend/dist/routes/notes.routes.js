"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notes_services_1 = require("../services/notes.services");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.json((0, notes_services_1.getNotes)());
});
router.get('/calendar', (req, res) => {
    res.json({
        msg: "From notes"
    });
});
router.post('/create', (req, res) => {
    const { id, title, description, date } = req.body;
    const newNote = (0, notes_services_1.createNote)(id, title, description, date);
    res.json(newNote);
});
exports.default = router;
