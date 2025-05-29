import { type Request, type Response, type NextFunction } from 'express'
import { type User } from '../../../../../domain/entities/user'
import { PostgresUserRepository } from '../../../../../infrastructure/implementations/postgres/PostgresUserRepository'
import { UpdateUserUseCase } from '../../../../../app/usecases/user/UpdateUserUseCase'

export const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params
  const {
    firebase_uid,
    user_type_id,
    specialty_id,
    schedule_id,
    full_name,
    phone
  } = req.body

  const repo = new PostgresUserRepository()
  const usecase = new UpdateUserUseCase(repo)

  const userToUpdate: User = {
    id,
    firebase_uid,
    user_type_id,
    specialty_id,
    schedule_id,
    full_name,
    phone
  }

  try {
    const updated = await usecase.run(userToUpdate)
    res.json(updated)
  } catch (e) {
    next(e)
  }
}
