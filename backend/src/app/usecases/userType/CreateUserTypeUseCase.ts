import { type UserType } from '../../../domain/entities/userType'
import { type UserTypeRepository } from '../../../domain/repositories/UserTypeRepository'

export class CreateUserTypeUseCase {
  constructor (private readonly repository: UserTypeRepository) {}

  async run (userType: UserType): Promise<UserType> {
    return await this.repository.save(userType)
  }
}
