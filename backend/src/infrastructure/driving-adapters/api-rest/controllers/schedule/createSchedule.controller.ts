import { v4 as uuidv4 } from 'uuid'
import { type Request, type Response, type NextFunction } from 'express'
import { type Schedule } from '../../../../../domain/entities/schedule'
import { PostgresScheduleRepository } from '../../../../../infrastructure/implementations/postgres/PostgresScheduleRepository'
import { CreateScheduleUseCase } from '../../../../../app/usecases/schedule/CreateScheduleUseCase'

export const createSchedule = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { startTime, endTime } = req.body

  const repo = new PostgresScheduleRepository()
  const usecase = new CreateScheduleUseCase(repo)

  const scheduleToCreate: Schedule = {
    id: uuidv4(),
    startTime,
    endTime
  }

  try {
    const created = await usecase.run(scheduleToCreate)
    res.json(created)
  } catch (e) {
    next(e)
  }
}
