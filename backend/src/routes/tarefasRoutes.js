import TarefasController from '../controller/tarefasController.js'
import { tarefaMiddleware } from '../middleware/tarefa.middleware.js'
import {  checkToken } from '../middleware/authenticate.midllewares.js'
import { Router } from 'express'

const routes = Router()

routes.get('/tarefas', checkToken, TarefasController.getTarefas)
routes.get('/tarefas/:id', checkToken, TarefasController.getTarefasById)
routes.post('/tarefas/:id', checkToken, tarefaMiddleware, TarefasController.novaTarefa)
routes.put('/tarefas/:id', checkToken, tarefaMiddleware, TarefasController.atualizarTarefa)
routes.delete('/tarefas/:id', checkToken, TarefasController.deletarTarefa)

export default routes