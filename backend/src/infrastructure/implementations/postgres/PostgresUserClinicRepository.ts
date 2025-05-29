import { PrismaClient } from '@prisma/client'

import { type UserClinic } from '../../../domain/entities/userClinic'
import { type UserClinicRepository } from '../../../domain/repositories/UserClinicRepository'

const prisma = new PrismaClient()

export class PostgresUserClinicRepository implements UserClinicRepository {
  async getAll (): Promise<UserClinic[]> {
    return prisma.userClinic.findMany()
  }

  async save (userClinic: UserClinic): Promise<UserClinic> {
    return prisma.userClinic.create({
      data: {
        id: userClinic.id,
        user_id: userClinic.user_id,
        clinic_id: userClinic.clinic_id
      }
    })
  }
}
