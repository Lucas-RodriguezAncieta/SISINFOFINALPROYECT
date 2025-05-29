import { type UserHospital } from '../../../domain/entities/userHospital'
import { type UserHospitalRepository } from '../../../domain/repositories/UserHospitalRepository'

export class GetAllUserHospitalsUseCase {
  constructor (private readonly repository: UserHospitalRepository) {}

  async run (): Promise<UserHospital[]> {
    return await this.repository.getAll()
  }
}
