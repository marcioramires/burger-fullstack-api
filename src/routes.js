import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer.js'

import ProductController from './app/controllers/ProductController.js'
import SessionController from './app/controllers/SessionController.js'
import UserController from './app/controllers/UserController.js'
import CategoryController from './app/controllers/CategoryController.js'
import OrderController from './app/controllers/OrderController.js'
import authMiddleware from './app/middlewares/auth.js'

const upload = multer(multerConfig)

const routes = new Router()

routes.post('/users', upload.single('file'), UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)
routes.put('/products/:id', upload.single('file'), ProductController.update)

routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories', CategoryController.index)
routes.put('/categories/:id', upload.single('file'), CategoryController.update)

routes.post('/orders', OrderController.store)
routes.put('/orders/:id', OrderController.update)
routes.get('/orders', OrderController.index)

routes.get('/users', UserController.index)

export default routes
