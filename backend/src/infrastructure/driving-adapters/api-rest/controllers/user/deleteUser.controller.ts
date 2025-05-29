import { type Request, type Response, type NextFunction } from 'express'
import { PostgresUserRepository } from '../../../../../infrastructure/implementations/postgres/PostgresUserRepository'
import { DeleteUserUseCase } from '../../../../../app/usecases/user/DeleteUserUseCase'

export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params

  const repo = new PostgresUserRepository()
  const usecase = new DeleteUserUseCase(repo)

  try {
    await usecase.run(id)
    res.json({ message: 'User deleted successfully' })
  } catch (e) {
    next(e)
  }
}
