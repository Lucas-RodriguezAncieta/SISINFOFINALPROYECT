import { PrismaClient } from '@prisma/client'

import { type Diagnosis } from '../../../domain/entities/diagnosis'
import { type DiagnosisRepository } from '../../../domain/repositories/DiagnosisRepository'

const prisma = new PrismaClient()

export class PostgresDiagnosisRepository implements DiagnosisRepository {
  async getAll (): Promise<Diagnosis[]> {
    return prisma.diagnosis.findMany()
  }

  async save (diagnosis: Diagnosis): Promise<Diagnosis> {
    return prisma.diagnosis.create({
      data: {
        id: diagnosis.id,
        diagnosis_description: diagnosis.diagnosis_description
      }
    })
  }
}
