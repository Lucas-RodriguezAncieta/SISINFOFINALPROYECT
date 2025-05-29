import { type UserClinic } from '../../../domain/entities/userClinic'
import { type UserClinicRepository } from '../../../domain/repositories/UserClinicRepository'

export class GetAllUserClinicsUseCase {
  constructor (private readonly repository: UserClinicRepository) {}

  async run (): Promise<UserClinic[]> {
    return await this.repository.getAll()
  }
}
