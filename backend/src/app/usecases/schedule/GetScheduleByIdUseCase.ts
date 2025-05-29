import { type Schedule } from '../../../domain/entities/schedule'
import { type ScheduleRepository } from '../../../domain/repositories/ScheduleRepository'

export class GetScheduleByIdUseCase {
  constructor (private readonly repository: ScheduleRepository) {}

  async run (id: string): Promise<Schedule | null> {
    return await this.repository.getById(id)
  }
}
