import pessoa from 'express';
import { PSOAController } from '../controllers/pessoaController';
const pessoarouter = pessoa.Router();



pessoarouter.get('/user', PSOAController.GetlPessoaController);

pessoarouter.get('/user/:id', PSOAController.GetNPessoaController);

pessoarouter.post('/user', PSOAController.PostPessoa);

pessoarouter.patch('/user/:id', PSOAController.PatchPessoa);

pessoarouter.put('/setor/:id',PSOAController.PutPessoa);

pessoarouter.delete('/user/:id', PSOAController.DeletePessoa);

pessoarouter.delete('/user', PSOAController.DeleteALLPessoa);

export {pessoarouter as USERRoute };