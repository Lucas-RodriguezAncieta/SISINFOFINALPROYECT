import { type Specialty } from '../../../domain/entities/specialty'
import { type SpecialtyRepository } from '../../../domain/repositories/SpecialtyRepository'

export class GetAllSpecialtiesUseCase {
  constructor (private readonly repository: SpecialtyRepository) {}

  async run (): Promise<Specialty[]> {
    return await this.repository.getAll()
  }
}
