import { PrismaClient } from '@prisma/client'
import { type Schedule } from '../../../domain/entities/schedule'
import { type ScheduleRepository } from '../../../domain/repositories/ScheduleRepository'

const prisma = new PrismaClient()

export class PostgresScheduleRepository implements ScheduleRepository {
  async getAll (): Promise<Schedule[]> {
    return prisma.schedule.findMany()
  }

  async save (schedule: Schedule): Promise<Schedule> {
    return prisma.schedule.create({
      data: {
        id: schedule.id,
        startTime: schedule.startTime,
        endTime: schedule.endTime
      }
    })
  }

  async update (schedule: Schedule): Promise<Schedule> {
    return prisma.schedule.update({
      where: { id: schedule.id },
      data: {
        startTime: schedule.startTime,
        endTime: schedule.endTime
      }
    })
  }

  async delete (id: string): Promise<void> {
    await prisma.schedule.delete({
      where: { id }
    })
  }

  async getById (id: string): Promise<Schedule | null> {
    return prisma.schedule.findUnique({
      where: { id }
    })
  }
}
