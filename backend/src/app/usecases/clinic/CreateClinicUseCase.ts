import { type Clinic } from '../../../domain/entities/clinic'
import { type ClinicRepository } from '../../../domain/repositories/ClinicRepository'

export class CreateClinicUseCase {
  constructor (private readonly repository: ClinicRepository) {}

  async run (clinic: Clinic): Promise<Clinic> {
    return await this.repository.save(clinic)
  }
}
