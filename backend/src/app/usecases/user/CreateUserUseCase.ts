import { type User } from '../../../domain/entities/user'
import { type UserRepository } from '../../../domain/repositories/UserRepository'

export class CreateUserUseCase {
  constructor (private readonly repository: UserRepository) {}

  async run (user: User): Promise<User> {
    return await this.repository.save(user)
  }
}
