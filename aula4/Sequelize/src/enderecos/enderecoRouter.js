import { Router } from 'express';
import * as enderecoController from './enderecoController.js';

const router = Router();

router.post('/', enderecoController.criarEndereco);
router.get('/', enderecoController.listarEnderecos);
router.get('/:id', enderecoController.visualizarEndereco);
router.put('/:id', enderecoController.atualizarEndereco);
router.delete('/:id', enderecoController.deletarEndereco);

export default router;
