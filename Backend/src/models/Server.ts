import express, {Application, Request, Response} from 'express';
import notesRoutes from '../routes/notes.route'

class Server{

    private app: Application;
    private port: String;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        })
    }

    routes(){
        this.app.get('/', (req:Request, res:Response) =>{
            res.json({
                msg : 'Hola'
            })
        });

        this.app.use('/notes', notesRoutes);
    }
}

export default Server;