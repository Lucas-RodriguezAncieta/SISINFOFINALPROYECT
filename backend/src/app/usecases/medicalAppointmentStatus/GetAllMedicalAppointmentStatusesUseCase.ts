import { type MedicalAppointmentStatus } from '../../../domain/entities/medicalAppointmentStatus'
import { type MedicalAppointmentStatusRepository } from '../../../domain/repositories/MedicalAppointmentStatusRepository'

export class GetAllMedicalAppointmentStatusesUseCase {
  constructor (private readonly repository: MedicalAppointmentStatusRepository) {}

  async run (): Promise<MedicalAppointmentStatus[]> {
    return await this.repository.getAll()
  }
}
