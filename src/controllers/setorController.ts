import { Request, Response } from 'express';
class setorController{
    constructor(){

    }

    GetlSetorController(req:Request, res:Response)
    {
        res.send("Listar setor");
    }

    GetNSetorController(req:Request, res:Response)
    {
        res.send("Acessar feeback especifico");
    }

    PostSetor(req:Request, res:Response)
    {
        res.send("Cria um dado Setor");
    }

    PatchSetor(req:Request, res:Response)
    {
        res.send("Atualiza os dados de Setor");
    }
    PutSetor(req:Request, res:Response)
    {
        res.send("Atualiza os dados de Setor");
    }


    DeleteSetor(req:Request, res:Response)
    {
        res.send("Apagar registro de Setor");
    }

    DeleteALLSetor(req:Request, res:Response)
    {
        res.send("Apagar todos os registros de Setor");
    }
}

export const STRController = new setorController();