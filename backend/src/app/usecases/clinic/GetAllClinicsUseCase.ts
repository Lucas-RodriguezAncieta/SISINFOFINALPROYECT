import { type Clinic } from '../../../domain/entities/clinic'
import { type ClinicRepository } from '../../../domain/repositories/ClinicRepository'

export class GetAllClinicsUseCase {
  constructor (private readonly repository: ClinicRepository) {}

  async run (): Promise<Clinic[]> {
    return await this.repository.getAll()
  }
}
