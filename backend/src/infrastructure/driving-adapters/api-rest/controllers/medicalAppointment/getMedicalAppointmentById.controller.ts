import { type Request, type Response, type NextFunction } from 'express'
import { PostgresMedicalAppointmentRepository } from '../../../../../infrastructure/implementations/postgres/PostgresMedicalAppointmentRepository'
import { GetMedicalAppointmentByIdUseCase } from '../../../../../app/usecases/medicalAppointment/GetMedicalAppointmentByIdUseCase'

export const getMedicalAppointmentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params

  const repo = new PostgresMedicalAppointmentRepository()
  const usecase = new GetMedicalAppointmentByIdUseCase(repo)

  try {
    const result = await usecase.run(id)
    res.json(result)
  } catch (e) {
    next(e)
  }
}
