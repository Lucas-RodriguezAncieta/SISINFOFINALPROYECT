import { type Hospital } from '../../../domain/entities/hospital'
import { type HospitalRepository } from '../../../domain/repositories/HospitalRepository'

export class CreateHospitalUseCase {
  constructor (private readonly repository: HospitalRepository) {}

  async run (hospital: Hospital): Promise<Hospital> {
    return await this.repository.save(hospital)
  }
}
