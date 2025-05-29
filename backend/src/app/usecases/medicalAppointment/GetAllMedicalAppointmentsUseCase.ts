import { type MedicalAppointment } from '../../../domain/entities/medicalAppointment'
import { type MedicalAppointmentRepository } from '../../../domain/repositories/MedicalAppointmentRepository'

export class GetAllMedicalAppointmentsUseCase {
  constructor (private readonly repository: MedicalAppointmentRepository) {}

  async run (): Promise<MedicalAppointment[]> {
    return await this.repository.getAll()
  }
}
