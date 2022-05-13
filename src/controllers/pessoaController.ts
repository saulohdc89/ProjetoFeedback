import { Request, Response } from 'express';
class pessoaController{
    constructor(){

    }

    GetlPessoaController(req:Request, res:Response)
    {
        res.send("Listar pessoas");
    }

    GetNPessoaController(req:Request, res:Response)
    {
        res.send("Acessar pessoa especifica");
    }

    PostPessoa(req:Request, res:Response)
    {
        res.send("estatisticas de pessoa");
    }

    PatchPessoa(req:Request, res:Response)
    {
        res.send("Atualiza os dados de Pessoa");
    }

    PutPessoa(req:Request, res:Response)
    {
        res.send("Atualiza os dados de Pessoa");
    }

    DeletePessoa(req:Request, res:Response)
    {
        res.send("Apagar registro de Pessoa");
    }

    DeleteALLPessoa(req:Request, res:Response)
    {
        res.send("Apagar todos os registros de Pessoas");
    }
}

export const PSOAController = new pessoaController();