import { Router } from 'express'
import {
  createMedicalAppointmentStatusController,
  getAllMedicalAppointmentStatusesController
} from '../controllers'

const route = Router()

route.post('', createMedicalAppointmentStatusController)
route.get('', getAllMedicalAppointmentStatusesController)

export default route
