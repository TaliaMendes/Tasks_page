import { Router } from 'express'
import AuthController from '../controller/authenticateController.js'

const routes = Router()

routes.post('/authenticate', AuthController.authenticate)

export default routes