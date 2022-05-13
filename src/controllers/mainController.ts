import { Request, Response, NextFunction } from 'express';
class adminController{
    constructor(){

    }

    GetlAdmin(req:Request, res:Response)
    {
        res.send("Listar admin");
    }

    GetNAdmin(req:Request, res:Response)
    {
        res.send("Acessar admin especifico");
    }

    PostAdmin(req:Request, res:Response)
    {
        res.send("Cria um admin de setor");
    }

    PatchAdmin(req:Request, res:Response)
    {
        res.send("Atualiza os dados de admin");
    }

    DeleteAdmin(req:Request, res:Response)
    {
        res.send("Apagar registro de admin");
    }

    DeleteALLAdmin(req:Request, res:Response)
    {
        res.send("Apagar todos os registros de admin");
    }
}

export const ADMController = new adminController();