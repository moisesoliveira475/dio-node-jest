import { Router } from 'express'
import { UsersControllers } from './controllers/usersControlers'

const routes = Router()

const usersControlers = new UsersControllers()

routes.get('/users', usersControlers.listUsers)

routes.post('/users', usersControlers.createUsers)

export { routes }