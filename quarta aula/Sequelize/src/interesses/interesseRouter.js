import { Router } from 'express';
import * as interesseController from './interesseController.js';

const router = Router();

router.post('/', interesseController.criarInteresse);
router.get('/', interesseController.listarInteresses);
router.get('/:id', interesseController.visualizarInteresse);
router.put('/:id', interesseController.atualizarInteresse);
router.delete('/:id', interesseController.deletarInteresse);

export default router;
