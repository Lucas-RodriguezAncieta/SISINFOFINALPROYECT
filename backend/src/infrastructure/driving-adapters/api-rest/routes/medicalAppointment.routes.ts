import { Router } from 'express'
import {
  createMedicalAppointmentController,
  getAllMedicalAppointmentsController,
  getMedicalAppointmentByIdController,
  updateMedicalAppointmentController,
  deleteMedicalAppointmentController
} from '../controllers'

const route = Router()

route.post('', createMedicalAppointmentController)
route.get('', getAllMedicalAppointmentsController)
route.get('/:id', getMedicalAppointmentByIdController)
route.put('/:id', updateMedicalAppointmentController)
route.delete('/:id', deleteMedicalAppointmentController)

export default route
