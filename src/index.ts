
//import app from './setup/app';
//import mongoose from 'mongoose';

//const moogoose = require("moongoose");

//Configurações
//app.use(express.json());
//Body-parser
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());
//Handlebars
import express, { Express, Request, Response } from 'express';
import { MAINRouter } from './routes/mainRoute';
import { STRoute } from './routes/setorRoute';
import { USERRoute } from './routes/pessoaRoute';
import { FBRoute } from './routes/feedbackRoute';
//Moogoose
//Em breve

//Rotas
const app = express();
app.use(express.json())
//app.use('/',MAINRoute);
app.use('/',USERRoute);
app.use('/',FBRoute);
app.use('/',STRoute);

app.get("/", function(req: Request,res: Response){
    res.send("MAIN");
})
//Outros
const PORT = 8081;
app.listen(PORT,()=>{
    console.log("Servidor rodando! ");
});