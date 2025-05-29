import { type Request, type Response, type NextFunction } from 'express'
import { PostgresSpecialtyRepository } from '../../../../../infrastructure/implementations/postgres/PostgresSpecialtyRepository'
import { GetAllSpecialtiesUseCase } from '../../../../../app/usecases/speciality/GetAllSpecialtiesUseCase'

export const getAllSpecialties = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const repo = new PostgresSpecialtyRepository()
  const usecase = new GetAllSpecialtiesUseCase(repo)

  try {
    const result = await usecase.run()
    res.json(result)
  } catch (e) {
    next(e)
  }
}
