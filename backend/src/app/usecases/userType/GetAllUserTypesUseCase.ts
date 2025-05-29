import { type UserType } from '../../../domain/entities/userType'
import { type UserTypeRepository } from '../../../domain/repositories/UserTypeRepository'

export class GetAllUserTypesUseCase {
  constructor (private readonly repository: UserTypeRepository) {}

  async run (): Promise<UserType[]> {
    return await this.repository.getAll()
  }
}
