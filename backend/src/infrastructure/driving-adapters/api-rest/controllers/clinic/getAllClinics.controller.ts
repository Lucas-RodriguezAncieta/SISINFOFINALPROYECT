import { type Request, type Response, type NextFunction } from 'express'
import { PostgresClinicRepository } from '../../../../../infrastructure/implementations/postgres/PostgresClinicRepository'
import { GetAllClinicsUseCase } from '../../../../../app/usecases/clinic/GetAllClinicsUseCase'

export const getAllClinics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const repo = new PostgresClinicRepository()
  const usecase = new GetAllClinicsUseCase(repo)

  try {
    const result = await usecase.run()
    res.json(result)
  } catch (e) {
    next(e)
  }
}
