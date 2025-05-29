import { type UserRepository } from '../../../domain/repositories/UserRepository'

export class DeleteUserUseCase {
  constructor (private readonly repository: UserRepository) {}

  async run (id: string): Promise<void> {
    await this.repository.delete(id)
  }
}
