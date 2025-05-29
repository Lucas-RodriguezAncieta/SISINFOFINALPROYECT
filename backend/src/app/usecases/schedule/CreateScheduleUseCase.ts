import { type Schedule } from '../../../domain/entities/schedule'
import { type ScheduleRepository } from '../../../domain/repositories/ScheduleRepository'

export class CreateScheduleUseCase {
  constructor (private readonly repository: ScheduleRepository) {}

  async run (schedule: Schedule): Promise<Schedule> {
    return await this.repository.save(schedule)
  }
}
