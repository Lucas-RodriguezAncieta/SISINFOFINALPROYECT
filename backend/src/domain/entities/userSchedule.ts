export interface UserSchedule {
  id: string
  user_id: string
  schedule_id: string
  start_time: string
  end_time: string
  createdAt?: Date
  updatedAt?: Date
}
