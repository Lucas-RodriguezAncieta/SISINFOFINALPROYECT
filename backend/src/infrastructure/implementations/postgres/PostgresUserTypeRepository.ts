import { PrismaClient } from '@prisma/client'

import { type UserType } from '../../../domain/entities/userType'
import { type UserTypeRepository } from '../../../domain/repositories/UserTypeRepository'

const prisma = new PrismaClient()

export class PostgresUserTypeRepository implements UserTypeRepository {
  async getAll (): Promise<UserType[]> {
    return prisma.userType.findMany()
  }

  async save (userType: UserType): Promise<UserType> {
    return prisma.userType.create({
      data: {
        id: userType.id,
        type_name: userType.type_name
      }
    })
  }
}
