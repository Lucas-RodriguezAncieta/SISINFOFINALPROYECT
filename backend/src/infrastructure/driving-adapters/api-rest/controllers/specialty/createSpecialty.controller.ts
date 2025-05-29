import { v4 as uuidv4 } from 'uuid'
import { type Request, type Response, type NextFunction } from 'express'
import { type Specialty } from '../../../../../domain/entities/specialty'
import { PostgresSpecialtyRepository } from '../../../../../infrastructure/implementations/postgres/PostgresSpecialtyRepository'
import { CreateSpecialtyUseCase } from '../../../../../app/usecases/speciality/CreateSpecialtyUseCase'

export const createSpecialty = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { specialty_name: specialtyName } = req.body

  const repo = new PostgresSpecialtyRepository()
  const usecase = new CreateSpecialtyUseCase(repo)

  const specialtyToCreate: Specialty = {
    id: uuidv4(),
    specialty_name: specialtyName
  }

  try {
    const created = await usecase.run(specialtyToCreate)
    res.json(created)
  } catch (e) {
    next(e)
  }
}
