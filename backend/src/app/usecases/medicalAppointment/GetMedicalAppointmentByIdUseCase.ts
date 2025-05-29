import { type MedicalAppointment } from '../../../domain/entities/medicalAppointment'
import { type MedicalAppointmentRepository } from '../../../domain/repositories/MedicalAppointmentRepository'

export class GetMedicalAppointmentByIdUseCase {
  constructor (private readonly repository: MedicalAppointmentRepository) {}

  async run (id: string): Promise<MedicalAppointment | null> {
    return await this.repository.getById(id)
  }
}
