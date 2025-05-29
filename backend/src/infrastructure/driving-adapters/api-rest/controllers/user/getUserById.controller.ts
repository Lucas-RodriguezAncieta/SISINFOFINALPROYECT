import { type Request, type Response, type NextFunction } from 'express'
import { PostgresUserRepository } from '../../../../../infrastructure/implementations/postgres/PostgresUserRepository'
import { GetUserByIdUseCase } from '../../../../../app/usecases/user/GetUserByIdUseCase'

export const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params

  const repo = new PostgresUserRepository()
  const service = new GetUserByIdUseCase(repo)

  try {
    const user = await service.run(id)
    res.json(user)
  } catch (e) {
    next(e)
  }
}
