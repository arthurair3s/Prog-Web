import { Router } from 'express';
import * as interacaoController from './interacaoController.js';

const router = Router();

router.post('/', interacaoController.criarInteracao);
router.get('/', interacaoController.listarInteracoes);
router.get('/:id', interacaoController.visualizarInteracao);
router.put('/:id', interacaoController.atualizarInteracao);
router.delete('/:id', interacaoController.deletarInteracao);

export default router;
