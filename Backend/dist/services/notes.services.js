"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNote = exports.getNotes = void 0;
const test_json_1 = __importDefault(require("./test.json"));
const data = test_json_1.default;
const getNotes = () => data;
exports.getNotes = getNotes;
const createNote = (id, title, description, date) => {
    const note = {
        id,
        title,
        description,
        date
    };
    data.push(note);
    return note;
};
exports.createNote = createNote;
