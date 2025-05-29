import { type User } from '../../../domain/entities/user'
import { type UserRepository } from '../../../domain/repositories/UserRepository'

export class GetUserByIdUseCase {
  constructor (private readonly repository: UserRepository) {}

  async run (id: string): Promise<User | null> {
    return await this.repository.getById(id)
  }
}
