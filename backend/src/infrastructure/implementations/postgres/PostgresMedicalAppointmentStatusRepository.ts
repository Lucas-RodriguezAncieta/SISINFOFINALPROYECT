import { PrismaClient } from '@prisma/client'

import { type MedicalAppointmentStatus } from '../../../domain/entities/medicalAppointmentStatus'
import { type MedicalAppointmentStatusRepository } from '../../../domain/repositories/MedicalAppointmentStatusRepository'

const prisma = new PrismaClient()

export class PostgresMedicalAppointmentStatusRepository implements MedicalAppointmentStatusRepository {
  async getAll (): Promise<MedicalAppointmentStatus[]> {
    return prisma.medicalAppointmentStatus.findMany()
  }

  async save (status: MedicalAppointmentStatus): Promise<MedicalAppointmentStatus> {
    return prisma.medicalAppointmentStatus.create({
      data: {
        id: status.id,
        status_name: status.status_name
      }
    })
  }
}
