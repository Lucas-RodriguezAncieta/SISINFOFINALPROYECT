import { PrismaClient } from '@prisma/client'
import { type User } from '../../../domain/entities/user'
import { type UserRepository } from '../../../domain/repositories/UserRepository'

const prisma = new PrismaClient()

export class PostgresUserRepository implements UserRepository {
  async getAll (): Promise<User[]> {
    const results = await prisma.user.findMany({
      include: {
        user_type: true,
        specialty: true,
        schedule: true,
        userClinics: { include: { clinic: true } },
        userHospitals: { include: { hospital: true } }
      }
    })

    return results.map(result => ({
      ...result,
      userClinics: result.userClinics.map(uc => uc.clinic),
      userHospitals: result.userHospitals.map(uh => uh.hospital)
    }))
  }

  async save (user: User): Promise<User> {
    const createdUser = await prisma.user.create({
      data: {
        id: user.id,
        firebase_uid: user.firebase_uid,
        user_type_id: user.user_type_id,
        specialty_id: user.specialty_id ?? null,
        schedule_id: user.schedule_id ?? null,
        full_name: user.full_name,
        phone: user.phone
      }
    })

    if (user.userClinics != null) {
      await prisma.userClinic.createMany({
        data: user.userClinics.map(c => ({
          user_id: createdUser.id,
          clinic_id: c.id
        }))
      })
    }

    if (user.userHospitals != null) {
      await prisma.userHospital.createMany({
        data: user.userHospitals.map(h => ({
          user_id: createdUser.id,
          hospital_id: h.id
        }))
      })
    }

    return this.getById(createdUser.id) as Promise<User>
  }

  async getById (id: string): Promise<User | null> {
    const result = await prisma.user.findUnique({
      where: { id },
      include: {
        user_type: true,
        specialty: true,
        schedule: true,
        userClinics: { include: { clinic: true } },
        userHospitals: { include: { hospital: true } }
      }
    })

    if (result !== null) {
      return {
        ...result,
        userClinics: result.userClinics.map(uc => uc.clinic),
        userHospitals: result.userHospitals.map(uh => uh.hospital)
      }
    }

    return null
  }

  async getByFirebaseUid (uid: string): Promise<User | null> {
    const result = await prisma.user.findUnique({
      where: { firebase_uid: uid },
      include: {
        user_type: true,
        specialty: true,
        schedule: true,
        userClinics: { include: { clinic: true } },
        userHospitals: { include: { hospital: true } }
      }
    })
    if (result !== null) {
      return {
        ...result,
        userClinics: result.userClinics.map(uc => uc.clinic),
        userHospitals: result.userHospitals.map(uh => uh.hospital)
      }
    }
    return null
  }

  async update (user: User): Promise<User> {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        firebase_uid: user.firebase_uid,
        user_type_id: user.user_type_id,
        specialty_id: user.specialty_id ?? null,
        schedule_id: user.schedule_id ?? null,
        full_name: user.full_name,
        phone: user.phone
      }
    })

    return this.getById(user.id) as Promise<User>
  }

  async delete (id: string): Promise<void> {
    await prisma.user.delete({
      where: { id }
    })
  }
}
