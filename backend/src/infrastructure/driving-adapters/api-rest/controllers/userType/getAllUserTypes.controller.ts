import { type Request, type Response, type NextFunction } from 'express'
import { PostgresUserTypeRepository } from '../../../../../infrastructure/implementations/postgres/PostgresUserTypeRepository'
import { GetAllUserTypesUseCase } from '../../../../../app/usecases/userType/GetAllUserTypesUseCase'

export const getAllUserTypes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const repo = new PostgresUserTypeRepository()
  const usecase = new GetAllUserTypesUseCase(repo)

  try {
    const result = await usecase.run()
    res.json(result)
  } catch (e) {
    next(e)
  }
}
