import { type ScheduleRepository } from '../../../domain/repositories/ScheduleRepository'

export class DeleteScheduleUseCase {
  constructor (private readonly repository: ScheduleRepository) {}

  async run (id: string): Promise<void> {
    await this.repository.delete(id)
  }
}
