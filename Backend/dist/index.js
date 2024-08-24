"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notes_routes_1 = __importDefault(require("./routes/notes.routes"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.json({
        msg: `Funcionando desde puerto ${port}`
    });
});
app.use('/notes', notes_routes_1.default);
app.listen(port, () => {
    console.log(`Servidor funcionando desde el puerto ${port}`);
});
