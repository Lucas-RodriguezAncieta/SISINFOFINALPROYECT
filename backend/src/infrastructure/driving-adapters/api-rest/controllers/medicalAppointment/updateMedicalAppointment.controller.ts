import { type Request, type Response, type NextFunction } from 'express'
import { PostgresMedicalAppointmentRepository } from '../../../../../infrastructure/implementations/postgres/PostgresMedicalAppointmentRepository'
import { UpdateMedicalAppointmentUseCase } from '../../../../../app/usecases/medicalAppointment/UpdateMedicalAppointmentUseCase'
import { type MedicalAppointment } from '../../../../../domain/entities/medicalAppointment'

export const updateMedicalAppointment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params
  const {
    hospital_id,
    patient_id,
    doctor_id,
    diagnosis_id,
    appointment_status_id,
    appointment_date,
    appointment_time,
    diagnosis_description
  } = req.body

  const repo = new PostgresMedicalAppointmentRepository()
  const usecase = new UpdateMedicalAppointmentUseCase(repo)

  const appointment: MedicalAppointment & { diagnosis_description?: string } = {
    id,
    hospital_id,
    patient_id,
    doctor_id,
    diagnosis_id,
    appointment_status_id,
    appointment_date: new Date(appointment_date),
    appointment_time,
    diagnosis_description
  }

  try {
    const result = await usecase.run(appointment)
    res.json(result)
  } catch (e) {
    next(e)
  }
}
