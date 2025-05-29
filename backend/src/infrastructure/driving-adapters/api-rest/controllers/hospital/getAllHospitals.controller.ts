import { type Request, type Response, type NextFunction } from 'express'
import { PostgresHospitalRepository } from '../../../../../infrastructure/implementations/postgres/PostgresHospitalRepository'
import { GetAllHospitalsUseCase } from '../../../../../app/usecases/hospital/GetAllHospitalsUseCase'

export const getAllHospitals = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const repo = new PostgresHospitalRepository()
  const usecase = new GetAllHospitalsUseCase(repo)

  try {
    const result = await usecase.run()
    res.json(result)
  } catch (e) {
    next(e)
  }
}
