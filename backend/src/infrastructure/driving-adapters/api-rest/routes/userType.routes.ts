import { Router } from 'express'
import {
  createUserTypeController,
  getAllUserTypesController
} from '../controllers'

const route = Router()

route.post('', createUserTypeController)
route.get('', getAllUserTypesController)

export default route
