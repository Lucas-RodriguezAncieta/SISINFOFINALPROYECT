import { v4 as uuidv4 } from 'uuid'
import { type Request, type Response, type NextFunction } from 'express'
import { type UserType } from '../../../../../domain/entities/userType'
import { PostgresUserTypeRepository } from '../../../../../infrastructure/implementations/postgres/PostgresUserTypeRepository'
import { CreateUserTypeUseCase } from '../../../../../app/usecases/userType/CreateUserTypeUseCase'

export const createUserType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { type_name: typeName } = req.body

  const repo = new PostgresUserTypeRepository()
  const usecase = new CreateUserTypeUseCase(repo)

  const userTypeToCreate: UserType = {
    id: uuidv4(),
    type_name: typeName
  }

  try {
    const created = await usecase.run(userTypeToCreate)
    res.json(created)
  } catch (e) {
    next(e)
  }
}
