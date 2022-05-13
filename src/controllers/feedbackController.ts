import { Request, Response } from 'express';
class feebackController{
    constructor(){

    }

    GetlFBController(req:Request, res:Response)
    {
        res.send("Listar feeback");
    }

    GetNFBController(req:Request, res:Response)
    {
        res.send("Acessar feedback especifico");
    }

    PostFB(req:Request, res:Response)
    {
        res.send("Cria um feeback de setor");
    }

    PatchFB(req:Request, res:Response)
    {
        res.send("Atualiza os dados de feeback");
    }
    PutFB(req:Request, res:Response)
    {
        res.send("Atualiza os dados de feeback");
    }

    DeleteFB(req:Request, res:Response)
    {
        res.send("Apagar registro de feeback");
    }

    DeleteALLFB(req:Request, res:Response)
    {
        res.send("Apagar todos os registros de feeback");
    }
}

export const FBController = new feebackController();