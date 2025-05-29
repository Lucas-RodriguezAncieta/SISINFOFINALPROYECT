import { type Specialty } from '../../domain/entities/specialty'

export interface SpecialtyRepository {
  getAll: () => Promise<Specialty[]>
  save: (specialty: Specialty) => Promise<Specialty>
}
