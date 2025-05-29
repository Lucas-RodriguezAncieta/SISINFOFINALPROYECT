import { v4 as uuidv4 } from 'uuid'
import { type Request, type Response, type NextFunction } from 'express'
import { type MedicalAppointmentStatus } from '../../../../../domain/entities/medicalAppointmentStatus'
import { PostgresMedicalAppointmentStatusRepository } from '../../../../../infrastructure/implementations/postgres/PostgresMedicalAppointmentStatusRepository'
import { CreateMedicalAppointmentStatusUseCase } from '../../../../../app/usecases/medicalAppointmentStatus/CreateMedicalAppointmentStatusUseCase'

export const createMedicalAppointmentStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { status_name } = req.body

  const repo = new PostgresMedicalAppointmentStatusRepository()
  const usecase = new CreateMedicalAppointmentStatusUseCase(repo)

  const status: MedicalAppointmentStatus = {
    id: uuidv4(),
    status_name
  }

  try {
    const result = await usecase.run(status)
    res.json(result)
  } catch (e) {
    next(e)
  }
}
