import { Router } from 'express';
import * as mensagemController from './mensagemController.js';

const router = Router();

router.post('/', mensagemController.criarMensagem);
router.get('/', mensagemController.listarMensagens);
router.get('/:id', mensagemController.visualizarMensagem);
router.put('/:id', mensagemController.atualizarMensagem);
router.delete('/:id', mensagemController.deletarMensagem);

export default router;
