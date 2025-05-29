import { type UserHospital } from '../../domain/entities/userHospital'

export interface UserHospitalRepository {
  getAll: () => Promise<UserHospital[]>
  save: (userHospital: UserHospital) => Promise<UserHospital>
}
