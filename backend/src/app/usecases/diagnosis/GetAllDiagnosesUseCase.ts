import { type Diagnosis } from '../../../domain/entities/diagnosis'
import { type DiagnosisRepository } from '../../../domain/repositories/DiagnosisRepository'

export class GetAllDiagnosesUseCase {
  constructor (private readonly repository: DiagnosisRepository) {}

  async run (): Promise<Diagnosis[]> {
    return await this.repository.getAll()
  }
}
