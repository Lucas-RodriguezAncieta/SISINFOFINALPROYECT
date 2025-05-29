import { type User } from '../../../domain/entities/user'
import { type UserRepository } from '../../../domain/repositories/UserRepository'

export class GetAllUsersUseCase {
  constructor (private readonly repository: UserRepository) {}

  async run (): Promise<User[]> {
    return await this.repository.getAll()
  }
}
