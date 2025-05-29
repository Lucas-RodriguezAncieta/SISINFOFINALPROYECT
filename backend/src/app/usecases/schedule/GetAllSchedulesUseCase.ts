import { type Schedule } from '../../../domain/entities/schedule'
import { type ScheduleRepository } from '../../../domain/repositories/ScheduleRepository'

export class GetAllSchedulesUseCase {
  constructor (private readonly repository: ScheduleRepository) {}

  async run (): Promise<Schedule[]> {
    return await this.repository.getAll()
  }
}
