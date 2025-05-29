import { Router } from 'express'
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController
} from '../controllers'

const route = Router()

route.post('', createUserController)
route.get('', getAllUsersController)
route.get('/:id', getUserByIdController)
route.put('/:id', updateUserController)
route.delete('/:id', deleteUserController)

export default route
