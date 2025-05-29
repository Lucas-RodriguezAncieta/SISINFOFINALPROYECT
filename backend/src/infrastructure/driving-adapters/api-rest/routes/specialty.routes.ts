import { Router } from 'express'
import {
  createSpecialtyController,
  getAllSpecialtiesController
} from '../controllers'

const route = Router()

route.post('', createSpecialtyController)
route.get('', getAllSpecialtiesController)

export default route
