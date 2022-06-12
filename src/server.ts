import express,{Request, Response, Router} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache', mustache());

//definindo a pasta publica
server.use(express.static(path.join(__dirname,'../public')));

server.use(express.urlencoded({extended:true}));

server.use('/',()=>{
    server.render('',{})
});

server.use((req:Request, res:Response)=>{
    res.status(404).send('Página não encontrada!')
});


// o listen é o responsavel por ficar escutando a porta do servidor
server.listen(process.env.PORT);