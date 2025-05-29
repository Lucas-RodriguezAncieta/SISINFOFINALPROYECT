import { type Schedule } from '../../../domain/entities/schedule'
import { type ScheduleRepository } from '../../../domain/repositories/ScheduleRepository'

export class UpdateScheduleUseCase {
  private readonly _scheduleRepository: ScheduleRepository

  constructor (scheduleRepository: ScheduleRepository) {
    this._scheduleRepository = scheduleRepository
  }

  async run (input: Schedule): Promise<Schedule> {
    return await this._scheduleRepository.update(input)
  }
}
