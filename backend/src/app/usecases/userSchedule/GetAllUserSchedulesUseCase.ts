import { type UserSchedule } from '../../../domain/entities/userSchedule'
import { type UserScheduleRepository } from '../../../domain/repositories/UserScheduleRepository'

export class GetAllUserSchedulesUseCase {
  constructor (private readonly repository: UserScheduleRepository) {}

  async run (): Promise<UserSchedule[]> {
    return await this.repository.getAll()
  }
}
