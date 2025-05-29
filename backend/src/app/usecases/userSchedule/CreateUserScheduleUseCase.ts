import { type UserSchedule } from '../../../domain/entities/userSchedule'
import { type UserScheduleRepository } from '../../../domain/repositories/UserScheduleRepository'

export class CreateUserScheduleUseCase {
  constructor (private readonly repository: UserScheduleRepository) {}

  async run (userSchedule: UserSchedule): Promise<UserSchedule> {
    return await this.repository.save(userSchedule)
  }
}
