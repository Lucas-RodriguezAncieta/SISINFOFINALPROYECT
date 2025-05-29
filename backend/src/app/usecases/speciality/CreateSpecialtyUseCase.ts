import { type Specialty } from '../../../domain/entities/specialty'
import { type SpecialtyRepository } from '../../../domain/repositories/SpecialtyRepository'

export class CreateSpecialtyUseCase {
  constructor (private readonly repository: SpecialtyRepository) {}

  async run (specialty: Specialty): Promise<Specialty> {
    return await this.repository.save(specialty)
  }
}
