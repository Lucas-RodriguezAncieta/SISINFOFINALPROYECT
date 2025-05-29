import { type UserClinic } from '../../../domain/entities/userClinic'
import { type UserClinicRepository } from '../../../domain/repositories/UserClinicRepository'

export class CreateUserClinicUseCase {
  constructor (private readonly repository: UserClinicRepository) {}

  async run (userClinic: UserClinic): Promise<UserClinic> {
    return await this.repository.save(userClinic)
  }
}
