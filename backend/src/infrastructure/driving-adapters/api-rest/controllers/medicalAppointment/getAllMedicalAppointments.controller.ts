import { type Request, type Response, type NextFunction } from 'express'
import { PostgresMedicalAppointmentRepository } from '../../../../../infrastructure/implementations/postgres/PostgresMedicalAppointmentRepository'
import { GetAllMedicalAppointmentsUseCase } from '../../../../../app/usecases/medicalAppointment/GetAllMedicalAppointmentsUseCase'

export const getAllMedicalAppointments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const repo = new PostgresMedicalAppointmentRepository()
  const usecase = new GetAllMedicalAppointmentsUseCase(repo)

  try {
    const result = await usecase.run()
    res.json(result)
  } catch (e) {
    next(e)
  }
}
