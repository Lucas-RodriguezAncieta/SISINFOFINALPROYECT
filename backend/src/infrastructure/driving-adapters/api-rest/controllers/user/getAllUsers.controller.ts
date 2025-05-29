import { type Request, type Response, type NextFunction } from 'express'
import { PostgresUserRepository } from '../../../../../infrastructure/implementations/postgres/PostgresUserRepository'
import { GetAllUsersUseCase } from '../../../../../app/usecases/user/GetAllUsersUseCase'

export const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const repo = new PostgresUserRepository()
  const usecase = new GetAllUsersUseCase(repo)

  try {
    const result = await usecase.run()
    res.json(result)
  } catch (e) {
    next(e)
  }
}
