import { Router } from 'express'
import {
  createHospitalController,
  getAllHospitalsController
} from '../controllers'

const route = Router()

route.post('', createHospitalController)
route.get('', getAllHospitalsController)

export default route
