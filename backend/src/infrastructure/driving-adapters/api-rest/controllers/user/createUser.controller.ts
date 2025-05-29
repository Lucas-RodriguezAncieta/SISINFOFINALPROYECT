import { v4 as uuidv4 } from 'uuid'
import { type Request, type Response, type NextFunction } from 'express'
import { type User } from '../../../../../domain/entities/user'
import { PostgresUserRepository } from '../../../../../infrastructure/implementations/postgres/PostgresUserRepository'
import { CreateUserUseCase } from '../../../../../app/usecases/user/CreateUserUseCase'

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {
    firebase_uid,
    user_type_id,
    specialty_id,
    schedule_id,
    full_name,
    phone
  } = req.body

  const repo = new PostgresUserRepository()
  const usecase = new CreateUserUseCase(repo)

  const userToCreate: User = {
    id: uuidv4(),
    firebase_uid,
    user_type_id,
    specialty_id,
    schedule_id,
    full_name,
    phone
  }

  try {
    const created = await usecase.run(userToCreate)
    res.json(created)
  } catch (e) {
    next(e)
  }
}
