import express from 'express';
import notesRouter from './routes/notes.routes';
import 'dotenv/config';

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get('/', (req, res) =>{
    res.json({
        msg: `Funcionando desde puerto ${port}`
    });
});

app.use('/notes', notesRouter);


app.listen(port, ()=>{
    console.log(`Servidor funcionando desde el puerto ${port}`);
});