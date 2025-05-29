import { type Diagnosis } from '../../../domain/entities/diagnosis'
import { type DiagnosisRepository } from '../../../domain/repositories/DiagnosisRepository'

export class CreateDiagnosisUseCase {
  constructor (private readonly repository: DiagnosisRepository) {}

  async run (diagnosis: Diagnosis): Promise<Diagnosis> {
    return await this.repository.save(diagnosis)
  }
}
