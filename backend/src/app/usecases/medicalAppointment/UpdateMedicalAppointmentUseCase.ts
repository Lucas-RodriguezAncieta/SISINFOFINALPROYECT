import { type MedicalAppointment } from '../../../domain/entities/medicalAppointment'
import { type MedicalAppointmentRepository } from '../../../domain/repositories/MedicalAppointmentRepository'

export class UpdateMedicalAppointmentUseCase {
  constructor (private readonly repository: MedicalAppointmentRepository) {}

  async run (appointment: MedicalAppointment): Promise<MedicalAppointment> {
    return await this.repository.update(appointment)
  }
}
