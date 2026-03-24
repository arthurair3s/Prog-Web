import { Router } from 'express';
import * as usuarioController from './usuarioController.js';

const router = Router();

router.post('/', usuarioController.criarUsuario);
router.get('/', usuarioController.listarUsuarios);
router.get('/:id', usuarioController.visualizarUsuario);
router.put('/:id', usuarioController.atualizarUsuario);
router.delete('/:id', usuarioController.deletarUsuario);

export default router;
