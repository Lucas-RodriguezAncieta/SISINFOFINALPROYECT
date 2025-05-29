import { type Clinic } from '../../domain/entities/clinic'

export interface ClinicRepository {
  getAll: () => Promise<Clinic[]>
  save: (clinic: Clinic) => Promise<Clinic>
}
