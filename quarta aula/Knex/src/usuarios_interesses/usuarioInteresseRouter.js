import { Router } from 'express';
import * as usuarioInteresseController from './usuarioInteresseController.js';

const router = Router();

router.post('/', usuarioInteresseController.criarUsuarioInteresse);
router.get('/', usuarioInteresseController.listarUsuariosInteresses);
router.get('/:usuario_id/:interesse_id', usuarioInteresseController.visualizarUsuarioInteresse);
router.delete('/:usuario_id/:interesse_id', usuarioInteresseController.deletarUsuarioInteresse);

export default router;
