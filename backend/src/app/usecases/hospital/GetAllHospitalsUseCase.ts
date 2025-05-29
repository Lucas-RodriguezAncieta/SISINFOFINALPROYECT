import { type Hospital } from '../../../domain/entities/hospital'
import { type HospitalRepository } from '../../../domain/repositories/HospitalRepository'

export class GetAllHospitalsUseCase {
  constructor (private readonly repository: HospitalRepository) {}

  async run (): Promise<Hospital[]> {
    return await this.repository.getAll()
  }
}
