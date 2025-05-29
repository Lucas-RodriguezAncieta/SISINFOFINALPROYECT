import { PrismaClient } from '@prisma/client'
import { type Specialty } from '../../../domain/entities/specialty'
import { type SpecialtyRepository } from '../../../domain/repositories/SpecialtyRepository'

const prisma = new PrismaClient()

export class PostgresSpecialtyRepository implements SpecialtyRepository {
  async getAll (): Promise<Specialty[]> {
    return prisma.specialty.findMany()
  }

  async save (specialty: Specialty): Promise<Specialty> {
    return prisma.specialty.create({
      data: {
        id: specialty.id,
        specialty_name: specialty.specialty_name
      }
    })
  }
}
