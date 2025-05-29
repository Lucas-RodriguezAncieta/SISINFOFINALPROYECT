import { type MedicalAppointmentStatus } from '../../../domain/entities/medicalAppointmentStatus'
import { type MedicalAppointmentStatusRepository } from '../../../domain/repositories/MedicalAppointmentStatusRepository'

export class CreateMedicalAppointmentStatusUseCase {
  constructor (private readonly repository: MedicalAppointmentStatusRepository) {}

  async run (status: MedicalAppointmentStatus): Promise<MedicalAppointmentStatus> {
    return await this.repository.save(status)
  }
}
