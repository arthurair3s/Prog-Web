import { Router } from 'express';
import * as fotoUsuarioController from './fotoUsuarioController.js';

const router = Router();

router.post('/', fotoUsuarioController.criarFotoUsuario);
router.get('/', fotoUsuarioController.listarFotosUsuarios);
router.get('/:id', fotoUsuarioController.visualizarFotoUsuario);
router.put('/:id', fotoUsuarioController.atualizarFotoUsuario);
router.delete('/:id', fotoUsuarioController.deletarFotoUsuario);

export default router;
