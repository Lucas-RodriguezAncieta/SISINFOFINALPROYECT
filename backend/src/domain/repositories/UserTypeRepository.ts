import { type UserType } from '../../domain/entities/userType'

export interface UserTypeRepository {
  getAll: () => Promise<UserType[]>
  save: (userType: UserType) => Promise<UserType>
}
