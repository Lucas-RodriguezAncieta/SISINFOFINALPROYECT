import { type Diagnosis } from '../../domain/entities/diagnosis'

export interface DiagnosisRepository {
  getAll: () => Promise<Diagnosis[]>
  save: (diagnosis: Diagnosis) => Promise<Diagnosis>
}
