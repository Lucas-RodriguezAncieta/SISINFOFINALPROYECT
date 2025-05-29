import { v4 as uuidv4 } from 'uuid'
import { type Request, type Response, type NextFunction } from 'express'
import { type Hospital } from '../../../../../domain/entities/hospital'
import { PostgresHospitalRepository } from '../../../../../infrastructure/implementations/postgres/PostgresHospitalRepository'
import { CreateHospitalUseCase } from '../../../../../app/usecases/hospital/CreateHospitalUseCase'

export const createHospital = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { name } = req.body

  const repo = new PostgresHospitalRepository()
  const usecase = new CreateHospitalUseCase(repo)

  const hospitalToCreate: Hospital = {
    id: uuidv4(),
    name
  }

  try {
    const created = await usecase.run(hospitalToCreate)
    res.json(created)
  } catch (e) {
    next(e)
  }
}
