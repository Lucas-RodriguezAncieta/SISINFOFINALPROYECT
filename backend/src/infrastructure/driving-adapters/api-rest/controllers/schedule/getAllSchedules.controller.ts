import { type Request, type Response, type NextFunction } from 'express'
import { PostgresScheduleRepository } from '../../../../../infrastructure/implementations/postgres/PostgresScheduleRepository'
import { GetAllSchedulesUseCase } from '../../../../../app/usecases/schedule/GetAllSchedulesUseCase'

export const getAllSchedules = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const repo = new PostgresScheduleRepository()
  const usecase = new GetAllSchedulesUseCase(repo)

  try {
    const result = await usecase.run()
    res.json(result)
  } catch (e) {
    next(e)
  }
}
