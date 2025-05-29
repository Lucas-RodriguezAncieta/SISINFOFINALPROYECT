import { Router } from 'express'
import {
  createClinicController,
  getAllClinicsController
} from '../controllers'

const route = Router()

route.post('', createClinicController)
route.get('', getAllClinicsController)

export default route
