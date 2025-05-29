import { type Hospital } from '../../domain/entities/hospital'

export interface HospitalRepository {
  getAll: () => Promise<Hospital[]>
  save: (hospital: Hospital) => Promise<Hospital>
}
