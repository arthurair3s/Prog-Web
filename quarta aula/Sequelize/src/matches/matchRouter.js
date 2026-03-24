import { Router } from 'express';
import * as matchController from './matchController.js';

const router = Router();

router.post('/', matchController.criarMatch);
router.get('/', matchController.listarMatches);
router.get('/:id', matchController.visualizarMatch);
router.put('/:id', matchController.atualizarMatch);
router.delete('/:id', matchController.deletarMatch);

export default router;
