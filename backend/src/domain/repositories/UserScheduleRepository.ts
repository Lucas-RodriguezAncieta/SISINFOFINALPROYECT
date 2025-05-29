import { type UserSchedule } from '../../domain/entities/userSchedule'

export interface UserScheduleRepository {
  getAll: () => Promise<UserSchedule[]>
  save: (userSchedule: UserSchedule) => Promise<UserSchedule>
}
