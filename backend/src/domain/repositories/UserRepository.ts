import { type User } from '../../domain/entities/user'

export interface UserRepository {
  getAll: () => Promise<User[]>
  save: (user: User) => Promise<User>
  getById: (id: string) => Promise<User | null>
  getByFirebaseUid: (uid: string) => Promise<User | null>
  update: (user: User) => Promise<User>
  delete: (id: string) => Promise<void>
}
