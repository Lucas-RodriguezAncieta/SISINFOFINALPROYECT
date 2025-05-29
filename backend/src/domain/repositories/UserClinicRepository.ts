import { type UserClinic } from '../../domain/entities/userClinic'

export interface UserClinicRepository {
  getAll: () => Promise<UserClinic[]>
  save: (userClinic: UserClinic) => Promise<UserClinic>
}
