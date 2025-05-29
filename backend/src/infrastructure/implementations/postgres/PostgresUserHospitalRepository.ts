import { PrismaClient } from '@prisma/client'

import { type UserHospital } from '../../../domain/entities/userHospital'
import { type UserHospitalRepository } from '../../../domain/repositories/UserHospitalRepository'

const prisma = new PrismaClient()

export class PostgresUserHospitalRepository implements UserHospitalRepository {
  async getAll (): Promise<UserHospital[]> {
    return await prisma.userHospital.findMany()
  }

  async save (userHospital: UserHospital): Promise<UserHospital> {
    return prisma.userHospital.create({
      data: {
        id: userHospital.id,
        user_id: userHospital.user_id,
        hospital_id: userHospital.hospital_id
      }
    })
  }
}
