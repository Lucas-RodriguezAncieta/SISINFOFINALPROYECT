import { type User } from '../../../domain/entities/user'
import { type UserRepository } from '../../../domain/repositories/UserRepository'
import { GetUserByIdUseCase } from './GetUserByIdUseCase'

export class UpdateUserUseCase {
  private readonly getUserByIdUseCase: GetUserByIdUseCase

  constructor (private readonly repository: UserRepository) {
    this.getUserByIdUseCase = new GetUserByIdUseCase(repository)
  }

  async run (input: User): Promise<User> {
    const existing = await this.getUserByIdUseCase.run(input.id)
    if (existing === null) throw new Error('User not found')

    const updated: User = {
      id: input.id,
      firebase_uid: input.firebase_uid ?? existing.firebase_uid,
      user_type_id: input.user_type_id ?? existing.user_type_id,
      specialty_id: input.specialty_id ?? existing.specialty_id,
      schedule_id: input.schedule_id ?? existing.schedule_id,
      full_name: input.full_name ?? existing.full_name,
      phone: input.phone ?? existing.phone,

      // nuevas relaciones si vienen definidas
      userClinics: input.userClinics ?? existing.userClinics,
      userHospitals: input.userHospitals ?? existing.userHospitals
    }

    return await this.repository.update(updated)
  }
}
