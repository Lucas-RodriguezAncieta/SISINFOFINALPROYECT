import { type UserHospital } from '../../../domain/entities/userHospital'
import { type UserHospitalRepository } from '../../../domain/repositories/UserHospitalRepository'

export class CreateUserHospitalUseCase {
  constructor (private readonly repository: UserHospitalRepository) {}

  async run (userHospital: UserHospital): Promise<UserHospital> {
    return await this.repository.save(userHospital)
  }
}
