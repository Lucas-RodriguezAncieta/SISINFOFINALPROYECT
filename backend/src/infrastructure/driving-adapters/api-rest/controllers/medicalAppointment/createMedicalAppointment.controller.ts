import { v4 as uuidv4 } from 'uuid'
import { type Request, type Response, type NextFunction } from 'express'
import { type MedicalAppointment } from '../../../../../domain/entities/medicalAppointment'
import { PostgresMedicalAppointmentRepository } from '../../../../../infrastructure/implementations/postgres/PostgresMedicalAppointmentRepository'
import { CreateMedicalAppointmentUseCase } from '../../../../../app/usecases/medicalAppointment/CreateMedicalAppointmentUseCase'

export const createMedicalAppointment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {
    hospital_id,
    patient_id,
    doctor_id,
    appointment_status_id,
    appointment_date,
    appointment_time
  } = req.body

  const repo = new PostgresMedicalAppointmentRepository()
  const usecase = new CreateMedicalAppointmentUseCase(repo)

  const appointment: MedicalAppointment = {
    id: uuidv4(),
    diagnosis_id: uuidv4(),
    hospital_id,
    patient_id,
    doctor_id,
    appointment_status_id,
    appointment_date: new Date(appointment_date),
    appointment_time
  }

  try {
    const result = await usecase.run(appointment)
    res.json(result)
  } catch (e) {
    next(e)
  }
}
