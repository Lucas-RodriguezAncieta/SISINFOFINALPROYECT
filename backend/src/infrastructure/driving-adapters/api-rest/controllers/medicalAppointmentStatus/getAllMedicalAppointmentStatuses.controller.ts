import { type Request, type Response, type NextFunction } from 'express'
import { PostgresMedicalAppointmentStatusRepository } from '../../../../../infrastructure/implementations/postgres/PostgresMedicalAppointmentStatusRepository'
import { GetAllMedicalAppointmentStatusesUseCase } from '../../../../../app/usecases/medicalAppointmentStatus/GetAllMedicalAppointmentStatusesUseCase'

export const getAllMedicalAppointmentStatuses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const repo = new PostgresMedicalAppointmentStatusRepository()
  const usecase = new GetAllMedicalAppointmentStatusesUseCase(repo)

  try {
    const result = await usecase.run()
    res.json(result)
  } catch (e) {
    next(e)
  }
}
