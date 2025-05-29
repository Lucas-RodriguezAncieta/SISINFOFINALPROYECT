import { PrismaClient } from '@prisma/client'

import { type Clinic } from '../../../domain/entities/clinic'
import { type ClinicRepository } from '../../../domain/repositories/ClinicRepository'

const prisma = new PrismaClient()

export class PostgresClinicRepository implements ClinicRepository {
  async getAll (): Promise<Clinic[]> {
    return await prisma.clinic.findMany({
      include: {
        hospital: true
      }
    })
  }

  async save (clinic: Clinic): Promise<Clinic> {
    return await prisma.clinic.create({
      data: {
        id: clinic.id,
        clinic_code: clinic.clinic_code,
        hospital_id: clinic.hospital_id
      },
      include: {
        hospital: true
      }
    })
  }
}
