import { PrismaClient } from '@prisma/client'

import { type Hospital } from '../../../domain/entities/hospital'
import { type HospitalRepository } from '../../../domain/repositories/HospitalRepository'

const prisma = new PrismaClient()

export class PostgresHospitalRepository implements HospitalRepository {
  async getAll (): Promise<Hospital[]> {
    return prisma.hospital.findMany()
  }

  async save (hospital: Hospital): Promise<Hospital> {
    return prisma.hospital.create({
      data: {
        id: hospital.id,
        name: hospital.name
      }
    })
  }
}
