import { type Request, type Response, type NextFunction } from 'express'
import { PostgresMedicalAppointmentRepository } from '../../../../../infrastructure/implementations/postgres/PostgresMedicalAppointmentRepository'
import { DeleteMedicalAppointmentUseCase } from '../../../../../app/usecases/medicalAppointment/DeleteMedicalAppointmentUseCase'

export const deleteMedicalAppointment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params

  const repo = new PostgresMedicalAppointmentRepository()
  const usecase = new DeleteMedicalAppointmentUseCase(repo)

  try {
    await usecase.run(id)
    res.json({ message: 'Cita médica eliminada correctamente' })
  } catch (e) {
    next(e)
  }
}
