import express from 'express'
import tarefasRoutes from './tarefasRoutes.js'
import usuariosRoutes from './usuariosRoutes.js'
import authenticateRoutes from './authenticateRoutes.js'

const routes = express.Router()

routes.use('/api/organize/', tarefasRoutes)
routes.use('/api/organize/', usuariosRoutes)
routes.use('/api/organize/', authenticateRoutes)

export default routes