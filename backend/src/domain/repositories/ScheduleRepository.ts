import { type Schedule } from '../../domain/entities/schedule'

export interface ScheduleRepository {
  getAll: () => Promise<Schedule[]>
  save: (schedule: Schedule) => Promise<Schedule>
  update: (schedule: Schedule) => Promise<Schedule>
  delete: (id: string) => Promise<void>
  getById: (id: string) => Promise<Schedule | null>
}
