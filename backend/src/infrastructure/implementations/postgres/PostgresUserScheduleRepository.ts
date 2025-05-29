import { PrismaClient } from '@prisma/client'

import { type UserSchedule } from '../../../domain/entities/userSchedule'
import { type UserScheduleRepository } from '../../../domain/repositories/UserScheduleRepository'

const prisma = new PrismaClient()

export class PostgresUserScheduleRepository implements UserScheduleRepository {
  async getAll (): Promise<UserSchedule[]> {
    return prisma.userSchedule.findMany()
  }

  async save (userSchedule: UserSchedule): Promise<UserSchedule> {
    return prisma.userSchedule.create({
      data: {
        id: userSchedule.id,
        user_id: userSchedule.user_id,
        schedule_id: userSchedule.schedule_id,
        start_time: userSchedule.start_time,
        end_time: userSchedule.end_time
      }
    })
  }
}
