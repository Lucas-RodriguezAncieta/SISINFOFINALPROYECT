import { v4 as uuidv4 } from 'uuid'
import { type Request, type Response, type NextFunction } from 'express'
import { type Clinic } from '../../../../../domain/entities/clinic'
import { PostgresClinicRepository } from '../../../../../infrastructure/implementations/postgres/PostgresClinicRepository'
import { CreateClinicUseCase } from '../../../../../app/usecases/clinic/CreateClinicUseCase'

export const createClinic = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { hospital_id: hospitalId, clinic_code: clinicCode } = req.body

  const repo = new PostgresClinicRepository()
  const usecase = new CreateClinicUseCase(repo)

  const clinicToCreate: Clinic = {
    id: uuidv4(),
    hospital_id: hospitalId,
    clinic_code: clinicCode
  }

  try {
    const created = await usecase.run(clinicToCreate)
    res.json(created)
  } catch (e) {
    next(e)
  }
}
