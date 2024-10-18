import UsuarioController from '../controller/usuariosController.js'
import { usuarioMiddleware } from '../middleware/usuario.middleware.js'
import { checkToken } from '../middleware/authenticate.midllewares.js'
import { Router } from 'express'

const routes = Router()

routes.get('/usuarios', checkToken, UsuarioController.getUsuarios)
routes.post('/usuarios', checkToken, usuarioMiddleware, UsuarioController.novoUsuario)
routes.put('/usuarios/:id', checkToken, usuarioMiddleware, UsuarioController.atualizarUsuario)
routes.delete('/usuarios/:id', checkToken, UsuarioController.deletarUsuario)

export default routes